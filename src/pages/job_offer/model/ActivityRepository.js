/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: ۳1399/07/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is Repository of job offer module.
- ----------------------------------------------------------------------------------- */
export default class ActivityRepository {

  image=[];
  fname=[];
  lname=[];
  send_date=[];
  status= [];
  job_offer=[];
  loading= false;
  hasError= false;

  constructor() {
    this.model = {
    id:undefined,
    image: undefined,
    fname: undefined,
    lname:undefined,
    send_date:undefined,
    status_id:undefined,
    job_offer_id:undefined,
    };
  }
}
