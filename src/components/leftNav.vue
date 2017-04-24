<template>
    <div>
        <div class="left-box left-box-width" id="leftNav">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="xie-menu">
                            <el-menu :default-active="getRouterLink" class="el-menu-vertical-demo" theme="dark" :router="true">
                                <el-submenu index="1">
                                    <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                                    <el-menu-item index="/manage/user/account">账号管理</el-menu-item>
                                    <el-menu-item index="">我的信息</el-menu-item>
                                </el-submenu>
                                <el-menu-item index="/manage/article/list"><i class="el-icon-menu"></i>文章管理</el-menu-item>
                            </el-menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        getRouterLink() {
            return this.$route.path;
        }
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.xie-shouqi {
    height: 40px;
    padding-left: 10px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #d8d8d8;
    cursor: pointer;
}

.xie-shouqi span {
    padding-left: 88px;
}

.icons-arrow {
    transform: scale(0.73);
    position: absolute;
    right: 20px;
    top: 0;
    line-height: 48px;
}

.left-box a.router-link-active {
    color: #64c4b9;
}
</style>
