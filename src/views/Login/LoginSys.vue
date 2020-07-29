<template>
    <div class="login-main">
        <div class="login-box">
            <img src="https://swim.zmtek.net/assets/images/logo-daka.png" alt="" class="login-logo">
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px" class="login-ruleForm">
                <div class="login-title">欢迎登陆</div>
                <el-form-item prop="username">
                    <el-input
                            v-model="loginForm.username"
                            placeholder="账号"
                            clearable>
                        <i slot="prefix" class="el-input__icon el-icon-user"></i>
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input v-model="loginForm.password"
                              placeholder="账号"
                              type="password"
                              clearable
                              :show-password=true
                              @keyup.enter.native="submitForm('loginForm')">
                        <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
                    </el-input>
                </el-form-item>

                <el-button type="submit"  class="btnLogin" @click="submitForm('loginForm')"  :loading="loadState.searchLoad" >登录</el-button>

            </el-form>

        </div>


    </div>
</template>


<script>
    import {ApiloginIn} from '@/assets/js/api'
    import {mapActions} from 'vuex'


    let btnStatusLogin = true;   //按钮是否可点击状态

    export default {
        inject: ['reLoad'],
        data() {
            return {
                loadState: {  //按钮状态
                    searchLoad:false
                },

                loginForm: {
                    username: '',
                    password: '',
                },
                loginRules: {  //验证规则
                    username: [
                        {required: true, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ],
                },


            }
        },

        methods: {



            ...mapActions({
                ACTLogin: 'StoreTagNav/ACTLogin',   //store里 login登录方法 并 保存用户信息
            }),

            getStatus(urlStr) {
                var urlStrArr = urlStr.split('/');
                return urlStrArr[urlStrArr.length - 1]
            },



            /*提交*/
            submitForm(loginForm) {
                let that = this;

                this.$refs[loginForm].validate((valid) => {

                    this.GLOBAL.btnStateChange(this,'loadState','searchLoad');

                    let that = this;
                    let username = that.loginForm.username;
                    let password = that.loginForm.password;
                    ApiloginIn({
                        username: username,
                        password: password,
                    }).then(res => {
                        console.log(res);
                        if (res.status == 1) {
                            let loginData = res.data;
                            console.log(loginData);
                            that.ACTLogin(loginData);
                            this.$message({
                                message: res.info,
                                type: 'success',
                                duration: 1500,
                                offset: 100,
                            });


                            // this.alertTip();

                            // return false;

                            setTimeout(() => {
                                /* this.$routerConfigure.replace({
                                     path: "/redirect",
                                     query: {
                                         nextPath: '/index'
                                     }
                                 });*/
                                that.$router.push({path: '/index'});
                            }, 1500);

                        }
                        if (res.status == 0) {
                            this.$message({
                                message: res.info,
                                type: 'error',
                                duration: 3000,
                                offset: 40,
                            });
                        }
                    });

                });
            },


        },

    }
</script>
<style lang="scss">
    @import "~@/assets/css/login.scss";
</style>
