import express from 'express';
import { readAllTablesController } from '../controllers/table.controller';
const router = express.Router();
const authentication = require('../middlewares/authorization');


router.get("/tables", authentication.verifyJWT, readAllTablesController)

export const tableRoutes = router;