<template>
  <div>
    <div class="cpp-table-container" ref="tableWrapper">
      <!--表格-->
      <el-table
        :data="tableData"
        type="expand"
        style="width: 100%"
        class="cpp-table"
        ref="table"
        :height="minHeight"
        @row-click="clickTr">
        <!-- 扩展列 -->
        <el-table-column type="expand" v-if="expand">
          <template slot-scope="props">
            <div class="expand-container">
              <div v-for="item in columns" class="expand-columns">
                <span style="color:#666666">{{item.label}}：</span>
                <b>{{item.formatter ? item.formatter(props.row) : props.row[item.prop]}}</b>
              </div>
              <div class="cl"></div>
            </div>

          </template>
        </el-table-column>

        <!-- 根据 columns 循环出各列，-->
        <el-table-column
          v-for="(column, index) in newPropToLabel"
          v-if="hideLevel.indexOf(newPropToLabel.length-index)<0"
          :show-overflow-tooltip="true"
          :align="column.align || 'left'"
          :key="column.prop"
          :prop="column.prop"
          :label="column.label"
          :min-width="column.minWidth"
          :class-name="cursor? 'cursor' : ''">
          <template slot-scope="scope">
            <div v-if="column.slot">
              <slot :name="column.slot" :row="scope.row"></slot>
            </div>
            <div v-else>{{column.formatter ? column.formatter(scope.row) || '--' : scope.row[column.prop] || '--'}}
            </div>
            <!--{{column.minWidth}}-->
          </template>
        </el-table-column>
        <!-- 特殊列内容分发 -->
        <slot></slot>

        <!--暂无数据-->
        <div slot="empty">
          <div class="iconfont icon-zanwushuju emptyData"></div>
          <div class="empty-text">暂无数据</div>
        </div>
      </el-table>
      <!--/表格-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
  .emptyData{
    font-size: 140px;
    line-height: 140px;
    color: #E3E9EA;
  }
  .empty-text{
    font-size: 14px;
    color: #333;
  }
</style>
