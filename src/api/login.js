 
export function login(username, password) { //登录接口

  this.axios.get('api/getNewsList').then((response)=>{
    this.newsList=response.data.data;
  }).catch((response)=>{
    console.log(response);
  })

}