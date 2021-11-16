import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database_ignite"; // Deve ser o mesmo nome dado no service do banco no docker-compose
  createConnection({
    ...options,
  });
});
