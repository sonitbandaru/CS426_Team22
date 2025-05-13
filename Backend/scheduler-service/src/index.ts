import express, { Request, Response } from 'express';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

// Data models
interface Item { id: string; name: string; quantity: number; }
interface Booking { id: string; itemId: string; name: string; quantity: number; pickupTime: string; }

// In-memory storage
const items: Item[] = [
  { id: uuid(), name: "Steak", quantity: 5 },
  { id: uuid(), name: "Bread", quantity: 12 },
  { id: uuid(), name: "Eggs", quantity: 24 },
  { id: uuid(), name: "Avocados", quantity: 6 },
  { id: uuid(), name: "Tikka Massala", quantity: 1 },
  { id: uuid(), name: "Shwarma", quantity: 8 },
  { id: uuid(), name: "Kofte", quantity: 3 },
  { id: uuid(), name: "Bread", quantity: 14 }
];
const pending: Booking[] = [];
const completed: Booking[] = [];

// Server setup
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;

// List items
app.get('/items', (_req, res) => res.json(items));

// Create a new item
app.post('/items', (req: Request, res: Response) => {
  const { name, quantity } = req.body as { name: string; quantity: number };
  if (!name || typeof quantity !== 'number') {
    return res.status(400).json({ error: 'Name (string) and quantity (number) required' });
  }
  const newItem: Item = { id: uuid(), name, quantity };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Book an item
app.post('/book', (req: Request, res: Response) => {
  const { itemId, pickupTime } = req.body as { itemId: string; pickupTime: string };
  const idx = items.findIndex(i => i.id === itemId);
  if (idx < 0) return res.status(404).json({ error: 'Item not found' });

  const [ item ] = items.splice(idx, 1);
  const booking: Booking = {
    id: uuid(),
    itemId: item.id,
    name: item.name,
    quantity: item.quantity,
    pickupTime,
  };
  pending.push(booking);
  res.status(201).json(booking);
});

// List pending pickups
app.get('/pending', (_req, res) => res.json(pending));

// Complete a booking
app.post('/complete', (req: Request, res: Response) => {
  const { bookingId } = req.body as { bookingId: string };
  const idx = pending.findIndex(b => b.id === bookingId);
  if (idx < 0) return res.status(404).json({ error: 'Booking not found' });

  const [ bk ] = pending.splice(idx, 1);
  completed.push(bk);
  res.json(bk);
});

// List completed pickups
app.get('/completed', (_req, res) => res.json(completed));

app.listen(PORT, () => {
  console.log(`Scheduler service running at http://localhost:${PORT}`);
});
