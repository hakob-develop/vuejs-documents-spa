export default {
  SET_DOCUMENTS: (state, documents) => {
    state.documents = documents;
  },
  SET_CURRENT_DOCUMENT: (state, doc) => {
    state.current = doc;
  },
  CREATE_DOCUMENT: (state, doc) => {
    state.current = doc;
    state.documents.push(doc);
  },
  UPDATE_DOCUMENT: (state, currentDocument) => {
    state.current = currentDocument;
    state.documents = state.documents.map((doc) => {
      if (doc.id !== currentDocument.id) {
        return doc;
      }
      return currentDocument;
    });
  },
  DELETE_DOCUMENT: (state, id) => {
    state.current = null;
    state.documents = state.documents.filter((doc) => {
      return doc.id !== id;
    });
  },
};
