import React, { PureComponent } from 'react';
export default class index extends PureComponent {
  render() {
    return (
      <div>
        <ul
          className="ant-menu ant-menu-dark ant-pro-sider-menu ant-menu-root ant-menu-rtl ant-menu-inline"
          direction="rtl"
          role="menu"
          style={{
            width: '100%',
          }}
        >
          <li
            className="ant-menu-item ant-menu-item-only-child ant-menu-item-selected"
            role="menuitem"
            style={{
              paddingRight: '16px',
            }}
          >
            <a href="/welcome">
              <span className="ant-pro-menu-item">
                <span role="img" aria-label="project" className="anticon anticon-project">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="project"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                  </svg>
                </span>
                <span className="ant-pro-menu-item-title">داشبرد</span>
              </span>
            </a>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child"
            role="menuitem"
            style={{
              paddingRight: '16px',
            }}
          >
            <a href="/job-offer-worktable">
              <span className="ant-pro-menu-item">
                <span role="img" aria-label="menu-unfold" className="anticon anticon-menu-unfold">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="menu-unfold"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"></path>
                  </svg>
                </span>
                <span className="ant-pro-menu-item-title">میزکار</span>
              </span>
            </a>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child"
            role="menuitem"
            style={{
              paddingRight: '16px',
            }}
          >
            <a href="/job-offer">
              <span className="ant-pro-menu-item">
                <span role="img" aria-label="table" className="anticon anticon-table">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="table"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"></path>
                  </svg>
                </span>
                <span className="ant-pro-menu-item-title">درخواست استخدام </span>
              </span>
            </a>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child"
            role="menuitem"
            style={{
              paddingRight: '16px',
            }}
          >
            <a href="/cv-archive">
              <span className="ant-pro-menu-item">
                <span role="img" aria-label="file-text" className="anticon anticon-file-text">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="file-text"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"></path>
                  </svg>
                </span>
                <span className="ant-pro-menu-item-title">آرشیو رزومه</span>
              </span>
            </a>
          </li>
          <li
            className="ant-menu-item ant-menu-item-only-child"
            role="menuitem"
            style={{
              paddingRight: '16px',
            }}
          >
            <a href="/job-offer-two">
              <span className="ant-pro-menu-item">
                <span role="img" aria-label="smile" className="anticon anticon-smile">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="smile"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"></path>
                  </svg>
                </span>
                <span className="ant-pro-menu-item-title">منو تست</span>
              </span>
            </a>
          </li>
          <li className="ant-menu-submenu ant-menu-submenu-inline" role="menuitem">
            <div
              className="ant-menu-submenu-title"
              role="button"
              aria-expanded="false"
              aria-haspopup="true"
              style="padding-right: 16px;"
            >
              <span className="ant-pro-menu-item">
                <span role="img" aria-label="user" className="anticon anticon-user">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="user"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                  </svg>
                </span>
                <span>منابع انسانی</span>
              </span>
              <i className="ant-menu-submenu-arrow"></i>
            </div>
            <div></div>
          </li>
          <li
            className="ant-menu-submenu ant-menu-submenu-inline ant-menu-submenu-open"
            role="menuitem"
          >
            <div
              className="ant-menu-submenu-title"
              role="button"
              aria-expanded="true"
              aria-haspopup="true"
              style={{
                paddingRight: '16px',
              }}
              aria-owns="/manage$Menu"
            >
              <span className="ant-pro-menu-item">
                <span role="img" aria-label="layout" className="anticon anticon-layout">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="layout"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"></path>
                  </svg>
                </span>
                <span>مدیریت سیستم</span>
              </span>
              <i className="ant-menu-submenu-arrow"></i>
            </div>
            <ul
              id="/manage$Menu"
              direction="rtl"
              className="ant-menu ant-menu-sub ant-menu-rtl ant-menu-inline"
              role="menu"
              style=""
            >
              <li
                className="ant-menu-item ant-menu-item-only-child"
                role="menuitem"
                style={{
                  paddingRight: '32px',
                }}
              >
                <a href="/manage/users">
                  <span className="ant-pro-menu-item">
                    <span className="ant-pro-menu-item-title">مدیریت کاربران</span>
                  </span>
                </a>
              </li>
              <li
                className="ant-menu-item ant-menu-item-only-child"
                role="menuitem"
                style={{
                  paddingRight: '32px',
                }}
              >
                <a href="/manage/title">
                  <span className="ant-pro-menu-item">
                    <span className="ant-pro-menu-item-title">عناوین</span>
                  </span>
                </a>
              </li>
              <li
                className="ant-menu-item ant-menu-item-only-child"
                role="menuitem"
                style={{
                  paddingRight: '32px',
                }}
              >
                <a href="/manage/structureOrganizational">
                  <span className="ant-pro-menu-item">
                    <span className="ant-pro-menu-item-title">ساختارسیستمی</span>
                  </span>
                </a>
              </li>
              <li
                className="ant-menu-item ant-menu-item-only-child"
                role="menuitem"
                style={{
                  paddingRight: '32px',
                }}
              >
                <a href="/manage/Occasion">
                  <span className="ant-pro-menu-item">
                    <span className="ant-pro-menu-item-title">مدیریت مناسبت ها</span>
                  </span>
                </a>
              </li>
              <li
                className="ant-menu-item ant-menu-item-only-child"
                role="menuitem"
                style={{
                  paddingRight: '32px',
                }}
              >
                <a href="/manage/contentManagment">
                  <span className="ant-pro-menu-item">
                    <span className="ant-pro-menu-item-title">مدیریت محتوا</span>
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
