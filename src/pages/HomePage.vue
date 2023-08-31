<template>

  <div>
    <h1>Home</h1>
    {{ entries }}
    <academy-paginator :entriesCount="150" />
  </div>
</template>

<script>
import requester from '@/services/index.js';
import BooksService from '@/services/BooksService.js';

export default {
  created() {
    BooksService.getAllBooks().then((data) => {
      this.entries = data
    })
  },
  data: () => ({
    entries: null
  })
}
</script>

<style scoped lang="scss">

  div {
    h1 {
      color: red;
    }
  }

</style>

