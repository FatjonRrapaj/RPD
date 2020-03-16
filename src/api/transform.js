export function transormResponse(response) {
  return response.results.slice(0, 20);
}
