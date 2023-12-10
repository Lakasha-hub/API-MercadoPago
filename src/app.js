import Express from "express";

import serverConstants from "./constants/server.constants.js";
import { __dirname } from "./utils.js";

import connectDataBase from "./db/connection.js";
import SuscriptionsRouter from "./routes/suscriptions.router.js";

// Instancia de express
const app = Express();

// Conexión con base de datos
connectDataBase()

// Configuración de vistas con express
app.use("/", Express.static(`${__dirname}/public`));

// Intancia de router de pagos
const suscriptionRouter = new SuscriptionsRouter();
app.use("/suscripciones", suscriptionRouter.getRouter());

// Puesta en marcha del servidor
app.listen(serverConstants.app.PORT, () => {
  console.log(`Server ejecutandose en: ${serverConstants.app.BASE_URL}`);
});
