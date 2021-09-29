/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/08/09-10:19
- ------------------------------------------------------------------------------------ *
- This file is service of  cv archive module.
- This class use [httpService] and [config]
- ----------------------------------------------------------------------------------- */
import http from "./../../utils/httpService"
import config from "./../../utils/config.json";
import request from '@/utils/request';

export async function getDropDownForCvArchive() {
  return http.get(`${config.api_Url}/api/getDropDownForCvArchive`);
}
export async function save(params) {
  return request('http://localhost:3001/api/addResume', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function update(id, values) {
  return request(`/api/cv-archive/${id}`, {
    method: 'PUT',
    data: {method: values}
  });
}
export async function getById(id) {
  return request(`/api/job-offer/get-one/${id}`, {
    method: 'GET'
  });
}
export async function init() {
  return http.get(`${config.api_Url}/api/getForDropDown`);
}
export async function get() {
  return http.get(`${config.api_Url}/api/getAllResume`);
}
