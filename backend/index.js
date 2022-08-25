import express from "express";
import cors from "cors";
import helmet from "helmet";
import { notFound, errorHandler } from "./middleware/errorHandlers.js";
import contactformRouter from "./routes/contactform.js";
const app = express();

// MIDDLEWARE
app.use(helmet());
app.use(
    cors({
        origin: "https://izokirov.me",
        methods: "GET,POST",
        preflightContinue: true,
        optionsSuccessStatus: 200,
    })
);
app.use(express.json());

// ROUTE HANDLERS
app.use("/api", contactformRouter);

// ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Environment: ${process.env.NODE_ENV}  \nServer PORT: ${PORT}`)
);
