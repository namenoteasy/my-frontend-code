<template>
  <t-container title="用户管理">
    <t-search right-width="260">
      <el-form :inline="true" :model="search" slot="searchLeft">
        <el-form-item label="用户名" label-width="68px">
          <el-input clearable placeholder="请输入" v-model="search.searchUserRealName"></el-input>
        </el-form-item>
        <el-form-item label="登录名" label-width="68px">
          <el-input clearable placeholder="请输入" v-model="search.searchUserLoginName"></el-input>
        </el-form-item>
        <el-form-item label="角色分组" label-width="68px">
          <el-select v-model="search.searchUserRoleId" clearable>
            <el-option
              :key="undefined"
              label="请选择"
              :value="undefined">
            </el-option>
            <el-option
              v-for="item in authorization"
              :key="item.roleId"
              :label="item.roleName"
              :value="item.roleId">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="searchRight">
        <el-button type="primary" @click="handleFilterSearchClick">查询</el-button>
        <el-button type="primary" @click="handleFilterResetClick">重置</el-button>
      </div>
    </t-search>
    <t-stretch-container :border="false" class="mt-17">
      <el-container>
        <!--左侧-->
        <el-main>
          <t-small-container title="用户列表" :border="true">
            <div slot="topright" style="margin-top:3px;">
              <el-button size="mini" type="primary" @click="handleDialogVisible('add')" v-auth="'view.system.pageUser.add'">添加</el-button>
            </div>
            <t-table-pagination
              :offset="20"
              ref="table"
              :totalSize="total"
              :pageSize="page.pageSize"
              :tableData.sync="tableData"
              :highlightCurrentRow="true"
              @row-click="handleRowClick"
              @current-change="handleFilterSearchClick"
              :columns="[
                {prop:'userProfilePhoto',label:'头像', slot: '头像', width: 50},
                {prop:'userRealName',label:'姓名'},
                {prop:'userLoginName',label:'登录名'},
                {prop:'organizationName',label:'所属机构'},
                {prop:'userPhone',label:'联系电话'}
              ]">
              <template slot-scope="scope" slot="头像">
                <t-img v-if="scope.row.userProfilePhoto" class="head-img" width="40px" height="40px" :src="scope.row.userProfilePhoto" alt="用户头像"></t-img>
                <img class="head-img" src="./imgs/head.png" alt="用户头像" style="background-color:#FFF" v-else>
              </template>
              <el-table-column prop="" label="操作" min-width="220">
                <template slot-scope="scope">
                  <a href="javascript:;" class="table-link" @click="handleDialogVisible('modify', scope.row)" v-auth="'view.system.pageUser.update'">修改</a>
                  <a href="javascript:;" class="table-link" @click="handleUserRemove(scope.row.userId)" v-auth="'view.system.pageUser.delete'">删除</a>
                </template>
              </el-table-column>
            </t-table-pagination>
          </t-small-container>
        </el-main>
        <!--左侧-->
        <!--右侧-->
        <el-aside width="450px">
          <t-small-container title="所属角色" :border="true" :shadow="false">
            <div slot="topright" style="margin-top:3px;">
              <el-button size="mini" type="primary" @click="handleRoleSelectVisible" v-if="!role.visible" v-auth="'view.system.pageUser.update'">修改</el-button>
              <el-button size="mini" type="primary" @click="handleRoleSave" v-if="role.visible">保存</el-button>
              <el-button size="mini" type="primary" @click="role.visible = false" v-if="role.visible">取消</el-button>
            </div>
            <template v-if="!role.visible && role.data.length > 0">
              <el-tag v-for="(item,i) in role.data" :key="i">{{item.roleName}}</el-tag>
            </template>
            <template v-else-if="role.visible && role.checkAllList.length > 0">
              <t-check-all v-model="role.check" label="roleId" name="roleName" :list="role.checkAllList"></t-check-all>
            </template>
            <t-empty v-else></t-empty>
          </t-small-container>
        </el-aside>
        <!--右侧-->
      </el-container>
    </t-stretch-container>
    <!--添加用户对话框-->
    <el-dialog :visible.sync="user.visible && user.type === 'add'" v-if="user.visible && user.type === 'add'"
               :title="user.title" @close="handleDialogClose" width="400px">
      <el-form ref="userForm" :model="user.formData" :rules="rules" label-width="110px">
        <el-form-item label="登录名" prop="userLoginName">
          <el-input clearable placeholder="请输入" v-model="user.formData.userLoginName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPassword">
          <el-input clearable type="password" placeholder="请输入" v-model="user.formData.userPassword"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="userRealName">
          <el-input clearable placeholder="请输入" v-model="user.formData.userRealName"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="userPhone">
          <el-input clearable placeholder="请输入" v-model="user.formData.userPhone"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="userProfilePhoto">
          <t-cropper v-model="user.formData.userProfilePhoto"></t-cropper>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleUserSubmit">保存</el-button>
        <el-button @click="handleDialogClose">取消</el-button>
      </div>
    </el-dialog>
    <!--修改用户对话框-->
    <el-dialog :visible.sync="user.visible && user.type === 'modify'" v-if="user.visible && user.type === 'modify'"
               :title="user.title" @close="handleDialogClose" width="400px">
      <el-form ref="userForm" :model="user.formData" :rules="rules" label-width="110px">
        <el-form-item label="登录名" v-if="user.type === 'modify'">
          <el-input clearable placeholder="请输入" v-model="user.formData.userLoginName" disabled></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input clearable type="password" placeholder="不修改密码则不需要填写" v-model="user.formData.userPassword"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="userRealName">
          <el-input clearable placeholder="请输入" v-model="user.formData.userRealName"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="userPhone">
          <el-input clearable placeholder="请输入" v-model="user.formData.userPhone"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="userProfilePhoto">
          <t-cropper v-model="user.formData.userProfilePhoto"></t-cropper>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleUserSubmit">保存</el-button>
        <el-button @click="handleDialogClose">取消</el-button>
      </div>
    </el-dialog>
  </t-container>
</template>
<style lang="scss" scoped>

</style>
