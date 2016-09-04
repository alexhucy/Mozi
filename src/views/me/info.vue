<template>
	<scroller v-ref:scroller lock-x>
		<div style="padding-bottom: 30px">
			<!--个人信息 start-->
			<group style="margin: 0">

				<group-title type="success">个人信息</group-title>

				<cell title="头像">

					<div slot="value">
						<img :src="user.user_avatar" @click="updateHeadImg" width="33">
					</div>

				</cell>

				<cell title="昵称" is-link
					  :value="user.user_name"
					  v-link="{name:'userUpdate',query: {title:'昵称',value: user.user_name,type: '1'}}">

				</cell>

				<cell title="性别"
					  is-link
					  :value="user.sex == 1 ? '男' : '女'"
					  v-link="{name:'userUpdate', query: {title: '性别', value: user.sex,type: '2'}}">

				</cell>

				<cell title="居住地"
					  is-link
					  :value="user.address"
					  v-link="{name: 'userUpdate', query: {title: '居住地', value: user.address,type: '3'}}">

				</cell>

			</group>
			<!--个人信息 end-->

			<!--孩子信息 start-->
			<group>

				<group-title type="glass">孩子信息</group-title>

				<loader v-ref:loader
				        @on-refresh="query">
				</loader>

				<card-center type="2" v-for="item in items"
				             :nickname="item.nickname"
				             :birthday="item.birthday"
				             :id="item.id"
				             :gender="item.gender"
				             :avatar="item.avatar"
				             @on-edit="edit(item)">
				</card-center>

				<div class="mz-center mz-text-center" @click="add">
					<div  class="mz-icon mz-icon-addChild mz-text-center">添加孩子信息</div>
				</div>
			</group>
			<!--孩子信息 end-->
		</div>
	</scroller>
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
import {getUserUpInfo, getChildInfo} from '../../vuex/getters/userGetter'
import {childInfoQuery,setChildInfo, alterUserInfoFirstQuery} from '../../vuex/actions/userAction'
import upload from '../../components/Dialog/UpdateChildInfo.vue'
import loader from '../../components/load/loading.vue'
import activity from '../../service/activityService'

export default{
	data: function () {
		return {
			list: [],
			ac: ['江苏省','苏州市','吴中区'],
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
		loader
	},
	vuex: {
		getters: {
			user: getUserUpInfo,
			items: getChildInfo
		},
		actions: {
			childInfoQuery,
			setChildInfo,
			alterUserInfoFirstQuery
		}
	},
	ready: function () {
		if(this.items.length === 0){
			this.query()
		}
	},
	methods: {
		add: function () {
			this.$router.go({name: 'update'})
		},
		edit: function (child) {
			this.setChildInfo(child)
			this.$router.go({name: 'update'})
		},
		query: function () {
			var _self = this
			this.$refs.loader.OnLoading()
			this.childInfoQuery().then(function () {
				if(_self.items.length === 0){
					_self.$refs.loader.OnEmpty()
				}
				else{
					_self.$refs.loader.OnHide()
				}
			}).catch(function () {
				_self.$refs.loader.OnError()
			})
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
									_self.updaeUserInfo(data.data.url)
								}
								else{
									_self.$dispatch('error',data.data.message)
								}
							})
						},

					});
				}
			});
		},

		updaeUserInfo: function (url) {
			this.$dispatch('loading')
			var _self = this
			this.alterUserInfoFirstQuery({headImgUrl : url}).then(function () {
				_self.$dispatch('loading')
				_self.$dispatch('success','修改头像成功')
			}).catch(function () {
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
		}
	},
	watch: {
		items: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		}
	}
}
</script>