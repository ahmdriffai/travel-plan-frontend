import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/auth/register`,
  LOGIN: `${CONFIG.BASE_URL}/auth/login`,
  ME: `${CONFIG.BASE_URL}/auth/me`,

  // place
  ALL_PLACE: ({
    search = '', sort = 'ASC', page = 1, size = 10, category = 'penginapan',
  }) => `${CONFIG.BASE_URL}/places?search=${search}&page=${page}&sort=${sort}&size=${size}&category=${category}`,

  PLACE_BY_ID: (id) => `${CONFIG.BASE_URL}/places/${id}`,
  //  category

  ALL_CATEGORIES: `${CONFIG.BASE_URL}/categories`,

  // list place
  ADD_LIST_TRAVEL: `${CONFIG.BASE_URL}/list-travel`,
};

export default API_ENDPOINT;
