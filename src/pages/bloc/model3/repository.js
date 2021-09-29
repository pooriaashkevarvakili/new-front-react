export default class JobOfferResumeRepository {
  loading = false;

  page = 0;

  job_offer;

  job_offer_id;

  filters = {
    text_search: undefined,
    created_at: undefined,
    sts: undefined,
  };

  get fetchParams() {
    return {
      page: this.page,
      filters: this.filters,
    };
  }

  get hasError() {
    return this.error != null;
  }

  exception(error) {
    this.error = error;
  }

  clear() {
    this.error = null;
  }

  constructor() {
    this.job_offer = {
      title: undefined,
      department: { title: undefined, id: undefined },
    };
    this.model = {
      rows: [],
    };
  }
}
