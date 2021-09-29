/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-15:55
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import { getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useIntl } from 'umi';
import React from 'react';
import styles from './UserLayout.less';
import { ConfigProvider } from 'antd';
const UserLayout = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });

  const htmlMetaLogin =
    '<p  class="font-all">برای شروع لازم نیست عالی باشی ... </p>\n' +
    '                <p class="font-all">اما برای عالی شدن باید شروع کنی!</p>\n' +
    '                <p class="mb-0 font-bold text-red font-all">همین الان...</p>';
  return (
    <ConfigProvider direction="rtl" locale="fa">
      <HelmetProvider>
        <Helmet>
          <html lang="fa" dir="rtl" amp />
          <title>{title}</title>
          <meta name="description" content={title} />
        </Helmet>
        <div className="flex h-full">
          <div className="xl:w-1/4 md:w-2/4  px-20 overflow-auto w-full">
            <div className=" flex justify-center flex-col items-center min-h-full">
              <div className="w-full">
                <div className="flex flex-col">
                  <img src="/images/hacoupian.jpg" alt="haco" className="" id="logo-login" />
                </div>
              </div>
              <div className="w-full">{children}</div>
            </div>
          </div>
          <div className="xl:w-3/4 md:w-2/4 relative md:block hidden">
            <div className={styles.imgLogin}>
              <img className="h-full object-cover w-full block" src="/images/login.jpg" />
              <div
                id="login-meta-text"
                className="p-6"
                dangerouslySetInnerHTML={{ __html: htmlMetaLogin }}
              ></div>
              <div id="footer-sign">
                <p className="font-all">طراحی با عشق در هاکوتک 1399</p>
                <p className="font-all">نسخه 0.25</p>
              </div>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </ConfigProvider>
  );
};

export default UserLayout;
