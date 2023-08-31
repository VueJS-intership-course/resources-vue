<template>
  <div>
    <header-component />
    <router-view :key="$route.fullPath"></router-view>
    <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from '@/common-templates/Header.vue'
import FooterComponent from '@/common-templates/Footer.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}

</script>