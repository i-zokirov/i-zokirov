import express from "express";
import path from "path";
import { notFound, errorHandler } from "./middleware/errorHandlers.js";

const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, "/frontend/build")));

// SERVE FRONTEND AS STATIC FILES
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(
        `Server is running in ${process.env.NODE_ENV} environment. \nServer PORT: ${PORT}`
    )
);
