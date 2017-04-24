<template>
    <div>
        <div class="handle">
            <el-input v-model.trim="filter.title" placeholder="请输入文章标题" class="w220"></el-input>
            <el-button type="primary" class="mgl20 vt" @click="filterList">查询</el-button>
            <router-link to="/manage/article/create"><el-button type="info" class="mgl10">新增</el-button></router-link>
        </div>
        <el-row :gutter="20">
            <el-col :span="12" v-for="item in articleList" class="mgb20">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="card-header-left bold">{{item.title}}</span>
                        <div class="card-header-right">
                 <!--            <span class="edit">编辑</span>
                            <span class="delete">删除</span> -->
                            <router-link :to="{name: 'articleDetail', params: {id: item._id}}"><span class="text-primary">查看<i class="el-icon-caret-right"></i></span></router-link>
                        </div>
                    </div>
                    <div class="text item">
                        {{item.content}}
                    </div>
                    <div class="footer">
                        <span class="date">{{item.date | timestampFormat}}</span>
                        <span class="author">作者</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import articleService from 'services/articleService.js'
export default {
    data() {
            return {
                filter: {
                    title: ''
                },
                articleList: []
            }
        },
        created() {
            this.getArticleList({});
        },
        methods: {
            getArticleList(data) {
                articleService.list(data).then((res) => {
                    this.articleList = res.body;
                })
            },
            filterList() {
                let data = {title: this.filter.title};
                this.getArticleList(data);
            }
        }
}
</script>
<style lang="scss" rel="stylesheet/scss">
    .text.item {
        line-height: 1.6;
        height: 130px;
        overflow: hidden;
    }
    .date {
        color: #999;
    }

    .footer {
        margin-top: 14px;
    }
    .author {
        color: #999;
        float: right;
    }
    .bold {
        font-weight: bold;
    }
    .delete {
        margin-right: 8px;
        color: #f30f0f;
    }
    .w220 {
        width: 220px;
    }
</style>
