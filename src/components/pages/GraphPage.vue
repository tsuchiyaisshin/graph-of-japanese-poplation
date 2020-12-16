<template>
  <section class="card">
    <header class="header-1">
      <div class="header-inner">
        <h3>Title</h3>
      </div>
    </header>
    <div class="card-content">
      <button @click="apiTest">Test API</button>
      <h1 class="card-title"></h1>
      <p class="card-text"></p>
    </div>
  </section>
</template>

<script>
import { api } from '../../api/api'

export default {
  name: 'GraphPage',
  methods: {
    async apiTest() {
      const result = await api.getPrefectures()
    },
  },
}
</script>

<style scoped>
.header-1 {
  box-sizing: border-box;
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 2em;
}

.logo-img {
  width: 70px;
}
</style>
