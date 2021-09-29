import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import React from 'react';

import theme from './theme';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: false,
  },
  locale: {
    default: 'fa_IR',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',

      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },

        {
          name: 'forgot-password',
          path: '/user/forgot-password',
          component: '@/pages/user/ForgotPassword',
        },
        {
          name: 'forgot-password-change',
          path: '/user/change-password',
          component: '@/pages/user/ForgotPasswordChange',
        },
      ],
    },

    {
      path: '/',
      component: '../layouts/SecurityLayout',
      authority: ['admin'],

      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/under-construction',
              component: './under_construction',
            },

            {
              path: '/manage/structureOrganizational/registration-organization',
              component: './manage/structureOrganizational/RegistrationOfTheOrganization',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'desktop',
              component: './dashboard',
            },
            {
              name: 'job_offer_panel',
              icon: 'layout',
              path: '/job-offer-worktable',
              component: './job_offer_worktable',
            },

            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/const',
                  name: 'const',
                  icon: 'smile',
                  component: './Dashboard',
                  authority: ['admin'],
                },
              ],
            },

            {
              name: 'job-offer.list',
              icon: 'table',
              path: '/job-offer',
              component: './job_offer',
            },

            {
              name: 'cv-archive.list',
              icon: 'file-text',
              path: '/cv-archive',
              component: './cv_archive',
            },
            {
              name: 'job-offer.second',
              icon: 'smile',
              path: '/job-offer-two',
              component: './job_offer_two',
            },

            {
              name: 'job_offer_request',
              path: '/job_offer_employment/employment',
              icon: 'team',
              component: './job_offer_employment/employment',

              routes: [
                {
                  name: 'employment',
                  icon: 'usergroup-add',
                  path: '/job_offer_employment/employment',
                  redirect: '/job_offer_employment/employment',
                },
              ],
            },
            {
              name: 'management',
              path: '/manage',
              icon: 'setting',
              component: './Manage',
              routes: [
                {
                  name: 'system',
                  path: '/manage/users',
                  component: './Manage/userManagement',
                },
                {
                  name: 'title',
                  icon: 'user',
                  path: '/manage/title',
                  component: './Manage/titleTable',
                },
                {
                  name: 'structure.organizational',
                  path: '/manage/structureOrganizational',
                  component: './Manage/structureOrganizational',
                },
                {
                  name: 'occasion',
                  path: '/manage/Occasion',
                  component: './Manage/Occasion',
                },

                {
                  name: 'login',
                  path: '/manage/LoginManagment',
                  component: './Manage/LoginManagment',
                },
                {
                  name: 'drycleaning',
                  path: '/manage/ManageDryCleaning',
                  component: './Manage/ManageDryCleaning',
                },
                {
                  name: 'store',
                  path: '/manage/store',
                  component: './Manage/store',
                },
              ],
            },

            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  theme: theme,
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
