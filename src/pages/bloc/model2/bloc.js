/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: ۳1399/07/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is bloc of resume archive module.
- All of the CRUD operation manage by this bloc.
- This bloc use [ResumeArchiveRepository] and [ResumeArchiveService]
- ----------------------------------------------------------------------------------- */
import * as rxjs from 'rxjs';
import ResumeArchiveRepository from './repository';
import { save, init, get, remove, update } from './../service';

export default class ResumeArchiveBloc {
  constructor() {
    this.repo = new ResumeArchiveRepository();
    this.subject = new rxjs.BehaviorSubject(this.repo);
  }
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
    return data;
  };
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
    const { sex, skills, educations, send_locations, job_titles, timepicker } = data;
    this.repo.sex = sex;
    this.repo.timepicker = timepicker;
    this.repo.skills = skills;
    this.repo.educations = educations;
    this.repo.send_locations = send_locations;
    this.repo.jobTitles = job_titles;
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
