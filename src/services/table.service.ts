import { Request, Response } from "express";
import { getAllTablesHelper } from "../helpers/table.helper";

export const getAllTables = async (req: Request, res: Response) => {
    try {
        await getAllTablesHelper(req, res); // Call the getAllCategoriesHelper function to retrieve all categories.
    } catch (error:any) {
        res.status(400).send({ message: error.message }); // If an error occurs, send an error message back to the client with a status code of 400.
    }
};