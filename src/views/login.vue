<template>
  <div>
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">login</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名"
          >
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="请输入密码"
          >
            <span slot="prefix">
              <svg-icon icon-class="password" class="color-main"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button
            style="width: 100%"
            type="primary"
            @click="handleLogin"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
 
<script>
import qs from 'Qs'

export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin(){
      console.info("****** login ******")
      let data = {username:this.loginForm.username,password:this.loginForm.password};
      //let data = {"username":"111","password":"222"};
      //let data = {"username":"111","password":"222"};
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

      this.$axios.post('/login',qs.stringify(data))
      .then(function (response) {
        console.info("****** response ******");
        let code = "code:" + response.data.code;
        if (code == 200) {
            console.log(code);
          } 
          else {
            console.log(code);
          }

          console.log(response.data.message);
        })
        .catch(function (error) {
          console.log(error);
          });
    },

    // this.$axios.get('/login',{
      //   params: {
      //     username: this.loginForm.username,
      //     password: this.loginForm.password
      //     }
      // })
      // .then(
      //     res => {
      //       console.info(res.data)
      //     },
      //     error => {
      //       console.info(error)
      //     }

    // handleLogin(){
    //   this.axios({
    //     method: 'post',
    //     url: '/api/login',
    //     data: {
    //       username: this.loginForm.username,
    //       password: this.loginForm.password
    //       }
          
    //   })
    //   .then(function(response){
    //     console.log("****** login info ******");
    //     console.log(data);
    //   });
    // },
    // handleLogin() {
    //   this.$refs.loginForm.validate(valid => {
    //     if (valid) {
    //       this.loading = true;
    //       this.$store
    //         .dispatch("Login", this.loginForm)
    //         .then(response => {
    //           this.loading = false;
    //           let code = response.data.code;
    //           if (code == 200) {
    //             this.$router.push({
    //               path: "/success",
    //               query: { data: response.data.data }
    //             });
    //           } else {
    //             this.$router.push({
    //               path: "/error",
    //               query: { message: response.data.message }
    //             });
    //           }
    //         })
    //         .catch(() => {
    //           this.loading = false;
    //         });
    //     } else {
    //       // eslint-disable-next-line no-console
    //       console.log("参数验证不合法！");
    //       return false;
    //     }
    //   });
    // }
  }
};
</script>
 
<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}
 
.login-title {
  text-align: center;
}
 
.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>
