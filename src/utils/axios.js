import axios from 'axios';
import { baseApiUrl } from '@/../config/defaultSettings';


export default axios.create({
                              baseURL: 'http://localhost:3005/',
                            });
