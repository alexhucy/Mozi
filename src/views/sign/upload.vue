<template>
		<div class="mz-box-upload mz-wrap">

				<x-textarea :max="200" placeholder="这一刻的想法..." :value.sync="content"></x-textarea>
			<!--<textarea contenteditable="true" placeholder="这一刻的想法..." v-model="content"></textarea>-->
			<div class="mz-flex" style="padding: 0 12px">
				<i class="mz-icon mz-icon-add"  @click="upload"></i>
				<img :src="previewImg" v-if="previewImg" class="mz-preview-img">
				<div style="flex: 1;margin-left: 10px">
					<span style="color:#eca409;font-size: 1.6rem">上传图证</span>
					<p>每位用户每次打卡限制上传一张图片</p>
				</div>

			</div>
		</div>

		<div style="margin-top: 30px">
			<m-button type="success" large @click="submit">确认</m-button>
		</div>

</template>

<style>
.mz-box-upload{
	background: #fff;
	border:1px solid #72e4dc;
	border-radius: 5px;
}
.mz-wrap{
	margin: 10px;
}
.mz-preview-img{
	width: 60px;
	height:60px;
}
.mz-icon-add:before{
	content: '\e910';
	font-size: 6rem;
	color: #eca409
}
textarea{
	outline: none;
	border: none;
}
.mz-box-upload textarea{
	padding-top: 10px;
	width: 100%;
	height: 200px;
	resize: none;
	font-size: 1.5rem;
}
</style>

<script>
import mButton from '../../components/button/button.vue'
import activity from '../../service/activityService'
import loading from '../../../node_modules/vux/dist/components/loading/index'
import Popup from '../../../node_modules/vux/dist/components/popup/index'
import {unshiftSigninfo} from '../../vuex/actions/activityAction'
import xTextarea from '../../../node_modules/vux/dist/components/x-textarea/index'

export default{
	data: function () {
		return {
			content: '',
			url: '',
			previewImg: '',
			message: '',
			type: ''
		}
	},
	route: {
		data ({to: { params: {id}}}){
			this.id = id
		}
	},
	vuex:{
		actions: {
			unshiftSigninfo
		}
	},
	components: {
		mButton,
		loading,
		Popup,
		xTextarea
	},
	props:{
		showPOP: {
			type: Boolean,
			default: false
		},
		id: {
			type: String
		}
	},
	methods: {
		upload: function () {
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
									_self.url = data.data.url
									_self.$dispatch('success','图片上传成功')
									_self.previewImg = _self.url
								}
								else{
									_self.message = '图片上传失败'
									_self.showToast = true
									_self.$dispatch('error',data.data.message)
								}
							})
						}
					});
				}
			});
		},

		submit: function () {
			var _self = this
			if(!this.url){
				this.$dispatch('error','请先上传图片')
				return false
			}
			else if(this. content.length <= 0){
				this.$dispatch('error','留言内容不能为空')
				return false
			}
			this.$dispatch('loading')
			activity.sign(this.id, this.url,this.content).then(function (data) {
				var info = data.data
				if(info.result === 0){
					_self.$dispatch('loading')
					_self.$dispatch('success', '打卡成功!')
					_self.unshiftSigninfo(info.info)
					window.history.back()
				}
				else{
					_self.$dispatch('loading')
					_self.$dispatch('error', '打卡失败')
				}
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
		}
	}
}
</script>