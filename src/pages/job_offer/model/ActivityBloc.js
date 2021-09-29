/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): zadfathollah
- Date Created: 1399/08/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is bloc of Activity job offer module.
- All of the CRUD operation manage by this bloc.
- This bloc use [ActivityRepository] and [JobOfferService]
- ----------------------------------------------------------------------------------- */
import * as rxjs from 'rxjs';
import ActivityRepository from './Repository';
import { getActivity } from './../service';

export default class ActivityBloc {
  constructor() {
    this.repo = new ActivityRepository();
    this.subject = new rxjs.BehaviorSubject(this.repo);
  }
  // this function for get  data by id;
  get = async (id) => {
    this.loading(true);
    const data = await getActivity(id);
    this.repo.model = data;
    this.loading(false);
    return data;
  };
  // this function for get requirement dropdown data list of const;
  init = async () => {
    const data = await init();
    const {
      departments,
      work_places,
      levels,
      job_titles,
      skills,
      sex,
      educations,
      reason_request,
      work_experience,
      send_date,
      applicant_count,
      status_row,
    } = data;
    this.repo.departments = departments;
    this.repo.levels = levels;
    this.repo.work_places = work_places;
    this.repo.job_titles = job_titles;
    this.repo.skills = skills;
    this.repo.sex = sex;
    this.repo.educations = educations;
    this.repo.reason_request = reason_request;
    this.repo.work_experience = work_experience;
    this.repo.send_date = send_date;
    this.repo.applicant_count = applicant_count;
    this.repo.status_row = status_row;
    this.refresh();
    return data;
  };
  loading(i) {
    this.repo.loading = i;
    this.refresh();
  }
  refresh = () => {
    this.subject.next(this.repo);
  };
}
