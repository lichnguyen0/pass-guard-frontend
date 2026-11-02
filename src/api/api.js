import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
});

export const vaultAPI = {
  getAll: () => api.get('/vault'),
  create: (vaultItem) => api.post('/vault', vaultItem),
  update: (id, vaultItem) => api.put(`/vault/${id}`, vaultItem),
  delete: (id) => api.delete(`/vault/${id}`),
};

export default api;
