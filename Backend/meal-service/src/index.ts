import express from 'express';
// import { createClient } from 'redis';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { pino } from 'pino';
import cors from 'cors';

dotenv.config();
const PORT = 3000;
const MEAL_DATABASE_URL = 'postgresql://mealservice:password@localhost:5433/mealdb';

const log = pino({ transport: { target: "pino-pretty" } });

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: MEAL_DATABASE_URL
})

// const redisCli = createClient()

// redisCli.on('error', (err) => console.log('Redis Client Error', err));

// await redisCli.connect();

app.post('/', async (req, res) => {
    const { image, mealName, donor, foodGroup, diet, allergies, typeOfCuisine, serves } = req.body;
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
        log.error(`${mealName} not stored.`)
        res.status(500).json({ message: `${mealName} not stored.`})
    }
});
  
// app.post('/', async (req, res) => {
//     const newMeal = req.body;
//     const newMealKey = newMeal.mealName;

//     try {
//         await redisCli.json.set(newMealKey, '$', newMeal);
//         log.info(`${newMealKey} stored.`);
//         res.status(201).json({ message: `${newMealKey} stored.`});
//     } catch (err) {
//         log.error(`${newMealKey} not stored.`)
//         res.status(500).json({ message: `${newMealKey} not stored.`})
//     }
// });


// await redisCli.ft.create('idx:meal', {
//     '$.mealName': { type: 'TEXT', AS: 'mealName'},
//     '$.foodGroup': { type: 'TEXT', AS: 'foodGroup'},
//     '$.diet': { type: 'TEXT', AS: 'diet'},
//     '$.allergies': { type: 'TEXT', AS: 'allergies'},
//     '$.typeOfCuisine': { type: 'TEXT', AS: 'typeOfCuisine'},
//     '$.serves': { type: 'TEXT', AS: 'serves'}
// }, {
//     ON: 'JSON',
//     PREFIX: '*'
// });

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
    try {

        const response = await pool.query(
            `SELECT image, mealName AS "mealName", donor, foodGroup AS "foodGroup", 
            diet, allergies, typeOfCuisine AS "typeOfCuisine", serves FROM mealdb ${where}`,
            values
        );
        res.status(201).json(response.rows);
    } catch (err) {
        log.error(`Search not successful.`)
        res.status(500).json({ message: `Search not successful.`})
    }
})

// app.get('/', async (req, res) => {
//     try {
//         const { mealName, foodGroup, diet, allergies, typeOfCuisine, serves} = req.body;

//         let query = '';
//         if (mealName) query += `@mealName:*${mealName}*`;
//         if (foodGroup) query += `@foodGroup:${foodGroup}`;
//         if (diet) query += `@diet:${diet}`;
//         if (allergies) query += `@allergies:${allergies}`;
//         if (typeOfCuisine) query += `@typeOfCuisine:${typeOfCuisine}`;
//         if (serves) query += `@serves:[${serves} ${serves}]`;

//         const matches = await redisCli.ft.search('idx:meal', query.trim());
//         const typedMatches = matches as { total: number; documents: { id: string; value: Record<string, string | number | boolean | null> }[] };
//         const matchesJSON = typedMatches.documents.map(meal => meal.value);

//         if (matchesJSON.length == 0) {
//             log.info(`No matches found.`);
//         } else {
//             log.info(`${matchesJSON.length} matches found.`)
//         }
//         res.status(201).json(matchesJSON);
//     } catch (err) {
//         log.error(`Search not successful.`)
//         res.status(500).json({ message: `Search not successful.`})
//     }
// });


app.listen(PORT, () => {
    log.info(`Meal service listening on port ${PORT}`);
});
