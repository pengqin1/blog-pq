<template>
    <div>
        <router-link to="/manage/article/list"><el-button type="primary">返回列表</el-button></router-link>

        
        <el-row :gutter="20">
            <el-col :span="15" class="mgt30">
                <el-input v-model="article.title" placeholder="标题"></el-input>
            </el-col>
            <el-col :span="18" class="mgt20">
                <el-input
                  type="textarea"
                  autosize
                  placeholder="请输入内容"
                  v-model="article.content">
                </el-input>
            </el-col>
        </el-row>
        <el-button type="info" class="mgt10" @click="editSubmit">{{submitText}}</el-button>
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
            if (this.id) {
                this.getDetail();    // 编辑
            }
        },
        computed: {
            submitText() {
                return this.id ? '立即保存' : '立即创建';
            }
        },
        methods: {
            getDetail: function() {
                articleService.detail({ 
                    id: this.id 
                }).then((res) => {
                    this.article = res.body;
                })
            },
            editSubmit() {
                articleService.edit(this.article).then((res) => {
                    this.$message.success('保存成功');
                    this.$router.push({name: 'articleDetail', params: {id: res.body.id}});
                })
            }
        }
}
</script>
<style lang="scss" rel="stylesheet/scss">
textarea {
    min-height: 150px;
}
</style>
