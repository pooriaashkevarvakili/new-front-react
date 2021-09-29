import { PureComponent } from 'react';
import { Menu } from 'antd';
import * as Feather from 'react-feather';

const { SubMenu } = Menu;
export default class TaskHeader extends PureComponent {
  state = {
    current: 'app',
  };

  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    const propsIcon = { size: 18, className: 'ml-4' };
    return (
      <div className="w-full top-header-menu">
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <SubMenu
            key="mail"
            title="پیام رسانی"
            icon={<Feather.Send className="flex" {...propsIcon} />}
          >
            <Menu.Item className="font-all" key="mail:inbox">
              صندوق پیام
            </Menu.Item>
            <Menu.Item className="font-all" key="mail:sent">
              ارسال شده
            </Menu.Item>
            <Menu.Item className="font-all" key="mail:draft">
              پیش نویس
            </Menu.Item>
            <Menu.Item className="font-all" key="mail:favorites">
              پیام های منتخب
            </Menu.Item>
            <Menu.Item className="font-all" key="mail:archived">
              آرشیو
            </Menu.Item>
            <Menu.Item className="font-all" key="mail:deleted">
              حذف شده
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="contacts" icon={<Feather.Users {...propsIcon} />}>
            مخاطبین
          </Menu.Item>
          <Menu.Item key="Calendar" icon={<Feather.Columns {...propsIcon} />}>
            تقویم
          </Menu.Item>
          <Menu.Item key="chat" icon={<Feather.MessageSquare {...propsIcon} />}>
            چت آنلاین
          </Menu.Item>
          <Menu.Item key="task" icon={<Feather.Coffee {...propsIcon} />}>
            مدیریت کارها
          </Menu.Item>
          <Menu.Item key="notes" icon={<Feather.File {...propsIcon} />}>
            یادداشت ها
          </Menu.Item>
          <Menu.Item key="supports" icon={<Feather.PhoneCall {...propsIcon} />}>
            پشتیبانی
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
