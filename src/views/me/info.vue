<template>
	<scroller v-ref:scroller lock-x height="auto" style="position:absolute;right:0px;left:0px;">
		<!--个人信息 start-->
		<group style="margin: 0">
			<group-title type="success">个人信息</group-title>
			<cell title="头像">
				<div slot="value">
					<img :src="user.headImgUrl" width="33">
				</div>
			</cell>
			<cell title="昵称" is-link :value="user.nickname"></cell>
			<cell title="性别" is-link></cell>
			<cell title="居住地" is-link></cell>
			<cell title="手机号" is-link></cell>
		</group>
		<!--个人信息 end-->

		<!--孩子信息 start-->
		<group>
			<group-title type="glass">孩子信息</group-title>

			<card-center type="2" v-for="item in child"
			             :nickname="item.nickname"
			             :birthday="item.birthday"
			             :id="item.id"
			             :gender="item.gender"
			             :avatar="avatar"
			             @on-edit="edit(item.id,item.nickname,item.birthday,item.gender)"
			             @on-success="success"
									 @on-error="error"
			             @on-loading="loading"
									 @on-confirm="confirm">
			</card-center>

			<div class="mz-center" @click="add">
				<div  class="mz-icon mz-icon-addChild mz-text-center">添加孩子信息</div>
			</div>
		</group>
		<!--孩子信息 end-->
	</scroller>

	<!--添加孩子信息界面 start-->
	<upload v-ref:upload
	        :show-pop.sync="showPOP"
					@on-success="success"
					@on-error="error"
					@on-loading="loading">
	</upload>
	<!--Tina 家孩子信息界面 end-->

	<tips v-ref:tips></tips>
</template>

<style>
.mz-center{
	margin:15px;
	padding:5px;
	border:1px solid #b0d160;
}

</style>

<script>
import Group from '../../../node_modules/vux/dist/components/group/index'
import GroupTitle from '../../components/group/group-title.vue'
import Cell from '../../../node_modules/vux/dist/components/cell/index'
import Panel from '../../../node_modules/vux/dist/components/panel/index'
import CardCenter from '../../components/card/cardCenterContent.vue'
import Scroller from '../../../node_modules/vux/dist/components/scroller/index'
import {getUserInfo,getChildInfo} from '../../vuex/getters/userGetter'
import {childInfoQuery} from '../../vuex/actions/userAction'
import upload from '../../components/Dialog/UpdateChildInfo.vue'
import tips from '../../components/tips/tips.vue'

export default{
	data: function () {
		return {
			showPOP: false
		}
	},
	components: {
		GroupTitle,
		Group,
		Cell,
		Panel,
		CardCenter,
		Scroller,
		upload,
		tips
	},
	vuex: {
		getters: {
			user: getUserInfo,
			child: getChildInfo
		},
		actions: {
			childInfoQuery
		}
	},
	ready: function () {
		this.$refs.tips.setTitle('个人信息')
		this.childInfoQuery()
	},
	methods: {
		add: function () {
			this.$refs.upload.type = 'SAVE'
			this.showPOP = true
		},
		edit: function (id, nickname, birthday, sex) {
			this.$refs.upload.id = id
			this.$refs.upload.nickname = nickname
			this.$refs.upload.birthdayValue = birthday
			this.$refs.upload.sexValue = sex === 'female'? '女': '男'
			this.$refs.upload.type = 'EDIT'
			this.showPOP = true
		},
		success: function (message) {
			this.$refs.tips.toggleToast(message)
		},
		error: function (err) {
			this.$refs.tips.toggleAlert(err)
		},
		loading: function () {
			this.$refs.tips.toggleLoading()
		},
		confirm: function (message, callback) {
			this.$refs.tips.toggleConfirm(message, callback)

		}
	}
}
</script>