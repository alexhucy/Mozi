<template>
	<popup :show.sync="showPOP" height="100%">
    <group title="小名">
        <x-input placeholder="请输入姓名" type="text"  :value.sync="name"></x-input>
    </group>
    <group title="性别">
        <radio :options="radio001" :value.sync="value3" @on-change="change"></radio>
    </group>
    <group title="生日">
        <date-time :value.sync="value2" placeholder="请选择日期" :max-year=2016 format="YYYY-MM-DD" @on-change="changebirth" title="选择日期" year-row="{value}年" month-row="{value}月" day-row="{value}日" confirm-text="完成" cancel-text="取消"></date-time>
    </group>
    <group>
        <x-button type="primary" @click="updateInfo">确认{{showmess}}</x-button>
    </group>
    <loading :show="show1"></loading>
    <toast :show="show" :time="1000" type="text" width="15em">{{message}}</toast>
	</popup>
</template>
<style>
    .weui_btn_primary{
        background-color:#72e4dc;
    }
</style>
<script>
import Group from '../../../node_modules/vux/dist/components/group/index'
import xInput from '../../../node_modules/vux/dist/components/x-input/index'
import toast from '../../../node_modules/vux/dist/components/toast/index'
import loading from '../../../node_modules/vux/dist/components/loading/index'
import Radio from '../../../node_modules/vux/dist/components/radio/index'
import DateTime from '../../../node_modules/vux/dist/components/datetime/index'
import xButton from '../../../node_modules/vux/dist/components/x-button/index'
import Cell from '../../../node_modules/vux/dist/components/group/index'
import {childUpdateQuery,alterChildInfoQuery} from '../../vuex/actions/userAction'
import popup from '../../../node_modules/vux/dist/components/popup/index'

export default {
  data() {
    return {
      radio001: [ '男', '女' ],
      sex: '',
      birth: '',
      value2: '',
      value3: '',
      name: '',
      id: '',
      showmess: '',
      show1: false,
      show: false,
	    message: ''
    }
  },
  vuex: {
    actions: {
      childUpdateQuery,
      alterChildInfoQuery
    }
  },
	props: {
		showPOP: Boolean
	},
  components: {
    Group,
    Cell,
    xInput,
    xButton,
    Radio,
    DateTime,
    toast,
    loading,
	  popup
  },
  route:{
    data({to: {query: {nickname,birth,avatar,gender,id}}}){
      this.name = nickname
      this.value3 = gender == 'male' ? '男' : '女'
      this.value2 = birth
      this.id = id
    }
  },
  methods: {
    change: function (value) {
      this.sex = value == '男' ? '1' : '0'
    },
    updateInfo: function () {
      var _self = this
      _self.show1 = true
      if(this.id != undefined && this.id != null){
        this.alterChildInfoQuery(this.id,this.name,this.sex,this.birth).then(function () {
	        _self.message = '添加成功'
	        _self.show = true
					_self.show1 = false
	        _self.showPOP = false
        },function () {
	        _self.message = '添加失败'
          _self.show1 = false
          _self.show = true
        })
      }
      else {
        this.childUpdateQuery(this.name, this.sex, this.birth).then(function () {
          //_self.$router.go({name: 'info',replace: true})
	        self.message = '修改成功'
	        _self.show = true
	        _self.show1 = false
	        _self.showPOP = false
        })
      }
    },
    changebirth: function (value) {
      this.birth = value
    },
    changename: function (value) {
      this.name = value
    }
	},
	ready: function () {
	    if (this.id != null && this.id != undefined){
	        this.showmess = '修改'
	    }else {
	        this.showmess = '添加'
	    }
  }
}
</script>