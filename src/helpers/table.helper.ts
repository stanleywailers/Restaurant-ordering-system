import { Request, Response } from "express";
import TableModel from "../models/table";



export const getAllTablesHelper = async (req: Request, res: Response) => {
    try {
        const tables = await TableModel.findAll(); // Retrieve all tables from the database

        if (tables.length === 0) {
            return res.status(404).json({ message: 'No tables found' }); // If no tables are found, return a 404 status code
        }

        res.status(200).json({ tables }); // Return the tables with a 200 status code
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tables', error }); // If an error occurs, return a 500 status code
    }
}