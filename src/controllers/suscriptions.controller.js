import { PreApprovalPlan, Payment } from "mercadopago";

import client, { createPlan } from "../config/mercadoPago.config.js";
import serverConstants from "../constants/server.constants.js";

// Creación de link para pago de suscripción
const crearSuscripcion = async (req, res) => {
  // Verifico que el plan exista
  const preApprovalPlan = new PreApprovalPlan(client);
  await preApprovalPlan
    .get({
      preApprovalPlanId: serverConstants.mp.PLAN_ID,
    })
    .then(async (response) => {
      // Si el plan existe solamente se envían los datos del plan
      res.sendCreatedWithPayload({
        init_point: response.init_point,
        plan_id: response.id,
      });
    })
    .catch(async (error) => {
      // Si el plan no existe, Creo uno nuevo
      if (error.status == 404) {
        const newPlan = await createPlan(client);
        // Actualizo los valores de las constantes
        serverConstants.mp.INIT_POINT = newPlan.init_point;
        serverConstants.mp.PLAN_ID = newPlan.id;
        // Envío el nuevo plan
        return res.sendCreatedWithPayload({
          init_point: newPlan.init_point,
          plan_id: newPlan.id,
        });
      }
      res.sendError(error);
    });
};

const recibirWebhook = async (req, res) => {
  console.log(req.query);
  const payment = req.query;
  if (payment.type == "payment") {
    const paymentService = new Payment(client);
    const data = await paymentService.get({ id: payment["data.id"] });
    if (data.status == "approved"){
      console.log("Se completo el pago correctamente")
    }else {
      console.log("Hubo un problema con el pago")
    }
  }
  res.status(200).send("Web hook");
};


export {
  crearSuscripcion,
  recibirWebhook,
};
