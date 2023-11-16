// Import Express
import express from "express";

// Enable use of environment variables
import 'dotenv/config';

// Import routes
import { footballersRouter } from "./Footballers/footballers.routes.js";

const app = express();
app.use(express.json());

// Configure routes
app.use("/api/footballers", footballersRouter);

const port = 5000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})