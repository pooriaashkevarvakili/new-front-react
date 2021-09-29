import DashboardRepository from './DashboardRepository';
import * as rxjs from 'rxjs';
import { getMyDashboard, widgets, removeWidget } from '@/pages/dashboard/service';

export default class DashboardBloc {
  constructor() {
    this.repo = new DashboardRepository();
    this.subject = new rxjs.BehaviorSubject(this.repo);
    this.init();
  }

  // this function for get requirement dropdown data list of const;
  init = async () => {
    const { data } = await widgets();
    this.repo.widgets = data;
    this.refresh();
  };

  getMyDashboard = async () => {
    const { data } = await getMyDashboard();
    this.repo.myWidgets = data;
    console.log(' this.repo.myWidgets ====> ', this.repo.myWidgets);
    this.refresh();
  };

  loading(i) {
    this.repo.loading = i;
    this.refresh();
  }

  refresh = () => {
    this.subject.next(this.repo);
  };

  getWidgetById(id) {
    return this.repo.widgets.find((item) => item.id == id);
  }

  async removeWidget(id) {
    await removeWidget(id);
    await getMyDashboard();
  }

  sort() {
    this.repo.myWidgets.sort((a, b) => {
      if (a.pos < b.pos) {
        return -1;
      }
      if (a.pos > b.pos) {
        return 1;
      }
      return 0;
    });
  }

  dragEndWidget({ destination, draggableId }) {
    const col = parseInt(destination.droppableId, 10);
    const item = this.repo.myWidgets.find((item) => item.id == draggableId);
    this.repo.myWidgets
      .filter((other) => other.pos >= destination.index && other.col == col)
      .forEach((other) => other.pos++);
    item.col = parseInt(destination.droppableId, 10);
    item.pos = destination.index;
    this.sort();
    this.refresh();
    console.log('this.repo.myWidgets ====> ', this.repo.myWidgets);
  }
}
