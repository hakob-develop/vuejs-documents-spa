<template lang="pug">
  form(@submit.prevent="save")
    fieldset.form-group
      input.form-control(
        v-model="title",
        :disabled="saving",
        required,
      )
    fieldset.form-group
      textarea.form-control(
        v-model="content",
        rows="10",
        :disabled="saving"
        required,
      )
    hr
    .text-right
      button.btn.btn-default(@click="$emit('cancel')") Cancel
      button.btn.btn-primary.ml-2(type="submit", :disabled="saving") Save
</template>

<script>
export default {
  name: 'DocumentForm',
  props: {
    document: {
      type: Object,
      default: () => {
        return {
          title: '',
          content: '',
        };
      },
    },
    saving: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: this.document.title,
      content: this.document.content,
    };
  },
  methods: {
    save() {
      this.$emit('save', {
        title: this.title,
        content: this.content,
      });
    },
  },
};
</script>

<style lang="css">
</style>
