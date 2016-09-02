<template>
    <group title="小名">
        <x-input placeholder="请输入姓名" type="text"  :value.sync="nickname"></x-input>
    </group>

    <group title="性别">
        <radio :options="radio001" :value.sync="sexValue" @on-change="change"></radio>
    </group>

    <group title="生日">
        <date-time :value.sync="birthdayValue"
                   placeholder="请选择日期"
                   format="YYYY-MM-DD"
                   @on-change="changebirth"
                   title="选择日期"
                   year-row="{value}年"
                   month-row="{value}月"
                   day-row="{value}日"
                   confirm-text="完成"
                   cancel-text="取消">
        </date-time>
    </group>

    <group>
        <x-button type="primary" @click="updateInfo">确认</x-button>

	      <x-button type="red" @click="cancel">取消</x-button>
    </group>
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
import {childUpdateQuery,alterChildInfoQuery,removeChildInfo} from '../../vuex/actions/userAction'
import popup from '../../../node_modules/vux/dist/components/popup/index'
import {getEditChildInfo,getOpreationStatus} from '../../vuex/getters/userGetter'
import timestamp2date from '../../filter/timestamp2date'
export default {
  data() {
    return {
      radio001: [ '男', '女' ],
      sex: this.child.gender === 'female'?'0':'1',
      birthday: this.child.birthday,
      sexValue: this.child.gender === 'female'?'女':'男',
      value: '',
	    birthdayValue: timestamp2date(this.child.birthday),
      nickname: this.child.nickname,
      id: this.child.id,
    }
  },
  vuex: {
    actions: {
      childUpdateQuery,
      alterChildInfoQuery,
	    removeChildInfo
    },
	  getters: {
		  child: getEditChildInfo,
		  type: getOpreationStatus
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
	route: {
		deactivate: function (transition) {
			this.removeChildInfo()
			transition.next()
		}
	},
  methods: {
    change: function (value) {
      this.sex = value == '男' ? '1' : '0'
    },
	  edit: function () {
		  var _self = this
		  this.$dispatch('loading')
		  this.alterChildInfoQuery(this.id,this.nickname,this.sex,this.birthday).then(function () {
			  _self.$dispatch('loading')
			  _self.$dispatch('success', '修改成功')
			  window.history.back()
		  },function (err) {
			  _self.$dispatch('loading')
			  _self.$dispatch('error', err)
		  })
	  },
	  save: function(){
		  var _self = this
		  this.$dispatch('loading')
		  this.childUpdateQuery(this.nickname, this.sex, this.birthday).then(function () {
			  _self.$dispatch('loading')
			  _self.$dispatch('success', '新增成功')
			  window.history.back()
		  }, function (err) {
			  _self.$dispatch('loading')
			  _self.$dispatch('error', err)
		  })
	  },
    updateInfo: function () {
	    if (this.validate()){
		    this.type === 'EDIT' ?
						    this.edit():
						    this.save()
	    }
    },
    changebirth: function (value) {
      this.birthday = value
    },
    changename: function (value) {
      this.nickname = value
    },
	  cancel: function () {
		  window.history.back()
	  },
	  validate: function () {
		  if(!this.nickname){
			  this.$dispatch('error', '小名不能为空')
			  return false
		  }
		  if(!this.sex){
			  this.$dispatch('error', '请选择性别')
			  return false
		  }
		  if(!this.birthday){
			  this.$dispatch('error', '请选择出生日期')
			  return false
		  }
		  return true
	  }
	}
}
</script>