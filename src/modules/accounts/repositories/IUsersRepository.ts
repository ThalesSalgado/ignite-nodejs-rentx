import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(date: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
}

export { IUsersRepository };
