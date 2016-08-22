<template>
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
		<panel :list="list"></panel>
		<card-center @click="updateInfo" v-link="{name: 'update'}"></card-center>
	</group>

</template>

<style>

</style>

<script>
import Group from '../../../node_modules/vux/dist/components/group/index'
import GroupTitle from '../../components/group/group-title.vue'
import Cell from '../../../node_modules/vux/dist/components/cell/index'
import Panel from '../../../node_modules/vux/dist/components/panel/index'
import CardCenter from '../../components/card/cardCenterContent.vue'
import {getUserInfo,getChildInfo} from '../../vuex/getters/userGetter'

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
		CardCenter
	},
	vuex: {
		getters: {
			user: getUserInfo,
			child: getChildInfo
		}
	},
	ready: function () {
		this.list = this.child
	},
	methods: {
		updateInfo: function () {

		}
	}
}
</script>