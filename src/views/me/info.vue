<template>
	<scroller lock-x height="auto" style="position:relative;right:0px;left:0px;">
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
	<group>
		<group-title type="glass">孩子信息</group-title>
		<card-center type="2" v-for="item in child" :nickname="item.nickname" :birth="item.birthday" :id="item.id" :gender="item.gender" :avatar="avatar"></card-center>
		<card-center v-link="{name: 'update'}"></card-center>
	</group>
	</scroller>
</template>

<style>
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

export default{
	data: function () {
		return {
			list: []
		}
	},
	components: {
		GroupTitle,
		Group,
		Cell,
		Panel,
		CardCenter,
		Scroller
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
		this.childInfoQuery()
	},
	methods: {
		updateInfo: function () {

		}
	},
	events: {
		update: function () {
			this.childInfoQuery()
		}
	}
}
</script>