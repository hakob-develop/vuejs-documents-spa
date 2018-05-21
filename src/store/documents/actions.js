import { documents as api } from '@/api';

export function fetchDocuments({ commit }) {
  return api.listDocuments().then(({ documents }) => {
    commit('SET_DOCUMENTS', documents);
  });
}

export function fetchSingleDocument({ commit }, id) {
  return api.getDocument(id).then((data) => {
    commit('SET_CURRENT_DOCUMENT', data.document);
    return data.document;
  });
}

export function createDocument({ commit }, doc) {
  return api.createDocument(doc).then((data) => {
    commit('CREATE_DOCUMENT', data.document);
    return data.document;
  });
}

export function updateDocument({ commit }, doc) {
  return api.updateDocument(doc.id, doc).then((data) => {
    commit('UPDATE_DOCUMENT', data.document);
    return data.document;
  });
}

export function deleteDocument({ commit }, id) {
  return api.deleteDocument(id).then((data) => {
    commit('DELETE_DOCUMENT', id);
    return data.success;
  });
}
