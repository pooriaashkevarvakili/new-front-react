/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

export default class HtableModel {
  title;

  url;

  cols;

  constructor(url, title) {
    this.url = url;
    this.title = title;
  }

  add(col) {
    if (!this.cols) {
      this.cols = [];
    }
    this.cols.push(col);
  }


  hidePagination() {
    this._hidePageination = true;
    return this;
  }

  hideSearch() {
    this._hidePageination = true;
    return this;
  }

  addExtraBtn() {
    this._hidePageination = true;
    return this;
  }
}

export default class Xtc {
  constructor(key, title) {
    this.key = key;
    this.title = title;
    this.dataIndex = key;
    this.show = true;
  }

  export() {
    let exp = {};
    exp['key'] = this.key;
    exp['dataIndex'] = this.key;
    exp['title'] = this.title;
    if (this._slots) {
      exp['scopedSlots'] = this._slots;
    }

    if (this.filter) {
      exp['filter'] = this.filterType;
    }
    return exp;
  }


  renderSlot(name) {
    this._slots = {
      customRender: name
    };
    return this;
  }

  filterText() {
    this.filter = true;
    this.filterType = 'default';
    return this;
  }

  filterSwitch() {
    this.filter = true;
    this.filterType = 'switch';
    return this;
  }


  filterQuery(action) {
    this.filter = true;
    this.filterType = 'query';
    this.filterAction = action;
    return this;
  }

  filterDate() {
    this.filter = true;
    this.filterType = 'date';
    return this;
  }

  filterSelect(items) {
    this.filter = true;
    this.filterType = 'select';
    this.filterItems = items;
    return this;
  }

  filterNumber() {
    this.filter = true;
    this.filterType = 'number';
    return this;
  }

  noSort() {
    this.sort = false;
    return this;
  }

  hidden() {
    this.show = false;
    return this;
  }
}


export class HCol {
  constructor(key, title) {
    this.key = key;
    this.title = title;
    this.dataIndex = key;
    this.show = true;
  }

  export() {
    let exp = {};
    exp['key'] = this.key;
    exp['dataIndex'] = this.key;
    exp['title'] = this.title;
    if (this._slots) {
      exp['scopedSlots'] = this._slots;
    }

    if (this.filter) {
      exp['filter'] = this.filterType;
    }
    return exp;
  }


  renderSlot(name) {
    this._slots = {
      customRender: name
    };
    return this;
  }

  filterText() {
    this.filter = true;
    this.filterType = 'default';
    return this;
  }

  filterSwitch() {
    this.filter = true;
    this.filterType = 'switch';
    return this;
  }


  filterQuery(action) {
    this.filter = true;
    this.filterType = 'query';
    this.filterAction = action;
    return this;
  }

  filterDate() {
    this.filter = true;
    this.filterType = 'date';
    return this;
  }

  filterSelect(items) {
    this.filter = true;
    this.filterType = 'select';
    this.filterItems = items;
    return this;
  }

  filterNumber() {
    this.filter = true;
    this.filterType = 'number';
    return this;
  }

  noSort() {
    this.sort = false;
    return this;
  }

  hidden() {
    this.show = false;
    return this;
  }

}



