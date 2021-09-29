/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/09/26-16:44
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React, { PureComponent } from 'react';
import { Card, Dropdown, Menu, Modal } from 'antd';
import { MoreHorizontal, Trash2 } from 'react-feather';
import DashboardLastProfileWidgetComponent from './DashboardLastProfileWidgetComponent';
import DashboardTinyWidgetComponent from '@/pages/dashboard/components/DashboardTinyWidgetComponent';
import NoWidget from './NoWidget';
import DashboardLastFoodWidgetComponent from './DashboardLastFoodWidgetComponent';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import DashboardBloc from '@/pages/dashboard/model/DashboardBloc';
import DashboardLastProjectWidgetComponent from './DashboardLastProjectWidgetComponent';
import DashboardBirthdayWidgetComponent from '@/pages/dashboard/components/DashboardBirthdayWidgetComponent';
import DashboardLastActivityWidgetComponent from '@/pages/dashboard/components/DashboardLastActivityWidgetComponent';
import DashboardLastTaskWidgetComponent from '@/pages/dashboard/components/DashboardLastTaskWidgetComponent';
export default class DashboardWidget extends PureComponent {
  constructor(props, context) {
    super(props, context);
    const {
      model: { widget },
    } = props;
    this.type = widget.type;
    this.model = widget;
    this.bloc = new DashboardBloc();
  }
  components = {
    Tiny: DashboardTinyWidgetComponent,
    Birthday: DashboardBirthdayWidgetComponent,
    LastActivity: DashboardLastActivityWidgetComponent,
    LastTask: DashboardLastTaskWidgetComponent,
    LastProfile: DashboardLastProfileWidgetComponent,
    LastProject: DashboardLastProjectWidgetComponent,
    LastFood: DashboardLastFoodWidgetComponent,
    NoWidget,
  };

  get menu() {
    return (
      /*
کل ویدگت ها
*/
      <Menu>
        <Menu.Item>
          <a
            onClick={() => {
              this.remove();
            }}
            className="text-red-500 flex items-center"
          >
            <Trash2 className="font-all" size={18} />
            حذف ابزارک
          </a>
        </Menu.Item>
      </Menu>
    );
  }

  remove() {
    // const bloc = this.bloc;
    // const {model:{id}} = this.props;
    Modal.confirm({
      title: 'حذف ابزارک',
      icon: (
        <ExclamationCircleOutlined
          style={{
            position: 'relative',
            left: 320,
            bottom: 25,
          }}
        />
      ),
      content: 'آیا مطمئن به حذف ابزارک هستید؟',
      okText: 'بله',
      cancelText: 'بی خیال',
      onOk() {
        bloc.removeWidget(id);
      },
    });
  }

  render() {
    const TagName = this.components[this.type] || 'NoWidget';
    return (
      <div className="pb-4 ">
        <Card
          className="bg-white dashboard-widget-card"
          cover={
            <Dropdown overlay={this.menu} placement="bottomLeft">
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                <MoreHorizontal />
              </a>
            </Dropdown>
          }
          bordered={false}
        >
          <TagName model={this.model} />
        </Card>
      </div>
    );
  }
}
