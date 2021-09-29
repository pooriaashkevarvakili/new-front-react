/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/26-14:27
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
export default class DashboardWidgetModel {
  id;

  constructor(input) {
    this.model = input;
    this.setInputs();
  }

  setData(data) {
    this.data = data;
    return this;
  }

  setInputs() {
    for (let i in this.model) {
      this.setInput(i, this.model[i]);
    }
  }

  setInput(key, value, _default) {
    this[key] = value || _default;
  }
}

export class DashboardTinyWidget extends DashboardWidgetModel {
  constructor(input) {
    super(input);
    this.type = 'Tiny';
    this.setInputs();
  }
}

export class DashboardLastWorkWidget extends DashboardWidgetModel {
  constructor(input) {
    super(input);
    this.type = 'LastWork';
    this.setInputs();
  }
}
