import { DocumentsResource } from './resources';

export function listDocuments(query = {}) {
  return DocumentsResource.get(query).then((res) => {
    return res.data;
  });
}

export function getDocument(id) {
  return DocumentsResource.get({ id }).then((res) => {
    return res.data;
  });
}

export function createDocument(data) {
  return DocumentsResource.save({
    ...data,
  }).then((res) => {
    return res.data;
  });
}

export function updateDocument(id, data) {
  return DocumentsResource.update({ id }, {
    ...data,
  }).then((res) => {
    return res.data;
  });
}

export function deleteDocument(id) {
  return DocumentsResource.delete({ id }).then((res) => {
    return res.data;
  });
}
