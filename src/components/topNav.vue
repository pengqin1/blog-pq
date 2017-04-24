<template>
    <div class="top-container ">
        <h3>后台管理系统</h3>
        <ul class="top-nav">
            <li class="active" id="menu1"><a href="javascript:;">页面</a></li>
            <li id="menu2"><a href="javascript:;">常用组件</a></li>
            <li id="menu3"><a href="javascript:;">工具箱</a></li>
        </ul>
        <!--消息提醒  & 用户-->
        <div class="top_right">
            <div class="message">
                <!-- <a href="tab.html"><i class="fa fa-bell-o"></i> <span class="badge">12</span></a> -->
            </div>
            <div class="user">你好，{{userInfo.name}} <i class="el-icon-caret-bottom"></i>
                <div class="user-mess">
                    <a href="">个人中心</a>
                    <a href="#" class="bb0">退出</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import userService from 'services/userService'
export default {
    data() {
            return {
                userInfo: JSON.parse(window.localStorage.getItem('userInfo')) || {}
            }
        },
        methods: {
            logout() {
                // userService.logout({}).then((res) => {
                //     this.$router.push('/login');
                // })
            }
        }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.user {
    color: #fff;
    cursor: pointer;
    padding: 0 10px;
    i {
        font-size: 10px;
        margin-top: 2px;
        vertical-align: middle;
        transform: scale(0.8);
    }
}
</style>
