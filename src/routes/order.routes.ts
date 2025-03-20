import express from "express";
import {
    completeOrderController,
    placeOrderController,
    updateOrderStatusController,
    viewOrderController,
    viewOrdersController
} from "../controllers/order.controller";
import { validateSchemaMiddleware } from "../middlewares/ajv-handler";
import { orderStatusSchema, placeOrderSchema } from "../schema/order.schema";
const router = express.Router();
const authentication = require('../middlewares/authorization');

// Routes for handling different order operations

// Place a new order
router.post("/place-order", authentication.verifyJWT, validateSchemaMiddleware(placeOrderSchema), placeOrderController);

// Update the status of an order
router.patch("/id/:id/status", authentication.verifyJWT, validateSchemaMiddleware(orderStatusSchema),
    updateOrderStatusController);

// Get a specific order by ID
router.get("/id/:id", authentication.verifyJWT, viewOrderController);

router.get("/orders", authentication.verifyJWT, viewOrdersController);
// Mark an order as complete
router.patch("/id/:id/complete", authentication.verifyJWT,
   completeOrderController);

export const orderRoutes = router;
