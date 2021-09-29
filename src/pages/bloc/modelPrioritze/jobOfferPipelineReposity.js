/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s):mr-vakili
- Date Created:1399/08/26-9:26
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the CRUD operation manage by this bloc.
- This bloc use [JobOfferRepository] and [JobOfferService]
- ----------------------------------------------------------------------------------- */

export default class JobOfferPipelineRepository {
  model = {};
  activeStatus = [];

  get activeStatusTiny() {
    return this.activeStatus.slice(0, 3);
  }

  status = [
    { id: 1, title: 'اولویت اول' },
    { id: 2, title: 'اولویت دوم' },
    { id: 3, title: 'اولویت سوم' },
  ];
}
