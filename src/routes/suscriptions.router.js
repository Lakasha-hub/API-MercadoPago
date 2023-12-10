import BaseRouter from "./router.js";

import {
  crearSuscripcion,
  success,
  recibirWebhook,
  obtenerSuscripcion,
  actualizarSuscripcion,
  eliminarSuscripcion,
} from "../controllers/suscriptions.controller.js";

export default class SuscriptionsRouter extends BaseRouter {
  init() {
    this.post("/crear-orden", crearSuscripcion);

    this.get("/:id", obtenerSuscripcion);

    this.put("/:id", actualizarSuscripcion);

    this.delete("/:id", eliminarSuscripcion);

    this.get("/success", success);

    this.post("/webhook", recibirWebhook);
  }
}
