<template>
  <t-container title="登录日志">
    <t-search right-width="260">
      <el-form :inline="true" :model="search" slot="searchLeft">
        <el-form-item label="时间">
          <el-date-picker
            v-model="search.time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="用户">
          <el-input clearable placeholder="请输入" v-model="search.searchLogUserName"></el-input>
        </el-form-item>
      </el-form>
        <div slot="searchRight">
          <el-button type="primary" @click="handleFilterSearchClick">查询</el-button>
          <el-button type="primary" @click="handleFilterResetClick">重置</el-button>
        </div>
    </t-search>
    <div class="mt-17">
      <t-small-container title="登录记录" :border="true" >
        <t-table-pagination
          :offset="18"
          ref="table"
          :totalSize="total"
          :pageSize="page.pageSize"
          :tableData.sync="tableData"
          @current-change="handlePageChange"
          :columns="[
          {prop:'userLoginName',label:'登录名'},
          {prop:'loginTime',label:'时间'},
          {prop:'loginIp',label:'IP'}
        ]">
        </t-table-pagination>
      </t-small-container>
    </div>
  </t-container>
</template>
<style scoped lang="scss">
</style>
