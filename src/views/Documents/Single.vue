<template lang="pug">
  div
    router-link.btn.btn-link.mb-2(:to="{name: 'documents'}") < Back
    .card(v-if="document")
      .card-body(v-if="!editing")
        h3.card-title {{document.title}}
        p {{document.content}}
        hr
        .text-right
          button.btn.btn-primary(@click="editing = true") Edit
          button.btn.btn-danger.ml-2(@click="_onDelete") Delete
      .card-body(v-if="editing")
        document-form(
          :document="document",
          @cancel="editing = false"
          :saving="saving",
          @save="_onSave",
        )
    h1.text-center(v-else) Loading...
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex';

import DocumentForm from '@/components/DocumentForm.vue';

export default {
  name: 'DocumentsList',
  created() {
    this.fetchSingleDocument(this.$route.params.id)
      .then((doc) => {
        this.title = doc.title;
        this.content = doc.content;
      });
  },
  components: {
    DocumentForm,
  },
  data() {
    return {
      editing: false,
      saving: false,
    };
  },
  computed: {
    ...mapGetters({
      document: 'currentDocument',
    }),
  },
  methods: {
    ...mapActions({
      fetchSingleDocument: 'fetchSingleDocument',
      updateDocument: 'updateDocument',
      deleteDocument: 'deleteDocument',
    }),
    _onDelete() {
      this.deleteDocument(this.document.id)
        .then(() => {
          this.$router.push('/documents');
        });
    },
    _onSave(data) {
      data.id = this.document.id;
      this.saving = true;
      this.updateDocument(data).then(() => {
        this.saving = false;
        this.editing = false;
      });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
