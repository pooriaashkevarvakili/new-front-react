import AuthRepository from './AuthRepository';
import { BehaviorSubject } from 'rxjs';
import { login } from './../service';
import { history } from 'umi';


export default class AuthBloc {

  constructor() {
    this.repo = new AuthRepository();
    this.subject = new BehaviorSubject(this.repo);
  }

  async login({ username, password }) {
    try {
      this.loading(true);
      const { data } = await login({ username, password });
      this.repo.model = data;
      this.repo.token = data.token;
      this.repo.old_token = data.old_version_token;
      console.log("data ====> " , data);
      localStorage.setItem('haco-token', data.token);
      localStorage.setItem('haco-token-old', data.old_version_token);
      history.replace('/');
      return data;
    } catch (e) {
      throw e;
    } finally {
      this.loading(false);
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
