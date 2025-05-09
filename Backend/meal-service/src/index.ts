import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { pino } from 'pino';
import cors from 'cors';
import { meals } from './meals.js';

dotenv.config();
const PORT = 3000;

const log = pino({ transport: { target: "pino-pretty" } });

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

for (let i = 0; i < meals.length; i++) {
    const { image, mealName, donor, foodGroup, diet, allergies, typeOfCuisine, serves } = meals[i];
    log.info(`Trying to store starter meal ${mealName}.`);
    try {
        await pool.query(
            `INSERT INTO mealdb (image, mealName, donor, foodGroup, diet, allergies, typeOfCuisine, serves)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *`,
            [image, mealName, donor, foodGroup, diet, allergies, typeOfCuisine, serves]
        );
        log.info(`Starter meal ${mealName} stored.`);
    } catch (err) {
        log.error(`Starter meal ${mealName} not stored.`);
    }
}

app.post('/', async (req, res) => {
    const { image, mealName, donor, foodGroup, diet, allergies, typeOfCuisine, serves } = req.body;
    log.info(`Trying to store meal ${mealName}`); 
    try { 
        await pool.query(
            `INSERT INTO mealdb (image, mealName, donor, foodGroup, diet, allergies, typeOfCuisine, serves)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *`,
            [image, mealName, donor, foodGroup, diet, allergies, typeOfCuisine, serves]
        );
        log.info(`${mealName} stored.`);
        res.status(201).json({ message: `${mealName} stored.`});
    } catch (err) {
        log.error(`${mealName} not stored.`);
        res.status(500).json({ message: `${mealName} not stored.`});
    }
});

app.get('/', async (req, res) => {
    const { mealName, foodGroup, diet, allergies, typeOfCuisine, serves } = req.query;
    const servesInt = parseInt(serves as string, 10);
    const filters = [];
    const values = [];

    if (mealName) {
        values.push(`%${mealName}%`);
        filters.push(`mealName ILIKE $${values.length}`);
    } if (foodGroup) {
        values.push(`%${foodGroup}%`);
        filters.push(`foodGroup = $${values.length}`);
    } if (diet) {
        values.push(`%${diet}%`);
        filters.push(`diet = $${values.length}`);
    } if (allergies) {
        values.push(`%${allergies}%`);
        filters.push(`allergies = $${values.length}`);
    } if (typeOfCuisine) {
        values.push(`%${typeOfCuisine}%`);
        filters.push(`typeOfCuisine = $${values.length}`);
    } if (servesInt > 0) {
        values.push(`%${servesInt}%`);
        filters.push(`serves = $${values.length}`);
    }

    const where = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
    log.info(`Try to search for meals ${where}.`);
    try {
        const response = await pool.query(
            `SELECT image, mealName AS "mealName", donor, foodGroup AS "foodGroup", 
            diet, allergies, typeOfCuisine AS "typeOfCuisine", serves FROM mealdb ${where}`,
            values
        );
        log.info(`Search successful.`);
        res.status(201).json(response.rows);
    } catch (err) {
        log.error(`Search not successful.`);
        res.status(500).json({ message: `Search not successful.`});
    }
})


app.listen(PORT, () => {
    log.info(`Meal service listening on port ${PORT}`);
});
