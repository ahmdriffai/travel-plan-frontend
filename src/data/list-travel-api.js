import API_ENDPOINT from '../globals/api-endpoint';
import { fetchWithToken } from '../utils/common';

class ListTravelApi {
  static async addListTravel(placeId) {
    const formData = new FormData();
    formData.append('place_id', placeId);

    const response = await fetchWithToken(API_ENDPOINT.ADD_LIST_TRAVEL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const responseJson = await response.json();

    return responseJson;
  }

  static async getListTravel() {
    const response = await fetchWithToken(API_ENDPOINT.ADD_LIST_TRAVEL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const responseJson = await response.json();

    return responseJson;
  }
}

export default ListTravelApi;
