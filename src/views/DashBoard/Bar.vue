<template>
  <div class="graph">
    <h3>Game categories</h3>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import BarChart from '@/components/DashBoard/BarChart'

export default {
  components: {
    BarChart,
  },
}
</script>

<style scoped lang="scss">
h3 {
  color: rgba(255, 99, 132, 1);
  margin: 30px;
}

.graph {
  width: 1200px;
  margin: auto;
}
</style>
