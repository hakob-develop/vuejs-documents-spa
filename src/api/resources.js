import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// Vue.http.interceptors.push((request, next) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     request.headers.set('Authorization', `Bearer ${token}`);
//   }
//   next((response) => {
//     if (response.status === 401 && response.body.error === 'Unautenticated') {
//       localStorage.removeItem('token');
//       window.location = '/auth/login';
//     }
//   });
// });

const API_ROOT = 'http://localhost:8888';

export const DocumentsResource = Vue.resource(`${API_ROOT}/documents{/id}`);
