<template>
  <div class="graph">
    <h3>Visits number by day</h3>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import BarChart from '@/components/DashBoard/VisitChart'

export default {
  components: {
    BarChart,
  },
}
</script>

<style scoped lang="scss">
h3 {
  color: rgba(75, 192, 192, 1);
  margin: 30px;
}

.graph {
  width: 1200px;
  margin: auto;
}
</style>
