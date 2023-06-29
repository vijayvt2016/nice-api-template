/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/router/items.router";
import { morganLogger } from "./common/logger.common";
import { errorHandler } from "../src/middleware/error.middleware";
import { notFoundHandler } from "../src/middleware/not-found.middleware";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
 }
 
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

/**
 *  App Configuration
 */
app.use(morganLogger);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/items", itemsRouter); //URL entry endpoint for items module

// middleware inclusion for Error Handling
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });