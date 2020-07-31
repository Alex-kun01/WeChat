<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data (){
    return{

    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    async getData(){
      let _this = this
     const {data:res} = await _this.$http.get('/api/index/edition')
     console.log('返回数据',res)
    }
  }
}
</script>

<style>

</style>
