import * as rxjs from 'rxjs';
import {queryRule, updateRule, addRule, removeRule} from './../../service';

class CommonBloc {
  subject;

  refresh() {
    this.subject.next(this.repo)
  }

  error(text) {
    this.repo.hasError = true
    this.subject.error(text);
  }

  loading(value) {
    this.repo.loading = value;
    this.refresh();
  }
}

class Bloc extends CommonBloc {
  constructor() {
    super();
    this.repo = new Repository();
    this.subject = new rxjs.BehaviorSubject(this.repo);
  }

  getSubject = () => {
    return this.subject;
  };
  async init() {
    this.loading(true);
    try {
      const {data} = await queryRule();
      this.repo = new Repository(data);
      console.log(this.repo);
      this.refresh();
    } catch (e) {
      this.error('خطا در دریافت اطلاعات از سرور');
      throw e;
    } finally {
      this.loading(false);
    }
  }

  async singleInit(id) {
    this.loading(true);
    try {
      const {data} = await getEvaluateForSingleApplicant(id);
      this.repo = new Repository(data);
      this.refresh();
    } catch (e) {
      this.error('خطا در دریافت اطلاعات از سرور');
      throw e;
    } finally {
      this.loading(false);
    }
  }

  /*    onChangeModel(values) {
          this.repo.model.jobTitle_id = values.jobTitle_id;
          this.refresh();
      }*/

  async save(values) {
    try {
      this.loading(true);
      this.repo.model = values;
      const {data} = await addRule(this.repo.model);
      return data;
    } catch (e) {
      throw e;
    } finally {
      this.loading(false);
    }
  }

  async update(values) {
    try {
      this.loading(true);
      this.repo.model = values;
      const {data} = await updateRule(this.repo.model);
      return data;
    } catch (e) {
      throw e;
    } finally {
      this.loading(false);
    }
  }

  async remove(id) {
    try {
      this.loading(true);
      const {data} = await removeRule(id);
      return data;
      this.refresh();
    } catch (e) {
      throw e;
    } finally {
      this.loading(false);
    }
  }
}
  class Repository {

    fname= [];
    lname= [];
    send_location_id= [];
    send_date=[];
    file_upload=[];
    image= [];
    job_title_id=[];
    mobile= [];
    email= [];
    education_id= [];
    age= [];
    experience= [];
    job_skill_id=[];
    description=[];
    status_id=[];
    loading = false;
    hasError = false;
   }

export default Bloc;
