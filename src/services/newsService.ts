import axios from 'axios';
import { API_BASE_URL, API_KEY } from '@env';

const newsApiClient = axios.create({
  baseURL: API_BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

/**
 * Fetches the top headlines for Egypt (EG) from NewsAPI.
 * @returns The response data containing a list of top headlines.
 */
export const getEgyptianTopHeadlines = async (url:string) => {
  try {
    const response = await newsApiClient.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching Egyptian top headlines:', error);
    throw error; // Let the caller handle the error
  }
};
