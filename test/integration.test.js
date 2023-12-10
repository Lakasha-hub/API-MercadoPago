import supertest from "supertest";
import { expect } from "chai";

import serverConstants from "../src/constants/server.constants.js";
import { describe, it } from "mocha";

// Requester para generar peticiones a la app
const requester = supertest(serverConstants.app.BASE_URL);

describe("Test de integración de funcionalidades de App", function () {
  describe("Test sobre Suscription router", async function () {
    it("POST /crear-orden debe devolver una orden correctamente", async function () {
      const { status, _body } = await requester.post("/crear-orden");
      expect(status).to.be.equal(201);
      expect(_body.payload.plan_id).to.be.ok;
      expect(_body.payload.init_point).to.be.ok;
      expect(typeof _body.payload.init_point).to.be.equal("string");
    });
  });
});
