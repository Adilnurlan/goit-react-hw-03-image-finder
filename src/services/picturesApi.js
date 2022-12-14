import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const APIKEY = '30941641-57462658bbfdcd322117c0444';

export const fetchImages = (page, query) => {
  return axios({
    params: {
      key: APIKEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 12,
    },
  });
};
