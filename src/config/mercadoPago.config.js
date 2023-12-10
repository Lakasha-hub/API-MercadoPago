import { MercadoPagoConfig, PreApprovalPlan } from "mercadopago";
import serverConfig from "../constants/server.constants.js";

// Configuración de Mercado Pago con TOKEN de Vendedor
const client = new MercadoPagoConfig({
  accessToken: serverConfig.mp.ACCESS_TOKEN,
});

// Plan de Profesorado Natha Yoga
export const createPlan = async (client) => {
  const preApprovalPlan = new PreApprovalPlan(client);

  const plan = {
    reason: "Curso de Autoconocimiento de Natha Yoga",
    back_url: serverConfig.platform.LOGIN_URL,
    auto_recurring: {
      frequency: 1,
      frequency_type: "months",
      transaction_amount: 12500,
      currency_id: "ARS",
    },
  };

  const result = await preApprovalPlan.create({ body: plan });
  return result;
};

export default client;
