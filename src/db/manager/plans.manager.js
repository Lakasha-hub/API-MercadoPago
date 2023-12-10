import planModel from "../models/plans.model.js";

export default class PlansManager {
  getPlans = () => {
    return planModel.find().lean();
  };

  getPlanById = (id) => {
    return planModel.findOne({ id }).lean();
  };

  updatePlan = (id, newProperties) => {
    return planModel.findOneAndUpdate({ id }, { $set: newProperties });
  };

  deletePlan = (id) => {
    return planModel.findOneAndDelete({ id });
  };
}
