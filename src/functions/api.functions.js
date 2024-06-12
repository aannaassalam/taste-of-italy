import axios from 'axios';

const baseUrl = 'https://staging.tasteofitaly.com.au';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export const getHomeScreenContent = async () => {
  const res = await axiosInstance.get('/toi-specials');
  return res.data;
};
