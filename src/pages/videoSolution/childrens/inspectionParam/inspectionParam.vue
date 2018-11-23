<template>
  <t-container title="自动巡检配置">
      <!--表格-->
      <t-table-pagination
        :columns="columns"
        :tableData="tableData"
        :totalSize="1000"
        @current-change="handleCurrentChange"
        :pageSize="20">
        <template slot="value" slot-scope="scope">
          <el-input v-if="scope.row.editable" type="text" v-model="editRowData.value"></el-input>
          <span v-else>{{scope.row.value}}</span>
        </template>
        <el-table-column
          label="操作"
          align="left"
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
