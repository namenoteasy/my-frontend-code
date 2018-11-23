<template>
  <t-container title="字典管理">
    <div class="page-roles">
      <el-card class="fl left">
        <div slot="header">
          <div class="fl">
            <t-small-title title="字典分组" ></t-small-title>
          </div>
          <div class="fr btn-container">
            <!--<el-button type="primary" @click="handleDictDialogVisible('add')" v-auth="'view.system.pageDict.add'">添加</el-button>-->
            <el-button type="primary" @click="handleDictDialogVisible('add')">添加</el-button>
          </div>
          <div class="cl"></div>
        </div>
        <t-simple-menu>
          <li v-for="item in dictList" @click="handleDictClick(item)">
            <span>{{item.dictGroupName}}</span>
            <div class="fr hide">
              <!--<el-button type="text" @click="handleDictDialogVisible('modify', item)" v-auth="'view.system.pageDict.update'">修改</el-button>-->
              <!--<el-button type="text" @click="handleDictRemove(item.dictGroupId)" v-auth="'view.system.pageDict.delete'">删除</el-button>-->
              <el-button type="text" @click="handleDictDialogVisible('modify', item)">修改</el-button>
              <el-button type="text" @click="handleDictRemove(item.dictGroupId)">删除</el-button>
            </div>
          </li>
        </t-simple-menu>
      </el-card>
      <el-card class="fr right">
        <div slot="header">
          <div class="fl">
            <t-small-title title="字典详情" ></t-small-title>
          </div>
          <div class="fr btn-container">
            <el-button type="primary" @click="handleDetailsDialogVisible('add')">添加</el-button>
            <!--<el-button type="primary" @click="handleDetailsDialogVisible('add')" v-auth="'view.system.pageDict.add'">添加</el-button>-->
          </div>
          <div class="cl"></div>
        </div>
        <div class="content">
          <t-table-notpagination
            ref="table"
            :columns="[
              {prop:'dictKey',label:'识别码'},
              {prop:'dictName',label:'显示值'},
              {prop:'dictValue',label:'字典值'},
              {prop:'dicSort',label:'排序'},
              {prop:'dictSecondValue',label:'附加值'},
              {prop:'dictDescription',label:'备注'}
            ]"
            :tableData="dictDetails.data">
            <el-table-column prop="" label="操作" min-width="220">
              <template slot-scope="scope">
                <!--<el-button size="mini" type="text" @click="handleDetailsDialogVisible('modify', scope.row)" v-auth="'view.system.pageDict.update'">修改</el-button>-->
                <!--<el-button size="mini" type="text" @click="handleDetailsRemove(scope.row.dictId)" v-auth="'view.system.pageDict.delete'">删除</el-button>-->
                <el-button size="mini" type="text" @click="handleDetailsDialogVisible('modify', scope.row)">修改</el-button>
                <el-button size="mini" type="text" @click="handleDetailsRemove(scope.row.dictId)">删除</el-button>
              </template>
            </el-table-column>
          </t-table-notpagination>
        </div>
      </el-card>
      <div class="cl"></div>
      <!--添加字典分组-->
      <el-dialog :visible.sync="dict.visible" v-if="dict.type === 'add' && dict.visible" :title="dict.title" width="400px">
        <el-form ref="dictForm" :model="dict.formData" :rules="dictRules" label-width="100px">
          <el-form-item label="分组编码" prop="dictGroupId">
            <el-input clearable placeholder="请输入" v-model="dict.formData.dictGroupId"></el-input>
          </el-form-item>
          <el-form-item label="分组名称" prop="dictGroupName">
            <el-input clearable placeholder="请输入" v-model="dict.formData.dictGroupName"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="handleDictSubmit">保存</el-button>
          <el-button type="primary" plain @click="handleDictDialogClose">取消</el-button>
        </div>
      </el-dialog>
      <!--修改字典分组-->
      <el-dialog :visible.sync="dict.visible"  v-else-if="dict.type === 'modify' && dict.visible" :title="dict.title" width="400px">
        <el-form ref="dictForm" :model="dict.formData" :rules="dictRules" label-width="100px">
          <el-form-item label="分组编码" prop="dictGroupId">
            <el-input clearable placeholder="请输入" v-model="dict.formData.dictGroupKey" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="分组名称" prop="dictGroupName">
            <el-input clearable placeholder="请输入" v-model="dict.formData.dictGroupName"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="handleDictSubmit">保存</el-button>
          <el-button type="primary" plain @click="handleDictDialogClose">取消</el-button>
        </div>
      </el-dialog>
      <!--添加字典-->
      <el-dialog :visible.sync="dictDetails.visible" v-if="dictDetails.visible" :title="dictDetails.title" width="400px">
        <el-form ref="dictDetailsForm" :model="dictDetails.formData" :rules="dictDetailsRules" label-width="100px">
          <el-form-item label="识别码" prop="dictKey">
            <el-input clearable placeholder="请输入" v-model="dictDetails.formData.dictKey"></el-input>
          </el-form-item>
          <el-form-item label="字典名" prop="dictName">
            <el-input clearable placeholder="请输入" v-model="dictDetails.formData.dictName"></el-input>
          </el-form-item>
          <el-form-item label="字典值" prop="dictValue">
            <el-input clearable placeholder="请输入" v-model="dictDetails.formData.dictValue"></el-input>
          </el-form-item>
          <el-form-item label="排序" prop="dicSort">
            <el-input clearable placeholder="请输入" v-model="dictDetails.formData.dicSort"></el-input>
          </el-form-item>
          <el-form-item label="附加值">
            <el-input clearable placeholder="请输入" v-model="dictDetails.formData.dictSecondValue"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input clearable placeholder="请输入" v-model="dictDetails.formData.dictDescription" type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="handleDetailsSubmit">保存</el-button>
          <el-button type="primary" plain @click="handleDetailsDialogClose">取消</el-button>
        </div>
      </el-dialog>
    </div>
  </t-container>
</template>
<style lang="scss" scoped>
  .page-roles,.left,.right{
    height:100%;
    margin-top:0;
  }
  $left-width:320px;
  .left{
    width:$left-width;
  }
  .right{
    width:calc(100% - #{$left-width} - #{$margin-small})
  }
  .content{
    overflow:auto;
    height:100%;
  }
  .btn-container{
    padding-top: 2px;
  }

</style>
