import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userCreateService from "../../services/user/userCreate.service";
const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;

    const newUser = await userCreateService({
      name,
      email,
      phone,
    });
    return res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
export default userCreateController;
