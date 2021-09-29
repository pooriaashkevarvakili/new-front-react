/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/08/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is Repository of cv archive module.
- ----------------------------------------------------------------------------------- */
export default class ResumeArchiveRepository {
  file_upload=[];
  image=[];
  job_titles= [];
  send_locations= [];
  file_group_upload= [];
  full_name=[];
  mobile=[];
  email=[];
  age=[];
  send_date=[];
  condition= [];
  educations = [];
  sex=[];
  skills = [];
  loading= false;
  hasError= false;

  constructor() {
    this.model = {
    id:undefined,
    file_upload: undefined,
    file_group_upload: undefined,
    image: undefined,
    job_title_id: undefined,
    send_location_id: undefined,
    full_name: undefined,
    mobile: undefined,
    email: undefined,
    education_id: undefined,
    age: undefined,
    sex_id: undefined,
    skill_id: undefined,
    send_date:undefined,
    condition_id:undefined,
    };
  }
}
