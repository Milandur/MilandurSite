---
layout: page
title: Карта
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Опционально: можно добавить логику для полноэкранного режима
})
</script>

<style scoped>
.map-container {
  width: 100%;
  height: calc(100vh - 64px); /* Вычитаем высоту navbar */
  margin: 0;
  padding: 0;
}

.map-frame {
  width: 100%;
  height: 100%;
  border: none;
}
</style>

<div class="map-container">
  <iframe 
    class="map-frame"
    src="http://5.83.140.207:25933/"
    title="Карта сервера"
    allowfullscreen
  />
</div>
