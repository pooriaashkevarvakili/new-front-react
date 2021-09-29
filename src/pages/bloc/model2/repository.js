export default class JobOfferRepository {
  skills = [];
  educations = [];
  timepicker = [];

  constructor() {
    this.model = {
      timepicker: undefined,
      id: undefined,
      email: undefined,
      phone_number: undefined,
      age: undefined,
      education_id: undefined,
      skill_id: undefined,
      suggested_skill_id: undefined,
      description: undefined,
    };
  }
}
