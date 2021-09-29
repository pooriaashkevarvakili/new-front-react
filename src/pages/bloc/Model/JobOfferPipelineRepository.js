/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): mrAzizan
- Date Created:1399/07/09-10:19
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
    { id: 1, title: 'در انتظار مصاحبه ی اول' },
    { id: 2, title: 'استخدام شده' },
    { id: 3, title: 'متقاضی جدید' },
    { id: 4, title: 'رد شده' },
    { id: 5, title: 'تایید برای مصاحبه' },
    { id: 6, title: 'ردشده در مصاحبه' },
    { id: 7, title: 'در انتظار مصاحبه ی دوم' },
    { id: 8, title: 'درحال مصاحبه' },
    { id: 9, title: 'تکمیل مدارک' },
  ];
}
