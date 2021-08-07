<template>
  <div class="dashboard">
    <div id="nav">
      <router-link to="/bar" style="color: rgba(255, 99, 132, 1)"
        >Game cat</router-link
      >
      |
      <router-link to="/line" style="color: rgba(54, 162, 235, 1)"
        >Total visits</router-link
      >
      |
      <router-link to="/pie" style="color: rgba(255, 206, 86, 1)"
        >Top Five</router-link
      >
      |
      <router-link to="/visit" style="color: rgba(75, 192, 192, 1)"
        >Visits by day</router-link
      >
      |
      <router-link to="/sign" style="color: rgba(153, 102, 255, 1)"
        >Sign up</router-link
      >
      |
      <router-link to="/rate" style="color: rgba(255, 159, 64, 1)"
        >Activity</router-link
      >
    </div>
    <div class="up">
      <div @click="bar()" class="graph bar">
        <h5>Game categories</h5>
        <bar-chart style="height: 270px"></bar-chart>
      </div>
      <div @click="line()" class="graph line">
        <h5>Visits total number</h5>
        <line-chart style="height: 270px"></line-chart>
      </div>
      <div @click="pie()" class="graph pie">
        <h5>Top Five Games</h5>
        <pie-chart style="height: 270px"></pie-chart>
      </div>
    </div>
    <div class="down">
      <div @click="visits()" class="graph visit">
        <h5>Visits number by day last week</h5>
        <visit-chart style="height: 270px"></visit-chart>
      </div>
      <div @click="sign()" class="graph signup">
        <h5>Sign Up total number by week last month</h5>
        <sign-chart style="height: 270px"></sign-chart>
      </div>
      <div class="graph coms">
        <h5>Coms number by day</h5>
        <div class="number">1 256</div>
      </div>
      <div @click="rate()" class="graph rate">
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
  name: 'DashBoard',
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background:#0d295f')
  },
  beforeDestroy() {
    document.querySelector('body').setAttribute('style', '')
  },

  components: {
    BarChart,
    LineChart,
    PieChart,
    VisitChart,
    SignChart,
    RateChart,
  },
  methods: {
    bar() {
      this.$router.push('/bar')
    },
    line() {
      this.$router.push('/line')
    },
    pie() {
      this.$router.push('/pie')
    },
    visits() {
      this.$router.push('/visit')
    },
    sign() {
      this.$router.push('/sign')
    },
    rate() {
      this.$router.push('/rate')
    },
  },
}
</script>

<style scoped lang="scss">
.dashboard {
  width: 1150px;
  height: 735px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 5px rgb(104, 166, 224) solid;
  border-radius: 10px;
  background: linear-gradient(0.25turn, #c9eee8, #ebf8e1, #fbe3c8);
}

#nav {
  padding: 20px;
  padding-bottom: 10px;
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
  cursor: pointer;

  margin: 10px 20px 10px 20px;
}
.down .graph {
  width: 250px;
  height: 300px;
  cursor: pointer;

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
  padding: 3px;
}
</style>
