import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { performance } from "perf_hooks";
import crypto from "crypto";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Logger Middleware 
const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
app.use(logger);

// Metrics 
let requestCount = 0;
const requestTimes: number[] = [];

const recordMetrics = (
  handler: (req: Request, res: Response) => void | Promise<void>
) => async (req: Request, res: Response) => {
  requestCount++;
  const start = performance.now();
  res.on("finish", () => requestTimes.push(performance.now() - start));
  await handler(req, res);
};

// In-memory Users and Session Tokens 
interface User {
  id: number;
  email: string;
  password: string;
}

const users: User[] = [];
const sessionTokens: Map<string, number> = new Map(); // token → userId

// Auth Middleware 
const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization;
  if (!token || !sessionTokens.has(token)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const userId = sessionTokens.get(token)!;
  const user = users.find(u => u.id === userId);
  if (!user) {
    res.status(403).json({ error: "Invalid session" });
    return;
  }

  (req as any).user = user;
  next();
};

// Routes 

// Health
app.get("/health", recordMetrics((_, res) => {
  res.json({ status: "healthy" });
}));

// Metrics
app.get("/metrics", recordMetrics((_, res) => {
  const avg = requestTimes.length
    ? requestTimes.reduce((a, b) => a + b, 0) / requestTimes.length
    : 0;

  res.set("Content-Type", "text/plain");
  res.send(
    [`request_count ${requestCount}`, `average_response_time_ms ${avg.toFixed(2)}`].join("\n")
  );
}));

// Register
app.post("/auth/register", recordMetrics((req, res) => {
  const { email, password } = req.body;
  if (!email || !password || password.length < 3) {
    res.status(400).json({ error: "Invalid email or password" });
    return;
  }

  if (users.find(u => u.email === email)) {
    res.status(409).json({ error: "User already exists" });
    return;
  }

  const newUser = {
    id: users.length + 1,
    email,
    password
  };
  users.push(newUser);
  res.status(201).json({ message: "User registered" });
}));

// Login
app.post("/auth/login", recordMetrics((req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const token = crypto.randomUUID(); 
  sessionTokens.set(token, user.id);

  res.json({ token });
}));

// Me
app.get("/auth/me", requireAuth, recordMetrics((req, res) => {
  res.json({ user: (req as any).user });
}));

// Start
app.listen(port, () => {
  console.log(`Account Service running on port ${port}`);
});
