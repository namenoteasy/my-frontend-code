<template>
  <t-container title="业务系统及协议">
    <!--表格-->
    <t-table-pagination
      :columns="columns"
      :tableData="tableData"
      :totalSize="totalSize"
      @current-change="handleCurrentChange"
      :pageSize="requestData.pageSize">
      <el-table-column
        label="操作"
        width="300px">
        <template slot-scope="scope">
          <a href="javascript:;" class="table-link">复制Token</a>
        </template>
      </el-table-column>
    </t-table-pagination>
    <!--/表格-->
  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
