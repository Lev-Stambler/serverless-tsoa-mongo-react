import { resolve as pathResolve } from "path";
import { config } from "dotenv";

const { env } = process;
const node_env = env.NODE_ENV
config({ path: pathResolve(__dirname, `./env/.env.${node_env}`) });

export default {
  environment: env.NODE_ENV,
  port: Number(env.PORT),
  mongoConnectionString: env.MONGO_CONNECTION_STRING,
};
