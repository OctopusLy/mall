<template>  
  <div class="hello">  
    <h2>{{msg}}</h2>  
    <el-button>默认按钮</el-button>  
    <el-button type="primary">主要按钮</el-button>  
    <el-button type="text">文字</el-button>  
  </div>  
</template>  
  
<script>  
export default {  
  data()
  {
    return{
      msg: 'Hello vue world！'
    }
  }
}  
</script>  
  
<!-- Add "scoped" attribute to limit CSS to this component only -->  
<style scoped>  
h1, h2 {  
  font-weight: normal;  
}  
  
ul {  
  list-style-type: none;  
  padding: 0;  
}  
  
li {  
  display: inline-block;  
  margin: 0 10px;  
}  
  
a {  
  color: #42b983;  
}  
</style>
