// import { client } from '$api/client';

import mockProductsResponse from './mock/mockProductsResponse.json';
import { FetchProducts, FetchProductsResonse } from './types';

const emptyResponse: FetchProductsResonse = {
  products: [],
  status: 'error',
  message: 'There was a problem fetching products',
};

/**
 * @note moving ahead there should probably be an argument
 * to be able to specify what collection of products to fetch
 *
 * @note I have keept the api call commented out to understand how I would do it if this was a real api call
 * @note I have added mockProductsResponse to simulate the api response
 */
export const fetchProducts: FetchProducts = async () => {
  try {
    // const url = 'https://...';

    // const response = await client.GET(url);

    // if (!response) {
    //   throw new Error('Invalid response');
    // }

    // const responseJson = response.json() as Promise<FetchProductsResonse>;

    // const data = await responseJson;

    // return data;

    return mockProductsResponse;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error', error);

    return emptyResponse;
  }
};
