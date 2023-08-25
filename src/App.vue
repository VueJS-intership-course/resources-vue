<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  page is: {{ page }}
  <paginator
    :pageItemsAttrs="{
      class: 'class-1',
      onClick: customOnClick // @click.once
    }"
     :entriesCount="entries.length"
     v-model:currentPage="page"
     @update:currentPage="test"
     class="class-1"
  >
    <template #append="propsData">
      <span>Page {{ propsData.currentPage }} of {{ propsData.totalPages }}</span>
      <button :class="{'red' : propsData.currentPage % 2 === 0}" :disabled="propsData.isNextDisabled" @click="propsData.fnMovePage(+1)">custom next</button>
    </template>
  </paginator>
</template>

<script>
import CoolPaginator from './components/CoolPaginator.vue'
import TestComponent from '@/components/TestComponent.vue'

export default {
  components: {
    TestComponent,
    [CoolPaginator.name] : CoolPaginator
  },
  data: () => ({
    page: 1
  }),
  methods: {
    onPageChanged(e) {
      this.page = e
    },
    test(e){ 
      console.warn(e)
    },
    customOnClick() {
      alert('once')
    }
  },
  computed: {
    entries() {
      return Array.from(new Array(52)).fill(8)
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.red {
  background-color: red;
}

:deep(.class-1) {
  background: blue;
}
</style>
