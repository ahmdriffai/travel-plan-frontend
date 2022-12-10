import API_ENDPOINT from '../globals/api-endpoint';
import { fetchWithToken } from '../utils/common';

class PlaceApi {
  static async getAllPlaces({
    search = '', sort = 'ASC', page = 1, size = 20, category = '',
  }) {
    const response = await fetchWithToken(API_ENDPOINT.ALL_PLACE({
      search, sort, page, size, category,
    }), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const responseJson = await response.json();
    return responseJson;
  }

  static async gatAllByCategory({ category }) {
    const response = await fetchWithToken(API_ENDPOINT.ALL_PLACE({ category }), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const responseJson = await response.json();
    return responseJson;
  }
}

export default PlaceApi;
