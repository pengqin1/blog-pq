<template>
    <div>
        <div class="handle">
            <el-input v-model="input" placeholder="请输入内容" class="w200"></el-input>
            <el-button type="primary" class="mgl20">查询</el-button>
            <el-button type="info" class="mgl10" @click="edit({})">新增</el-button>
        </div>

        <!-- 列表 -->
        <el-table :data="accountList" style="width: 100%">
            <el-table-column prop="account" label="账号">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="password" label="密码">
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                  size="small"
                  type="primary"
                  @click="edit(scope.row)">编辑</el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="del(scope.row._id)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>


        <!-- 新增、编辑 -->
        <el-dialog title="编辑" v-model="dialogFormVisible">
            <el-form>
                <el-form-item label="账号" label-width="100px">
                    <el-input v-model="currentAccount.account" auto-complete="off" class="w300"></el-input>
                </el-form-item>
                <el-form-item label="密码" label-width="100px">
                    <el-input v-model="currentAccount.password" auto-complete="off" class="w300"></el-input>
                </el-form-item>
                <el-form-item label="昵称" label-width="100px">
                    <el-input v-model="currentAccount.name" auto-complete="off" class="w300"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="editSubmit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import userService from 'services/userService.js'
export default {
    data() {
            return {
                input: '',
                accountList: [],
                dialogFormVisible: false,
                currentAccount: {}
            }
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
                userService.getAccount({}).then((res) => {
                    this.accountList = res.body;
                });
            },
            edit(item) {
                this.dialogFormVisible = true;
                this.currentAccount = JSON.parse(JSON.stringify(item));
            },
            editSubmit() {
                userService.editAccount(this.currentAccount).then((res) => {
                    this.$message.success('账号信息编辑成功');
                    this.dialogFormVisible = false;
                    this.getList();
                });
            },
            del(id) {
                this.$confirm('删除后不能恢复, 请确认是否删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    userService.delAccount({
                        id: id
                    }).then((res) => {
                        this.$message.success('删除成功');
                        this.getList();
                    })
                }).catch(() => {});
            }
        }
}
</script>
<style lang="scss" rel="stylesheet/scss">
    .w300 {
        width: 300px;
    }
</style>
