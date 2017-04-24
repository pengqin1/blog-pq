// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/


// 登录
router.post('/api/user/login',(req,res) => {
    // 这里的req.body能够使用，就在index.js中引入了const bodyParser = require('body-parser')
    let Account = {
        account: req.body.account,
        password: req.body.password
    };

    models.User.findOne(Account, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            if (data) {
                res.send({
                    code: 200,
                    data: data
                });
            } else {
                res.send({
                    code: 300,
                    data: '账号或密码错误'
                });
            }
        }
    });
});


// 获取已有账号接口
router.get('/api/user/getAccount',(req,res) => {

    // 通过模型去查找数据库 -- 这里查找了account以peng开头的账号
    // {account: /^peng/}, 
    models.User.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


// 新建 or 编辑账号信息
router.post('/api/user/editAccount',(req,res) => {
    // 编辑
    if (req.body._id) {
        models.User.findById(req.body._id, (err,data) => {
            if (err) {
                res.send(err);
            } else {
                data.account = req.body.account;    // 更新
                data.password = req.body.password;
                data.name = req.body.name;
                data.save((err, user) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send('保存成功');
                    }
                });
            }
        });
    } else {
        // 新增
        let newAccount = new models.User({
            account: req.body.account,
            password: req.body.password,
            name: req.body.name
        });

        newAccount.save((err,data) => {
            if (err) {
                res.send(err);
            } else {
                res.send('保存成功');
            }
        });
    }
});


// 删除账号
router.get('/api/user/delAccount',(req,res) => {
    // Post请求是req.body.id，get请求是req.query.id。 这里的id取得是表里面自带的_id
    models.User.findById(req.query.id, (err,data) => {
        if (err) {
            res.send(err);
        } else {
            data.remove((err, article) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send('删除成功');
                }
            });
        }
    });
});



// 获取文章列表
router.get('/api/article/list',(req,res) => {
    // 通过模型去查找数据库
    let filter = {};
    let reg = new RegExp(req.query.title);
    req.query.title && (filter.title = reg);

    models.Article.find(filter, (err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


// 编辑文章
router.post('/api/article/edit',(req,res) => {
    // 编辑
    if (req.body._id) {
        models.Article.findById(req.body._id, (err,data) => {
            if (err) {
                res.send(err);
            } else {
                data.content = req.body.content;    // 更新
                data.title = req.body.title;
                data.date = new Date().getTime();
                data.save((err, article) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send({
                            id: article._id
                        });
                    }
                });
            }
        });
    } else {
        // 新增
        let newArticle = new models.Article({
            title: req.body.title,
            content: req.body.content,
            date: new Date().getTime()
        });

        // newArticle 插到表中
        newArticle.save((err,data) => {
            if (err) {
                res.send(err);
            } else {
                res.send({
                    id: data._id
                });
            }
        });
    }
});

// 文章详情
router.get('/api/article/detail',(req,res) => {
    // Post请求是req.body.id，get请求是req.query.id。 这里的id取得是表里面自带的_id
    models.Article.findById(req.query.id, (err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

// 删除文章
router.get('/api/article/del',(req,res) => {
    // Post请求是req.body.id，get请求是req.query.id。 这里的id取得是表里面自带的_id
    models.Article.findById(req.query.id, (err,data) => {
        if (err) {
            res.send(err);
        } else {
            data.remove((err, article) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send('删除成功');
                }
            });
        }
    });
});



module.exports = router;