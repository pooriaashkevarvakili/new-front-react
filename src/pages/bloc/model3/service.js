import request from '@/utils/request';

export async function fetch(data) {
  return request(`/api/job-offer/resume/list`, {
    method: 'POST',
    data,
  });
}

export async function getOne(id) {
  return request(`/api/job-offer/resume/get-one-by-id/${id}`, {
    method: 'GET',
  });
}

export async function create(data) {
  return request(`/api/job-offer/resume/create`, {
    method: 'POST',
    data,
  });
}

export async function getJobOffer(id) {
  return request(`/api/job-offer/resume/get-job-offer-by-id/${id}`, {
    method: 'GET',
  });
}
