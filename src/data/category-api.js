import API_ENDPOINT from '../globals/api-endpoint';
import { fetchWithToken } from '../utils/common';

class CategoryApi {
  static async getAllCategories() {
    const response = await fetchWithToken(API_ENDPOINT.ALL_CATEGORIES, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const responseJson = await response.json();
    return responseJson;
  }
}

export default CategoryApi;
