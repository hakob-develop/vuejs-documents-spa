<template lang="pug">
  div
    router-link.btn.btn-link.mb-2(:to="{name: 'documents'}") < Back
    .card
      .card-body
        document-form(
          @cancel="$router.push('/documents')",
          @save="_onSave",
          :saving="saving"
        )
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex';

import DocumentForm from '@/components/DocumentForm.vue';

export default {
  name: 'DocumentsCreate',
  created() {
  },
  components: {
    DocumentForm,
  },
  data() {
    return {
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
      createDocument: 'createDocument',
    }),
    _onSave(data) {
      this.saving = true;
      this.createDocument(data)
        .then((doc) => {
          this.$router.push(`/documents/${doc.id}`);
        });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
