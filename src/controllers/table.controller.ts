import { Request, Response } from "express";
import { getAllTables } from "../services/table.service";


export const readAllTablesController = async (req: Request, res: Response) => {
    try {
        await getAllTables(req, res); // Call the readAllTablesHelper function to retrieve all tables
    } catch (error) {
        res.status(400).send({ error: error.message, timestamp: new Date() }); // Send error message if an error occurs
    }
}