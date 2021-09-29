/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/07/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is Repository of job offer module.
- ----------------------------------------------------------------------------------- */
export default class JobOfferRepository {
  loading = false;
  departments = [];
  job_titles = [];
  applicant_count=[];
  work_places = [];
  levels = [];
  skills=  [];
  educations = [];
  work_experience=[];
  sex=[];
  reason_request=[];
  status=[];
  send_date=[];
  status_row=[];

  constructor() {
    this.model = {
      id:undefined,
      department_id: undefined,
      job_title_id: undefined,
      work_place_id: undefined,
      level_id : undefined,
      skill_id: undefined,
      description:undefined,
      education_id: undefined,
      description_id:undefined,
      work_experience_id: undefined,
      sex_id: undefined,
      reason_request_id: undefined,
    };
  }


}
