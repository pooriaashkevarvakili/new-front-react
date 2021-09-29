import * as rxjs from 'rxjs';
import {getAllEvaluateForSingleApplicant,postApplicantResult,getRedirectAdmin,deleteApplicantResult,updateApplicantResult,getEvaluateForSingleApplicant} from './../../service';

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

class JobOfferEvaluateBloc extends CommonBloc {
    constructor() {
    super();
        this.repo  = new JobOfferEvaluateRepository();
        this.subject = new rxjs.BehaviorSubject(this.repo)
    }
    onChangeModel(values) {
   /*     this.repo.model.jobTitle_id = values.jobTitle_id;*/
        this.refresh();
    }
    getFormSubject = () => {
        return this.subject;
    }
    async init() {
        this.loading(true);
        try {
                   const {data} = await getAllEvaluateForSingleApplicant();
                   this.repo = new JobOfferEvaluateRepository(data);
                   this.refresh();
               } catch (e) {
                   this.error('خطا در دریافت اطلاعات از سرور');
                   throw e;
               } finally {
                   this.loading(false);
               }
           }

    async singleInit(applicant_result_id) {
        this.loading(true);
        try {
            const {data} = await getEvaluateForSingleApplicant(applicant_result_id);
            this.repo = new JobOfferEvaluateRepository(data);
            this.refresh();
        } catch (e) {
            this.error('خطا در دریافت اطلاعات از سرور');
            throw e;
        } finally {
            this.loading(false);
        }
    }

   async save(values) {
        try {
            this.loading(true);
            this.repo.model = values;
            const {data} = await postApplicantResult(this.repo.model);
        }   catch (e) {
            throw e;
        }   finally {
            this.loading(false);
        }
    }

    async update(values) {
        try {
            this.loading(true);
            this.repo.model = values;
            const {data} = await updateApplicantResult(this.repo.model);
            return data;
        }   catch (e) {
            throw e;
        }   finally {
            this.loading(false);
        }
    }

    async Delete(applicant_result_id) {
        try {
            this.loading(true);
            const {data} = await deleteApplicantResult(applicant_result_id);
            return data;
            this.refresh();
        }   catch (e) {
            throw e;
        }   finally {
            this.loading(false);
        }
    }

    }
class JobOfferEvaluateRepository {
    model = {
           id: undefined,
           applicant_id: undefined,
           requirement_id: undefined,
           recruiment_status_id:undefined,
           comment: undefined,
           score: undefined,
           agreement_Salary: undefined,
           start_date_work: undefined,
           date_time: undefined,
           likes:undefined,
           dislikes:undefined,
           description: undefined,
       }

    loading = false;
    hasError = false;
    id='';
    applicant_id= '';
    requirement_id= '';
    recruiment_status_id='';
    comment= '';
    score= '';
    agreement_Salary= '';
    start_date_work= '';
    description= '';
    date_time='';
    likes='';
    dislikes='';
    description='';

       constructor(model) {
           this.model = model;
       }
       save() {
       }
}
export default JobOfferEvaluateBloc;
