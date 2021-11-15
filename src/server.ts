import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json"; // Check tsconfig.json file has "resolveJsonModule": true

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is running..."));

// app.get("/", (request, response) => {
//   return response.json({ message: "Hello world" });
// });

// app.post("/courses", (request, response) => {
//   const { name } = request.body;
//   return response.json({ name });
// });
