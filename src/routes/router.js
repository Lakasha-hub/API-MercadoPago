import { Router } from "express";

export default class BaseRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  // Funcion para obtener la referencia del router
  getRouter() {
    return this.router;
  }

  init() {}

  get(path, ...callbacks) {
    this.router.get(path, this.customResponses, this.applyCallbacks(callbacks));
  }

  post(path, ...callbacks) {
    this.router.post(
      path,
      this.customResponses,
      this.applyCallbacks(callbacks)
    );
  }

  put(path, ...callbacks) {
    this.router.put(path, this.customResponses, this.applyCallbacks(callbacks));
  }

  delete(path, ...callbacks) {
    this.router.delete(
      path,
      this.customResponses,
      this.applyCallbacks(callbacks)
    );
  }

  /* Respuestas por defecto */
  customResponses = (req, res, next) => {
    res.sendSuccess = (msg) => res.status(200).json({ msg });

    res.sendSuccessWithPayload = (payload) => res.status(200).json({ payload });

    res.sendCreated = (msg) => res.status(201).json({ msg });

    res.sendCreatedWithPayload = (payload) => res.status(201).json({ payload });

    res.sendBadRequest = (error) => res.status(400).json({ error });

    res.sendUnauthorized = (error) => res.status(401).json({ error });

    res.sendForbidden = (error) => res.status(403).json({ error });

    res.sendNotFound = (error) => res.status(404).json({ error });

    res.sendInternalError = (error) => res.status(500).json({ error });

    res.sendError = (error) => {
      if (!error.status) {
        return res.status(500).json(error.message);
      }
      res.status(error.status).json({ error: error.message });
    };

    next();
  };

  /** Aplica los distintos middlewares de la ruta */
  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.log(error);
        params[1].sendInternalError(error);
      }
    });
  }

}
