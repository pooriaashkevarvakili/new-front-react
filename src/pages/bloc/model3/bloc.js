import * as rxjs from 'rxjs';
import JobOfferResumeRepository from './repository';
import { fetch, getOne, getJobOffer, create } from './service';

export default class JobOfferBloc {
  constructor(job_offer_id) {
    this.repo = new JobOfferResumeRepository();
    this.repo.job_offer_id = job_offer_id;
    this.init();
    this.subject = new rxjs.BehaviorSubject(this.repo);
    this.fetch();
  }

  // دریافت اطلاعات اولیه جاو آفر از سرور در زمان باز شدن صفحه
  async init() {
    try {
      this.loading(true);

      const data = await getJobOffer(this.repo.job_offer_id);
      this.repo.job_offer = data;
    } catch (e) {
      this.repo.exception(e);
    } finally {
      this.loading(false);
      this.refresh();
    }
  }

  // دریافت لیست درخواست ها از سرور
  async fetch() {
    try {
      this.repo.clear();
      this.loading(true);
      const { rows, page } = await fetch(this.repo.fetchParams);
      this.repo.model = rows;
      this.repo.page = page;
    } catch (e) {
      this.repo.exception(e);
    } finally {
      this.loading(false);
      this.refresh();
    }
  }

  // دریافت اطلاعات کامل یک درخواست
  async getOne(id) {
    try {
      return await getOne(id);
    } catch (e) {
      throw 'Error in Request';
    }
  }

  // ایجاد یک درخواست
  async create(data) {
    try {
      this.repo.clear();
      this.loading(true);
      await create(data);
    } catch (e) {
      this.repo.exception(e);
    } finally {
      this.loading(false);
      this.refresh();
    }
  }

  loading(i) {
    this.repo.loading = i;
    this.refresh();
  }

  refresh = () => {
    this.subject.next(this.repo);
  };
}
