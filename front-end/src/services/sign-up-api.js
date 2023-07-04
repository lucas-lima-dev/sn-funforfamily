import api from './api';

export async function signUp(email, password) {
  const response = await api.post('/users/sign-up', { username,email, password,user_url });
  return response.data;
}
//
