import fetch from './fetchWithTimeout';
import {BASE_URL} from '../constants/api';
import {transormResponse} from './transform';

export async function getRecipeList(searchParameter) {
  const formattedUrl = `${BASE_URL}/?q=${searchParameter}`;
  try {
    const response = await fetch(formattedUrl);
    const data = await response.json();
    return transormResponse(data);
  } catch (err) {
    console.log('err: ', err);
    return null; //shortest way to handle error messages :(
  }
}
