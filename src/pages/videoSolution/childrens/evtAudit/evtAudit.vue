<template>
  <t-container title="事件审核">
    <div class="count-container">
      <span>待审核数: {{tableData.length}}</span>
    </div>
    <!--表格-->
    <t-table-pagination
      :columns="columns"
      :tableData="tableData"
      :totalSize="total"
      :pageSize="page.pageSize"
      @current-change="handleCurrentChange">
      <template slot="parking" slot-scope="scope">
        <t-parking-text :rowData="scope.row"></t-parking-text>
      </template>
      <template slot="plate" slot-scope="scope">
        <t-car-number :plateData="scope.row"></t-car-number>
      </template>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <a href="javascript:;" class="table-link" @click="handleClickManualReview(scope.row)">人工判断</a>
        </template>
      </el-table-column>
    </t-table-pagination>
    <!--/表格-->

    <!--操作弹窗-->
    <el-dialog :title="manualReview.title" width="1278px" top="7vh" :visible.sync="manualReview.dialogVisible">
      <div class="comparison-dialog-content">
        <div class="comparison-dialog-top">
          <div class="comparison-photo">
            <t-small-title title="进场图片"></t-small-title>
            <div class="photo-container">
              <t-swiper :swiperData="manualReview.data.picArr" ref="reviewSwiper" :swiperOption="swiperOption"></t-swiper>
            </div>
            <!--时间轴-->
            <div class="timer-container">
              <div class="timer-bg">
                <div class="ash-arrow"></div>
              </div>
              <div class="timer-bottom">
                <t-swiper-timer :swiperData="manualReview.data.picArr" ref="timerSwiper" :swiperOption="timerOption"></t-swiper-timer>
              </div>
            </div>
          </div>
          <div class="cl"></div>
        </div>
        <div class="comparison-dialog-bottom">
          <div class="comparison-dialog-status">
            <div class="car-plate-container">
              <t-car-plate height="96px" :plateData="manualReview.data.plateData"></t-car-plate>
            </div>
            <div class="car-status-content">
              <t-small-title title="需审核理由"></t-small-title>
              <div class="status-text">
                <span class="big-text">{{manualReview.data.auditReason}}</span>
              </div>
            </div>

          </div>
          <div class="comparison-dialog-right">
            <t-small-title title="人工清洗"></t-small-title>
            <div class="clear-container">
              <el-form :inline="true" ref="manualForm" :show-message="false" :rules="manualReviewRules" :model="manualReview.data.judgeInfo">
                <el-form-item label="车牌" class="car-plate-input" label-width="50px">
                  <el-input
                    type="text"
                    v-model="manualReview.data.judgeInfo.plateNumber"
                    placeholder="请输入内容"
                    clearable>
                    <t-plate-color slot="append" v-model="manualReview.data.judgeInfo.plateColor"></t-plate-color>
                  </el-input>
                </el-form-item>
                <el-form-item label="车牌置信度" label-width="85px" prop="plateCredible">
                  <el-input
                    type="text"
                    v-model="manualReview.data.judgeInfo.plateCredible"
                    placeholder="请输入内容"
                    clearable>
                  </el-input>
                </el-form-item>
                <el-form-item label="泊位号" label-width="93px" prop="berthCode">
                  <el-select v-model="manualReview.data.judgeInfo.berthCode">

                  </el-select>
                </el-form-item>
                <el-form-item label="行为" label-width="50px" prop="evt">
                  <el-select v-model="manualReview.data.judgeInfo.evt">

                  </el-select>
                </el-form-item>
                <el-form-item label="行为置信度" label-width="85px" prop="actionCredible">
                  <el-input
                    type="text"
                    v-model="manualReview.data.judgeInfo.actionCredible"
                    placeholder="请输入内容"
                    clearable>
                  </el-input>
                </el-form-item>
                <el-form-item label="异常停车类型" label-width="93px">
                  <el-select v-model="manualReview.data.judgeInfo.abnormalType">

                  </el-select>
                </el-form-item>
                <el-form-item label="品牌" label-width="50px">
                  <el-select v-model="manualReview.data.judgeInfo.carBrand">

                  </el-select>
                </el-form-item>
                <el-form-item label="车辆型号" label-width="85px">
                  <el-input
                    type="text"
                    v-model="manualReview.data.judgeInfo.carType"
                    placeholder="请输入内容"
                    clearable>
                  </el-input>
                </el-form-item>
                <el-form-item label="车身颜色" label-width="93px">
                  <el-input
                    type="text"
                    v-model="manualReview.data.judgeInfo.carColor"
                    placeholder="请输入内容"
                    clearable>
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="text-ash">
              注意：带 “*”的为必填选项
            </div>
            <div class="cl"></div>
            <div class="operation">
              <el-button type="primary" @click.native="handleClickConfirm">确认</el-button>
              <el-button type="primary" @click.native="handleClickCancel">作废</el-button>
            </div>
          </div>
          <div class="cl"></div>
        </div>
      </div>
    </el-dialog>
    <!--/操作弹窗-->

  </t-container>
</template>
<script>
  export default {
    data () {
      return {
        swiperOption: {
          watchSlidesVisibility: true,
          slidesPerView: 'auto',
          spaceBetween: 10,
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: 47
          },
          freeMode: true,
          lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 10,
            loadingClass: 'my-lazy-loading'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          on: {
            slideChange: () => {
              this.timerSwiper.update(false)
              this.reviewSwiper.update(false)
            },
            lazyImageReady: (slideEl, imageEl) => {
              let zoom = $(slideEl).height() / $(imageEl).height()
              let picWidth = $(imageEl).width() * zoom
              $(slideEl).parent().find('.swiper-slide').width(picWidth)
              $('.timer-container').find('.swiper-slide').width(picWidth)
              this.timerSwiper.update(false)
              this.reviewSwiper.update(false)
            }
          }
        },
        timerOption: {
          watchSlidesVisibility: true,
          slidesPerView: 'auto',
          spaceBetween: 10,
          observer: true,
          observeParents: true,
          freeMode: true
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
