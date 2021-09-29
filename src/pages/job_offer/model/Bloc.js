/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): mrAzizan
- Date Created: 1399/07/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the CRUD operation manage by this bloc.
- This bloc use [JobOfferRepository] and [JobOfferService]
- ----------------------------------------------------------------------------------- */
import * as rxjs from 'rxjs';
import JobOfferRepository from './Repository';
import { save, init, get, remove, update, getDropDownForJobOffer } from './../service';

export default class JobOfferBloc {
  constructor() {
    this.repo = new JobOfferRepository();
    this.subject = new rxjs.BehaviorSubject(this.repo);
  }
  // this function for save data in database;
  save = async (values) => {
    this.repo.loading = true;
    this.refresh();
    if (this.repo.model.id) {
      const { data } = await update(this.repo.model.id, values);
    } else {
      const { data } = await save(values);
    }
    this.repo.model = values;
    this.repo.loading = false;
    this.refresh();
    this.bloc.inc();
    return data;
  };
  // this function for get  data by id;
  get = async (id) => {
    this.loading(true);
    const data = await get(id);
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
      city
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
    this.repo.city = city;
    console.log(this.repo);
    this.refresh();
  };
  // this function for get requirement dropdown data list of const;
  getDropDownForJobOffer = async () => {
    const data = await getDropDownForJobOffer();
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
    console.log(this.repo);
    this.refresh();
  };
  update = () => {};
  remove = async () => {
    this.loading(true);
    await remove(this.repo.model.id);
    this.loading(false);
    return true;
  };
  fetch() {}
  loading(i) {
    this.repo.loading = i;
    this.refresh();
  }
  refresh = () => {
    this.subject.next(this.repo);
  };
}
