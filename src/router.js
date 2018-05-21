import Vue from 'vue';
import Router from 'vue-router';

import Documents from './views/Documents/Index.vue';
import DocumentsList from './views/Documents/List.vue';
import DocumentsSingle from './views/Documents/Single.vue';
import DocumentsCreate from './views/Documents/Create.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/documents',
  }, {
    path: '/documents',
    component: Documents,
    children: [{
      path: '',
      name: 'documents',
      component: DocumentsList,
    }, {
      path: 'create',
      name: 'documents-create',
      component: DocumentsCreate,
    }, {
      path: ':id',
      name: 'documents-view',
      component: DocumentsSingle,
    }],
  }],
});
