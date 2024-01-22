/**
 * @note this could be used to take in an authToken and return the appropriate headers
 * when dealing with logged in users in the future
 */
export const getHeaders = () => ({
  'Content-Type': 'application/json',
});
