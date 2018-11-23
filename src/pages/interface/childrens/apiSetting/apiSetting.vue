<template>
  <t-container title="接口配置">
    <!--表格-->
    <t-table-pagination
      :columns="columns"
      :tableData="tableData"
      :totalSize="total"
      :pageSize="page.pageSize"
      @current-change="handleCurrentChange"
      :editable="true">
      <template slot="cfgDesc" slot-scope="scope">
        <el-input v-if="scope.row.editable" type="text" v-model="editRowData.cfgDesc"></el-input>
        <span v-else>{{scope.row.cfgDesc || '--'}}</span>
      </template>
      <template slot="cfgValue" slot-scope="scope">
        <el-input v-if="scope.row.editable" type="text" v-model="editRowData.cfgValue"></el-input>
        <span v-else>{{scope.row.cfgValue}}</span>
      </template>
      <el-table-column
        label="操作"
        width="200px">
        <template slot-scope="scope">
            <span v-if="scope.row.editable">
              <a href="javascript:;" class="table-link" @click="saveEdit(scope)">保存</a>
              <a href="javascript:;" class="table-link" @click="cancelEdit(scope)">取消编辑</a>
            </span>
          <a href="javascript:;" v-else class="table-link" @click="beginEdit(scope)">编辑</a>
        </template>
      </el-table-column>
    </t-table-pagination>
    <!--/表格-->
  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
