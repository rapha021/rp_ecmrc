import "express-async-errors";
import express from "express";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Business, Individual, User } from "./entities/user.entity";
import { AppError } from "./errors/appError";

const app = express();

app.use(express.json());

appRoutes(app);

//Retorna informacoes do user
// app.get("/", async (req: Request, res: Response) => {
//   const userRepository = AppDataSource.getRepository(User);
//   const businessRepository = AppDataSource.getRepository(Business);
//   const individualRepository = AppDataSource.getRepository(Individual);

//   const user = await userRepository.findOneBy({ name: "John" });

//   if (!user) throw new AppError(404, "user not found");

//   const type = user.type === "business"
//     ? await businessRepository.findOneBy({ user: { id: user.id } })
//     : await individualRepository.findOneBy({ user: { id: user.id } });

//   res.status(200).json({
//     message: {user, type},
//   });
// });

app.use(errorMiddleware);

app.listen(3000);
