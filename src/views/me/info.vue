<template>
	<scroller v-ref:scroller lock-x height="auto" style="position:absolute;right:0px;left:0px;">
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

			<card-center type="2" v-for="item in child"
			             :nickname="item.nickname"
			             :birth="item.birthday"
			             :id="item.id"
			             :gender="item.gender"
			             :avatar="avatar">
			</card-center>

			<card-center @On-add="add"></card-center>

		</group>

	</scroller>

	<upload :show-pop.sync="showPOP"></upload>
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
import upload from '../../components/Dialog/UpdateChildInfo.vue'

export default{
	data: function () {
		return {
			list: [],
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
		upload
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
	events: {
		update: function () {
			this.childInfoQuery().then(function () {

			})
		}
	},
	methods: {
		add: function () {
			this.showPOP = true
		}
	},
	watch: {
		child: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		}
	}
}
</script>