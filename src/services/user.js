/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-15:55
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import request from '@/utils/request';
import axios from '@/utils/axios';

export async function query() {
  return axios.post('/api/users');
}
export async function queryCurrent() {
  return axios.post('/api/login');
}
export async function queryNotices() {
  return axios.post('/api/notices');
}
