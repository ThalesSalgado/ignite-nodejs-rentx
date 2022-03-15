import dayjs from "dayjs";

import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  const tomorrow = dayjs().add(1, "day").toDate();

  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "1234",
      car_id: "1212",
      expected_return_date: tomorrow,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if there is another open rental to the same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "12345",
        car_id: "121212",
        expected_return_date: tomorrow,
      });

      await createRentalUseCase.execute({
        user_id: "12345",
        car_id: "121212",
        expected_return_date: tomorrow,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental for an unavailable car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "2222",
        car_id: "1112",
        expected_return_date: tomorrow,
      });

      await createRentalUseCase.execute({
        user_id: "3333",
        car_id: "1112",
        expected_return_date: tomorrow,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if duration is less than 24 hours", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "3333",
        car_id: "3333",
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
