<template>
<div>
  <el-row class='el-hg'>
    <el-col :span='8'>左边</el-col>
    <el-col :span='8'>
      <ve-map :data="chartData"></ve-map>
    </el-col>
    <el-col :span='8'>右边</el-col>
  </el-row>
  <el-row class='el-hg'>
    <el-col :span='8'>左边</el-col>
    <el-col :span='8'>中</el-col>
    <el-col :span='8'>右边</el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      mapUrl: 'echarts/map/json/china.json',
      chartData: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [{
            '位置': '吉林',
            '税收': 123,
            '人口': 123,
            '面积': 92134
          },
          {
            '位置': '北京',
            '税收': 1223,
            '人口': 2123,
            '面积': 29234
          },
          {
            '位置': '上海',
            '税收': 2123,
            '人口': 1243,
            '面积': 94234
          },
          {
            '位置': '浙江',
            '税收': 4123,
            '人口': 5123,
            '面积': 29234
          }
        ]
      }
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-hg {
  height: calc(50vh)
}

.region-map {
  height: 400px;
  wdith: 400px;
}
</style>
