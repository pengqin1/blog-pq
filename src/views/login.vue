<template>
    <div class="container xie">
        <div class="row">
            <div class="col-xs-12 main-bg">
                <div class="col-xs-12">
                    <div class="main-zh">
                        个人博客管理系统
                    </div>
                    <div class="main-en">
                        THE BLOG MANAGEMENT SYSTEM
                    </div>
                    <div class="col-xs-12 xie-form">
                        <form method="post" id="loginForm">
                            <div class="mgt50">
                                <input v-model.trim="username" name="username" id="username" type="text" placeholder="用户名" class="xie-username" />
                            </div>
                            <div class="">
                                <input v-model.trim="password" name="password" id="password" type="password" placeholder="密码" class="xie-password" @keyup.enter="submit"/>
                            </div>
                            <div calss="login_div" title="点击登陆">
                                <a class="xie-login" style="cursor: pointer;" id="xie-login" @click="submit">登陆<img class="loading" src="~static/img/loading-sm.gif" v-show="loading"></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import userService from 'services/userService.js'

export default {
    data() {
            return {
                username: 'admin',
                password: '123456',
                loading: false
            }
        },
        methods: {
            _validate() {
                let pass = true;
                if (!this.username) {
                    this.$message.error('请输入用户名');
                    pass = false;
                } else if (!this.password) {
                    this.$message.error('请输入密码');
                    pass = false;
                }
                return pass;
            },
            submit() {
                if (!this._validate()) {
                    return;
                }

                let data = {
                    account: this.username,
                    password: this.password
                };

                this.loading = true;
                userService.login(data).then((res) => {
                    this.loading = false;
                    if (res.body.code === 200) {
                        this.$message.success('登录成功');
                        window.localStorage.setItem('userInfo', JSON.stringify(res.body.data));
                        this.$router.push('/manage/article/list');
                    } else {
                        this.$message.error(res.body.data)
                    }
                }, (res) => {
                    this.loading = false;
                });
            }
        }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.loading {
    width: 16px;
    height: 16px;
    margin-left: 10px;
    vertical-align: middle;
    margin-top: -3px;
}
.mgt50 {
    margin-top: 50px;
}
</style>
