import suscriptionModel from "../models/suscriptions.model";

export default class SuscriptionsManager {
  getSuscriptions = () => {
    return suscriptionModel.find().lean();
  };

  getSuscriptionById = (id) => {
    return suscriptionModel.findOne({ plan_id: id }).lean();
  };

  updateSuscription = (id, newProperties) => {
    return suscriptionModel.findOneAndUpdate(
      { plan_id: id },
      { $set: newProperties }
    );
  };

  deleteSuscription = (id) => {
    return suscriptionModel.findOneAndDelete({ plan_id: id });
  };
}
