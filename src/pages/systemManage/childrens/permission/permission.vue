<template>

  <t-container title="权限管理">
    <!--搜索-->
    <t-search>

      <el-form :inline="true" :model="search" label-width="70px" slot="searchLeft">
        <div class="search-left">

          <el-form-item label="显示名">
            <el-input clearable placeholder="请输入" v-model="search.searchAuthName"></el-input>
          </el-form-item>
          <el-form-item label="权限名称">
            <el-input clearable v-model="search.searchAuthKey" placeholder="请输入权限名称"></el-input>
          </el-form-item>
        </div>

      </el-form>
      <div slot="searchRight">
        <el-button type="primary" class="search-btn" @click="handleFilterSearchClick">搜索</el-button>
        <el-button type="primary" class="search-btn" @click="handleFilterResetClick">重置</el-button>
      </div>
    </t-search>
    <!--/搜索-->

    <div class="mt-17">
      <div class="btn-container">
        <!--<el-button type="primary" @click="handleDialogVisible('add')" v-auth="'view.system.pageAuth.add'">添加</el-button>-->
        <el-button type="primary" @click="handleDialogVisible('add')">添加</el-button>
      </div>
      <!--表格-->
      <t-table-pagination
        :columns="[
          {prop:'authName',label:'显示名'},
          {prop:'authKey',label:'权限名称'},
          {prop:'authType',label:'类型'},
          {prop:'authRoute',label:'前端路由'},
          {prop:'authSort',label:'排序'},
          {prop:'authParent',label:'父级'},
          {prop:'authCommand',label:'后端命令字'},
          {prop:'authIcon',label:'图标'}
        ]"
        :tableData="tableData"
        :totalSize="total"
        :pageSize="page.pageSize"
        :currentPage.sync="page.no"
        @current-change="handlePageChange">
        <el-table-column
          label="操作"
          width="137">
          <template slot-scope="scope">
            <!--<a href="javascript:;" class="table-link" @click="handleDialogVisible('modify', scope.row)" v-auth="'view.system.pageAuth.update'">修改</a>-->
            <!--<a href="javascript:;" class="table-link" @click="handlePermissionRemove(scope.row.authId)" v-auth="'view.system.pageAuth.delete'">删除</a>-->
            <a href="javascript:;" class="table-link" @click="handleDialogVisible('modify', scope.row)">修改</a>
            <a href="javascript:;" class="table-link" @click="handlePermissionRemove(scope.row.authId)">删除</a>
          </template>
        </el-table-column>

      </t-table-pagination>
      <!--/表格-->
    </div>
    <el-dialog :visible.sync="permission.visible" :title="permission.title" width="400px">
      <el-form ref="permissionForm" :model="permission.formData" :rules="rules" label-width="85px">
        <el-form-item label="权限名称" prop="authKey">
          <el-input clearable placeholder="请输入" v-model="permission.formData.authKey"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="authType">
          <el-input clearable placeholder="请输入" v-model="permission.formData.authType"></el-input>
        </el-form-item>
        <el-form-item label="前端路由" prop="authRoute">
          <el-input clearable placeholder="请输入" v-model="permission.formData.authRoute"></el-input>
        </el-form-item>
        <el-form-item label="后端命令字" prop="authCommand">
          <el-input clearable placeholder="请输入" v-model="permission.formData.authCommand"></el-input>
        </el-form-item>
        <el-form-item label="显示名" prop="authName">
          <el-input clearable placeholder="请输入" v-model="permission.formData.authName"></el-input>
        </el-form-item>
        <el-form-item label="父级" prop="authParent">
          <el-input clearable placeholder="请输入" v-model="permission.formData.authParent"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="authSort">
          <el-input clearable placeholder="请输入" v-model="permission.formData.authSort"></el-input>
        </el-form-item>
        <el-form-item label="图标" prop="authIcon">
          <el-input clearable placeholder="请输入" v-model="permission.formData.authIcon"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handlepermissionSubmit">保存</el-button>
        <el-button type="primary" @click="handleDialogClose">取消</el-button>
      </div>
    </el-dialog>
  </t-container>
</template>
<style scoped lang="scss">
  .btn-container{
    text-align: right;
    background: #ffffff;
    padding: 4px 12px;
    border:1px solid #E5E5E5;
    border-bottom: 0;
    font-size: 0;
  }
</style>
