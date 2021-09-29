/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): mrAzizan
- Date Created:1399/07/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the CRUD operation manage by this bloc.
- This bloc use [JobOfferRepository] and [JobOfferService]
- ----------------------------------------------------------------------------------- */
import * as rxjs from 'rxjs';
import JobOfferPipelineRepository from './JobOfferPipelineRepository';

export default class JobOfferPipelineBloc {
  constructor() {
    this.repo = new JobOfferPipelineRepository();
    this.subject = new rxjs.BehaviorSubject(this.repo);
  }

  toggleStatus(row) {
    if (!this.repo.activeStatus.some((item) => item.id === row.id)) {
      this.repo.activeStatus.push(row);
    } else {
      this.repo.activeStatus = this.repo.activeStatus.filter((item) => item.id !== row.id);
    }
    this.refresh();
  }

  refresh = () => {
    this.subject.next(this.repo);
  };

  hasChecked(row) {
    return this.repo.activeStatus.some((item) => item.id === row.id);
  }
}
