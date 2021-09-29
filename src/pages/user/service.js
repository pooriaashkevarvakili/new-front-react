import config from '@/../config/defaultSettings';
import axios from '@/utils/axios';

export async function login(data) {

  return axios.post(`${config.baseApiUrl}/authentication/token/get/`, {
    "model" : "Manager",
    "device_type" : 1,
    ...data
  });
}

