/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): NahidZadfathollah
- Date Created: 1399/08/25-10:19
- ------------------------------------------------------------------------------------ *
- This file is service of  job offer module.
- This class use [httpService] and [config]
- ----------------------------------------------------------------------------------- */
import http from "./../../utils/httpService"
import config from "./../../utils/config.json";
import request from '@/utils/request';

export async function get(id) {
  return http.get(`${config.api_Url}/api/getJobOfferDescriptionById/${id}`);
}
export async function getDropDownForJobOffer() {
  return http.get(`${config.api_Url}/api/getDropDownForJobOffer`);
}
export async function getActivity(id) {
  return http.get(`${config.api_Url}/api/getJobOfferActivityById/${id}`);
}
export async function init() {
  return http.get(`${config.api_Url}/api/getAllJobOffer`);
}
export async function update(id, values) {
  return request(`/api/job-offer/${id}`, {
    method: 'PUT',
    data: {method: values}
  });
}
export async function remove(id) {
  return request(`/api/job-offer/remove/${id}`, {
    method: 'DELETE'
  });
}
export async function query(params) {
  return request('/api/rule', {
    params,
  });
}
export async function save(params) {
  return request('/api/job-offer', {
    method: 'POST',
    data: {...params},
  });
}
export async function DataDryCleaning() {
  return request(`${config.api_Url}/shop-data/laundry/`, {
    method: 'Get',
    // eslint-disable-next-line no-undef
    data: {...params},
  });
}
