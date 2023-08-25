<template>
  <div>
    <ul>
      <li v-if="visiblePrevBtn" @click="movePage(-1)">
        <button :disabled="isDisabledPreviousBtn">Previous</button>
      </li>
      <li v-bind="pageItemsAttrs" v-for="(pageNum, index) in pagesCount" :key="index">
        <button
          @click="onChangePage(pageNum)"
          :class="{ active: pageNum === currentPage }"
        >
          {{ pageNum }}
        </button>
      </li>
      <li v-if="visibleNextBtn">
        <button @click="movePage(1)" :disabled="isDisabledNextBtn">Next</button>
      </li>
    </ul>
    <span class="page-info">
      <slot name="append" :isNextDisabled="isDisabledNextBtn" :currentPage="currentPage" :totalPages="pagesCount" :fnMovePage="movePage">
        Page {{ currentPage }} of {{ pagesCount }}
      </slot>
    </span>
  </div>
</template>

<script>

export default {
  // inheritAttrs: false,
  name: `paginator`,
  emits: ["update:currentPage"],
  created() {
    console.warn('attrs', this.$attrs)
    console.warn('porps', this.$props)
  },
  props: {
    pageItemsAttrs: {
      type: Object,
      default: () => ({
        class: 'custom-class'
      })
    },
    entriesCount: {
      type: Number,
      required: true,
      validator: (val) => val >= 0,
    },
    entriesPerPage: {
      type: Number,
      default: 10,
      validator: (val) => val > 0,
    },
    currentPage: {
      // current page
      type: Number,
      default: 1,
    },
    visibleNextBtn: {
      type: Boolean,
      default: true,
    },
    visiblePrevBtn: {
      type: Boolean,
      default: true,
    },
    visiblePageCounter: {
      type: Boolean,
      default: true,
    },
  },
  data: (ctx) => {
    console.warn(ctx)
    return {
      page: ctx.currentPage,
    };
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.entriesCount / this.entriesPerPage);
    },
    isDisabledPreviousBtn() {
      return this.currentPage <= 1;
    },
    isDisabledNextBtn() {
      return this.currentPage >= this.pagesCount;
    },
  },
  methods: {
    onChangePage(pageNum) {
      this.$emit("update:currentPage", pageNum);
    },
    movePage(step) {
      this.$emit("update:currentPage", this.currentPage + step);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 0.5rem;
}

.active {
  border: 1px solid #ccc;
}

button[disabled] {
  background: #e0e0e0;
  color: #ccc;
  cursor: not-allowed;
}

button[disabled]:focus,
button[disabled]:hover {
  border-color: transparent;
  outline: none;
}

.page-info {
  color: red;
}
</style>
