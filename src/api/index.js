import {BASE_URL} from '../constants/api';
import {transormResponse} from './transform';

export async function getRecipeList(searchParameter) {
  const formattedUrl = `${BASE_URL}/?q=${searchParameter}`;
  const response = await fetch(formattedUrl);
  const data = await response.json();
  return transormResponse(data);
}
