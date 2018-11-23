<template>
  <t-container title="僵尸车清理">
    <!--搜索-->
    <t-search>

      <el-form :inline="true" :model="search" label-width="70px" slot="searchLeft">
        <el-form-item label="车牌" class="car-plate-input">
          <el-input
            type="text"
            v-model="search.plateNumber"
            placeholder="请输入内容"
            clearable>
            <t-plate-color slot="append" v-model="search.plateColor"></t-plate-color>
          </el-input>
        </el-form-item>
        <el-form-item label="停车点">
          <t-parking-select v-model="search.parkingCode"></t-parking-select>
        </el-form-item>
      </el-form>
      <div slot="searchRight">
        <el-button type="primary" class="search-btn" @click.native="handleClickSearch">搜索</el-button>
      </div>
    </t-search>
    <!--/搜索-->

    <div class="mt-17">
      <!--表格-->
      <t-table-pagination
        :columns="columns"
        :tableData="tableData"
        :totalSize="total"
        :pageSize="page.pageSize"
        :currentPage.sync="page.no"
        @current-change="handleCurrentChange">
        <template slot="parking" slot-scope="scope">
          <t-parking-text :rowData="scope.row"></t-parking-text>
        </template>
        <template slot="plate" slot-scope="scope">
          <t-car-number :plateData="scope.row"></t-car-number>
        </template>
        <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <a href="javascript:;" class="table-link" @click="handleClickLogList(scope.row)">流水记录</a>
            <a href="javascript:;" class="table-link" @click="handleClickForceOut(scope.row)">强制出场</a>
          </template>
        </el-table-column>
      </t-table-pagination>
      <!--/表格-->
    </div>

    <!--操作弹窗-->
    <el-dialog :title="dialogForceOut.title" width="1278px" :top="'2vh'" :visible.sync="dialogForceOut.judgeVisible">
      <div class="comparison-dialog-content">
        <!--查看入场图片按钮-->
        <div class="check-in-photo">
          <el-button type="info" @mousedown.native="dialogForceOut.inImageVisible = true"
                     @mouseup.native="dialogForceOut.inImageVisible = false">按住查看入场图片


          </el-button>
        </div>
        <!--/查看入场图片按钮-->

        <!--证据图片-->
        <div class="comparison-dialog-top">
          <div class="comparison-photo">
            <div class="photo-container">
              <div class="photo-proof" v-if="dialogForceOut.proofVisible">
                <div class="proof-line">
                  <div class="proof-line-container">
                    <div class="proof-line-log">
                      <span>判定已出场图片</span>
                    </div>
                  </div>
                  <div class="make"></div>
                  <div class="bule-arrow"></div>
                  <div class="bule-arrow"></div>
                </div>
              </div>
              <t-swiper :swiperOption="swiperOption" ref="tSwiper" :swiperData="dialogForceOut.data.picArr"
                        :slideHeight="496"></t-swiper>
              <div class="bule-border-container" v-if="dialogForceOut.proofVisible">
                <div class="bule-border"></div>
                <div class="bule-border right"></div>
              </div>
            </div>
          </div>
          <!--/证据图片-->
          <!--滑块-->
          <div class="slider-container">
            <el-slider v-model="timeStep.stepValue"
                       tooltip-class="tooltip"
                       ref="slider"
                       :show-tooltip="false"
                       :step="1"
                       :max="timeStep.maxStep"
                       :min="timeStep.minStep"
                       @change="handleSliderChange"
                       show-stops></el-slider>
            <div class="timer-container in-timer">
              <div class="timer-title">入场时间</div>
              <div class="timer-content">{{dialogForceOut.data.infoData.inTime}}</div>
            </div>
            <div class="timer-container out-timer">
              <div class="timer-title">当前时间</div>
              <div class="timer-content">{{dialogForceOut.nowTimer}}</div>
            </div>
          </div>
          <!--/滑块-->
          <div class="cl"></div>
        </div>
        <div class="comparison-dialog-bottom">
          <!--车牌信息-->
          <div class="bottom-left">
            <t-viewer>
              <img :src="dialogForceOut.data.plateData.plateImg" :alt="dialogForceOut.data.plateData.plateImgId">
            </t-viewer>
            <div class="car-info">
              <div class="info-content">
                <div class="item">
                  <span class="label">入场时间</span>
                  <span class="content">{{dialogForceOut.data.infoData.inTime}}</span>
                </div>
                <div class="item">
                  <span class="label">停在泊位</span>
                  <span class="content">{{dialogForceOut.data.infoData.berthCode}}</span>
                </div>
              </div>
            </div>
          </div>
          <!--/车牌信息-->
          <!--提交和出场时间-->
          <div class="bottom-right">
            <el-form :inline="true">
              <el-form-item label="出场时间">
                <el-date-picker
                  size="medium"
                  v-model="outTimer"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择日期时间">
                </el-date-picker>
                <el-button type="primary" @click.native="handleClickConfirmOut">确认出场</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!--/提交和出场时间-->
          <div class="cl"></div>
        </div>
      </div>
    </el-dialog>
    <!--/操作弹窗-->
    <!--抓拍图-->
    <div class="in-image pa" v-if="dialogForceOut.inImageVisible" @mouseup="dialogForceOut.inImageVisible = false">
      <div class="tc image-fullImage" v-for="(item,index) in dialogForceOut.data.inPic">
        <img :src="item.imgPath" class="onload">
        <div>抓拍{{index + 1}}:{{item.time}}</div>
      </div>
    </div>
    <!--/抓拍图-->
    <!--操作弹窗-->
    <el-dialog :title="logList.title" width="1278px" :top="'2vh'" :visible.sync="logList.listVisible">
      <div class="comparison-dialog-content">
        <div class="logList">
          <!--流水记录-->
          <t-table-pagination
            :columns="columns"
            :tableData="tableData"
            :tableHeightFlag="false"
            :totalSize="1000"
            :pageSize="20">
            <template slot="plate" slot-scope="scope">
              <t-car-number :plateData="scope.row"></t-car-number>
            </template>
          </t-table-pagination>
          <!--/流水记录-->
        </div>

      </div>
    </el-dialog>
    <!--/操作弹窗-->

  </t-container>
</template>
<script>
  export default{
    data () {
      return {
        swiperOption: {
          watchSlidesVisibility: true,
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
          speed: 300,
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: 47
          },
          lazy: {
            loadPrevNext: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          allowTouchMove: false,
          observer: true,
          observeParents: false,
          centerInsufficientSlides: true,
          on: {
            slideChange: () => {
              let swiperObj = this.$refs.tSwiper.$refs.myswiper.swiper
              this.timeStep.stepValue = swiperObj.realIndex / 3
              swiperObj.update(false)
            }
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
