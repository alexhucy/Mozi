<template>
    <div>
		<group>
			<cell title="头像">
				<div slot="value">
					<img :src="avatar || 'http://static.youku.com/user/img/avatar/310/39.jpg' " @click="updateHeadImg" width="33">
				</div>
			</cell>
		</group>

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
    </div>
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
import Cell from '../../../node_modules/vux/dist/components/cell/index'
import {childUpdateQuery,alterChildInfoQuery,removeChildInfo} from '../../vuex/actions/userAction'
import popup from '../../../node_modules/vux/dist/components/popup/index'
import {getEditChildInfo,getOpreationStatus} from '../../vuex/getters/userGetter'
import timestamp2date from '../../filter/timestamp2date'
import activity from '../../service/activityService'

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
	    avatar: this.child.avatar
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
		  this.alterChildInfoQuery(this.id,this.nickname, this.sex, this.birthday, this.avatar).then(function () {
			  _self.$dispatch('loading')
			  _self.$dispatch('success', '修改成功')
			  window.history.back()
		  },function (err) {
			  _self.$dispatch('loading')
			  if(err.status === 400){
				  _self.$dispatch('error',err.data.error_message)
			  }
			  else if(err.status === 0){
				  _self.$dispatch('error','请求超时请重试')
			  }
			  else{
				  _self.$dispatch('error','内容错误请重试')
			  }
		  })
	  },
	  save: function(){
		  var _self = this
		  this.$dispatch('loading')
		  this.childUpdateQuery(this.nickname, this.sex, this.birthday, this.avatar).then(function () {
			  _self.$dispatch('loading')
			  _self.$dispatch('success', '新增成功')
			  window.history.back()
		  }, function (err) {
			  _self.$dispatch('loading')
			  if(err.status === 400){
				  _self.$dispatch('error',err.data.error_message)
			  }
			  else if(err.status === 0){
				  _self.$dispatch('error','请求超时请重试')
			  }
			  else{
				  _self.$dispatch('error','内容错误请重试')
			  }
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
	  },
	  updateHeadImg: function () {
		  var _self = this
		  window.wx.chooseImage({
			  count: 1, // 默认9
			  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			  success: function (res) {
				  var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
				  window.wx.uploadImage({
					  localId: localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
					  isShowProgressTips: 1, // 默认为1，显示进度提示
					  success: function (res) {
						  var serverId = res.serverId; // 返回图片的服务器端ID
						  activity.getUrlByServerId(serverId.toString()).then(function (data) {
							  if(data.data.state == '10000'){
								  _self.$dispatch('success','图片上传成功')
								  _self.avatar = data.data.url
							  }
							  else{
								  _self.$dispatch('error',data.data.message)
							  }
						  })
					  },

				  });
			  }
		  });
	  }
  }
}
</script>