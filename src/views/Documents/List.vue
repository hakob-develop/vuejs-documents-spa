<template lang="pug">
  div
    router-link.btn.btn-primary.mb-3.float-right(:to="{name: 'documents-create'}") Create Document
    table.table.text-left
      thead
        tr
          th(width="5%") #
          th(width="20%") Title
          th(width="55%") Content
          th(width="20%")
      tbody
        tr(v-for="document in documents")
          td {{document.id}}
          td {{document.title}}
          td {{document.content.substr(0, 75)}}...
          td.text-right
            router-link.btn.btn-sm.btn-primary(
              :to="{name: 'documents-view', params: {id: document.id}}"
            ) View
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex';

export default {
  name: 'DocumentsList',
  created() {
    this.fetchDocuments();
  },
  computed: {
    ...mapGetters({
      documents: 'documents',
    }),
  },
  methods: {
    ...mapActions({
      fetchDocuments: 'fetchDocuments',
    }),
  },
};
</script>

<style lang="css" scoped>
</style>
