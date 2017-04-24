<template>
    <div class="middle-box text-center">
        <h3 style="font-size: 18px;">抱歉，您无权限访问该页面... </h3>
        <p style="font-size: 15px;margin-top: 17px;">如需访问，请联系管理员</p>
        <div class="error-desc" style="margin-top: 40px;">
            <!-- <el-button type="primary" @click="goBack2" style="margin-right:10px;">返回</el-button> -->
            <router-link to="/manage/home"><el-button type="primary">去首页</el-button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack2() {
            this.$router.go(-2);
        }
    }
}
</script>
