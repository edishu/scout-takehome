import cors from "cors";
import express from "express";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (_, res) => {
  res.send("Hello world");
});

app.listen(3005, () => console.log(`Server ready at: http://localhost:3005`));
