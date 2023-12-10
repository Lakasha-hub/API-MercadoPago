import mongoose from "mongoose";
import serverConstants from "../constants/server.constants.js";
import { serverOptions } from "../config/server.config.js";

const connectDataBase = () => {
  let urlConnection;
  serverOptions.env === "prod"
    ? (urlConnection = serverConstants.db.URL_CONNECTION)
    : (urlConnection = serverConstants.db.URL_CONNECTION_TEST);

  mongoose.connect(urlConnection);
};

export default connectDataBase;
