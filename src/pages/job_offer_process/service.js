import request from '@/utils/request';
import config from './../../utils/config.json';

export async function queryRule(params) {
  return request('/api/rule', {
    params,
  });
}
export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}


export const getAllEvaluateForSingleApplicant = () => {
  return http.get(`${config.api_Url}/api/getAllEvaluateForSingleApplicant`);
};
export const postApplicantResult = (applicant_result) => {
  return http.post(`${config.api_Url}/api/ApplicantResult`,(applicant_result));
};
export const deleteApplicantResult = (applicant_result_id) => {
  return http.delete(`${config.api_Url}/api/deleteApplicantResult/${applicant_result_id}`);
};

export const updateApplicantResult  = (applicant_result_id,applicant_result) => {
  return http.put(`${config.api_Url}/api/updateApplicantResult/${applicant_result_id}`,(applicant_result));
};
