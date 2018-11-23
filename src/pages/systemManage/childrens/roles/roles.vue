<template>
  <t-container title="角色管理">
    <div class="page-roles">
      <el-card class="fl left">
        <t-card-header slot="header" title="角色列表">
          <!--<el-button size="mini" type="primary" @click="handleDialogVisible('add')" v-auth="'view.system.pageRole.add'">添加</el-button>-->
          <el-button type="primary" @click="handleDialogVisible('add')">添加</el-button>
        </t-card-header>
        <t-simple-menu>
          <li v-for="item in rolesList" @click="handleRolesClick(item)">
            <span>{{item.roleName}}</span>
            <div class="fr hide">
              <!--<el-button size="mini" type="text" @click="handleDialogVisible('modify', item)" v-auth="'view.system.pageRole.update'">修改</el-button>-->
              <!--<el-button  size="mini"type="text" @click="handleRolesRemove(item.roleId)" v-auth="'view.system.pageRole.delete'">删除</el-button>-->
              <el-button type="text" @click="handleDialogVisible('modify', item)">修改</el-button>
              <el-button type="text" @click="handleRolesRemove(item.roleId)">删除</el-button>
            </div>
          </li>
        </t-simple-menu>
      </el-card>
      <el-card class="fr right">
        <t-card-header slot="header" title="角色权限">
          <!--<el-button size="mini" type="primary" @click="handleUpdateClick" v-if="!rolesDetails.visible" v-auth="'view.system.pageRole.update'">修改</el-button>-->
          <el-button type="primary" @click="handleUpdateClick" v-if="!rolesDetails.visible">修改</el-button>
          <el-button type="primary" @click="handleUpdateSubmit" v-if="rolesDetails.visible">保存</el-button>
          <el-button type="primary" @click="rolesDetails.visible = false" v-if="rolesDetails.visible">取消
        </el-button>
        </t-card-header>
        <div class="content" v-if="authTree.length > 0">
          <div class="page-roles-modular" v-if="rolesDetails.visible">
            <div v-for="item in authTree">
              <p class="modular_name">{{item.authName}}</p>
              <div class="modular" v-for="i in item.children">
                <p>{{i.authName}}</p>
                <el-checkbox-group class="modular_checkbox_group" v-model="checkList[i.authId]">
                  <el-checkbox :label="auth.authId" v-for="auth in i.children" :key="auth.authId" @change="handleAuthChange($event,auth.authId)">{{auth.authName.split('-')[1]}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>
          <div class="page-roles-modular" v-else>
            <div v-for="item in authTree">
              <p class="modular_name">{{item.authName}}</p>
              <div class="modular" v-for="i in item.children">
                <p>{{i.authName}}</p>
                <div class="modular_label_group">
                  <label v-for="auth in i.children" class="modular_label">
                    <span v-if="(auth.children[0] && currentAuth[auth.children[0].authId] === 'true') || currentAuth[auth.authId] === 'true'" class="el-icon-circle-check-outline check-state"></span>
                    <span v-else class="el-icon-circle-close-outline check-state"></span>
                    {{auth.authName.split('-')[1]}}
                </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-card>
      <!--添加角色-->
      <el-dialog :visible.sync="roles.visible" :title="roles.title" width="400px">
        <el-form ref="rolesForm" :model="roles.formData" :rules="rules" label-width="100px">
          <el-form-item label="角色名称" prop="roleName">
            <el-input clearable placeholder="请输入" v-model="roles.formData.roleName"></el-input>
          </el-form-item>
          <el-form-item label="初始页" prop="roleHomePage">
            <el-input clearable placeholder="请输入" v-model="roles.formData.roleHomePage"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input clearable type="textarea" placeholder="请输入" v-model="roles.formData.roleDescription"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="handleOnSubmit">保存</el-button>
          <el-button type="primary" @click="handleDialogClose">取消</el-button>
        </div>
      </el-dialog>
    </div>
  </t-container>
</template>
<style lang="scss" scoped>
  .page-roles, .left, .right {
    height: 100%;
    margin-top: 0;
  }
  .page-roles .t-table {
    overflow: auto;
  }
  .page-roles-table{
    height: calc(100% - 62px);
    overflow: auto;
  }
  $left-width: 320px;
  .left {
    width: $left-width;
  }

  .right {
    width: calc(100% - #{$left-width} - #{$margin-small})
  }

  .content {
    overflow: auto;
    height: 100%;
    margin: -10px;
    padding: 10px;
  }

  .check-state {
    font-size: 22px;
    font-weight: 700;
    &.el-icon-circle-check-outline {
      color: $color-success;
    }
    &.el-icon-circle-close-outline {
      color: $color-font-disabled;
    }
  }

  .filter {
    z-index: 1;
  }
  .page-roles-modular {
    > div {
      margin: 10px 0;
      > p.modular_name {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 10px;
      }
      .modular {
        border: 1px solid rgba(144, 147, 153, 0.2);
        padding: 10px;
        margin-bottom: 20px;
        > p {
          font-size: 14px;
          line-height: 30px;
        }
        .modular_checkbox_group {
          margin: 10px 0;
        }
        .modular_label_group {
          margin: 10px 0;
          > label {
            padding: 5px 0;
            span {
              vertical-align: bottom;
            }
          }
          .modular_label + .modular_label {
            margin-left: 30px;
          }
        }
      }
    }
  }
</style>
