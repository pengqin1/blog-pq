<template>
    <router-view></router-view>
    <!-- <div>
        <div>
            <h3>新增用户</h3>
            <input class="form-control" id="inputEmail3" placeholder="请输入账号123" v-model="account">
            <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
            <button type="submit" class="btn btn-default" @click="addAccount">新增</button>
        </div>
        <div>
            <h3>以peng开头的用户</h3>
            <ul>
                <li v-for="item in allAccounts">用户名：{{item.account}}, 密码：{{item.password}}</li>
            </ul>
        </div>

        <div style="margin-top: 80px;">
            <h3>创建文章</h3>
            <textarea v-model="article"></textarea>
            <button type="submit" class="btn btn-default" @click="addArticle">新增</button>
        </div>
        <div>
            <h3>已有文章</h3>
            <ul>
                <li v-for="item in allArticles">{{item.article}}</li>
            </ul>
        </div>
    </div> -->
</template>

<script>
    export default {
        data () {
            return {
                account: '',
                password: '',
                allAccounts: [],
                article: '',
                allArticles: []
            }
        },
        created() {
            // this.getAllAccounts();
            // this.getAllArticles();
        },
        methods: {
            // getAllAccounts() {
            //     this.$http.get('/api/login/getAccount')
            //         .then((response) => {
            //             this.allAccounts = response.body;
            //         })
            // },
            // getAllArticles() {
            //     this.$http.get('/api/article/list')
            //         .then((res) => {
            //             this.allArticles = res.body;
            //         })
            // },
            addAccount () {
                let params = { 
                  account: this.account,
                  password: this.password
                };

                // 前端拦截
                if (!this.account || !this.password) {
                    window.alert('输入不完整');
                    return;
                }

                // 创建一个账号密码
                this.$http.post('/api/login/createAccount', params)
                    .then((response) => {
                        this.getAllAccounts();
                    })
                    .catch((reject) => {
                        console.log(reject)
                    });
            },
            addArticle () {
                let params = { 
                  article: this.article
                };

                // 采用后端拦截，这里注释掉前端拦截
                // if (!this.article) {
                //     window.alert('输入不完整');
                //     return;
                // }

                // 创建一个账号密码
                this.$http.post('/api/article/create', params)
                    .then((response) => {
                        this.getAllArticles();
                    })
                    .catch((reject) => {
                        console.log(reject)
                    });
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    textarea {
        width: 80%;
        vertical-align: bottom;
        height: 50px;
    }
</style>
