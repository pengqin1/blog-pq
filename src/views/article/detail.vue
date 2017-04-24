<template>
    <div>
        <router-link to="/manage/article/list"><el-button type="primary">返回列表</el-button></router-link>
        <router-link :to="{name: 'articleEdit', params: {id: id}}"><el-button type="info">编辑</el-button></router-link>
        <el-button type="danger" @click="del">删除</el-button>

        <div class="article-detail" v-show="article.content">
            <h3 class="title">{{article.title}}</h3>
            <p class="content">{{article.content}}</p>
        </div>
    </div>
</template>
<script>
import articleService from 'services/articleService.js'
export default {
    data() {
            return {
                id: this.$route.params.id,
                article: {
                    content: '',
                    title: ''
                }
            }
        },
        created() {
            this.getDetail();
        },
        methods: {
            getDetail() {
                articleService.detail({
                    id: this.id
                }).then((res) => {
                    this.article = res.body;
                })
            },
            del() {
                this.$confirm('删除后不能恢复, 请确认是否删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    articleService.del({
                        id: this.id
                    }).then((res) => {
                        this.$message.success('删除成功');
                        this.$router.push({name: 'articleList'});
                    })
                }).catch(() => {});
            }
        }
}
</script>
<style lang="scss" rel="stylesheet/scss">
textarea {
    min-height: 150px;
}
.article-detail {
    margin-top: 40px;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    max-width: 1200px;

    .title {
        font-size: 17px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 30px;
    }
    .content {
        line-height: 1.6;
    }
}
.el-button {
    margin-right: 10px;
}
</style>
