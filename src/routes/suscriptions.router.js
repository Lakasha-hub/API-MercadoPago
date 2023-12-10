import BaseRouter from "./router.js";

import {
  crearSuscripcion,
  recibirWebhook,
} from "../controllers/suscriptions.controller.js";

export default class SuscriptionsRouter extends BaseRouter {
  init() {
    this.post("/crear-orden", crearSuscripcion);

    this.post("/webhook", recibirWebhook);
  }
}
