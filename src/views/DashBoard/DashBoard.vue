<template>
  <div class="dashboard">
    <div class="up">
      <div class="graph bar">
        <h5>Game categories</h5>
        <bar-chart style="height: 270px"></bar-chart>
      </div>
      <div class="graph line">
        <h5>Visits total number</h5>
        <line-chart style="height: 270px"></line-chart>
      </div>
      <div class="graph pie">
        <h5>Top Five Games</h5>
        <pie-chart style="height: 270px"></pie-chart>
      </div>
    </div>
    <div class="down">
      <div class="graph visit">
        <h5>Visits number by day last week</h5>
        <visit-chart style="height: 270px"></visit-chart>
      </div>
      <div class="graph signup">
        <h5>Sign Up total number by week last month</h5>
        <sign-chart style="height: 270px"></sign-chart>
      </div>
      <div class="graph coms">
        <h5>Coms number by day</h5>
        <div class="number">1 256</div>
      </div>
      <div class="graph rate">
        <h5>Activity Rate</h5>
        <rate-chart style="height: 270px"></rate-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/DashBoard/BarChart'
import LineChart from '@/components/DashBoard/LineChart'
import PieChart from '@/components/DashBoard/PieChart'
import VisitChart from '@/components/DashBoard/VisitChart'
import SignChart from '@/components/DashBoard/SignChart'
import RateChart from '@/components/DashBoard/RateChart'

export default {
  components: {
    BarChart,
    LineChart,
    PieChart,
    VisitChart,
    SignChart,
    RateChart,
  },
}
</script>

<style scoped lang="scss">
.dashboard {
  width: 1150px;
  height: 670px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 4px rgb(104, 166, 224) solid;
  border-radius: 10px;
  background: linear-gradient(0.25turn, #aad6e9, #ebf8e1, #f5dabe);
}
.up {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.down {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.up .graph {
  width: 350px;
  height: 300px;

  margin: 10px 20px 10px 20px;
}
.down .graph {
  width: 250px;
  height: 300px;

  margin: 10px 20px 10px 20px;
}

.coms {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.number {
  height: 200px;
  width: 200px;
  margin: auto;
  font-size: 3rem;
  font-weight: 800;
  border: 3px rgb(81, 194, 137) solid;
  border-radius: 100px;
  background-color: rgb(167, 236, 202);
  color: rgb(75, 170, 123);
  vertical-align: middle;
  line-height: 200px;
}

h5 {
  background-color: #779ce7;
  color: white;
}
</style>
