<template>
	<popup :show.sync="showPOP" height="100%">
		<div class="mz-box-upload mz-wrap mz-container">
			<textarea contenteditable="true" placeholder="这一刻的想法..." v-model="content"></textarea>
			<div class="mz-flex">
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
	</popup>

	<loading :show="showLoading" text="提交中"></loading>

	<toast :show.sync="showToast" :type="type">{{message}}</toast>
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
import toast from '../../../node_modules/vux/dist/components/toast/index'
import Popup from '../../../node_modules/vux/dist/components/popup/index'

export default{
	data: function () {
		return {
			content: '',
			showLoading: false,
			url: '',
			showToast: false,
			previewImg: '',
			message: '',
			type: ''
		}
	},
	components: {
		mButton,
		loading,
		toast,
		Popup
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
									_self.message = '图片上传成功'
									_self.showToast = true
									_self.previewImg = _self.url
								}
								else{
									_self.message = '图片上传失败'
									_self.showToast = true
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
				_self.message = '请先上传图片'
				_self.type = 'text'
				_self.showToast = true
				return false
			}
			else if(this. content.length <= 0){
				_self.message = '留言内容不能为空'
				_self.type = 'text'
				_self.showToast = true
				return false
			}
			this.showLoading = true
			activity.sign(this.id, this.url,this.content).then(function () {
				_self.showLoading = false
				_self.showToast = true
				_self.message = '打卡成功'
				_self.$emit('on-success')
				_self.showPOP = false
			}, function (err) {
				_self.showLoading = false
				_self.showToast = true
				_self.type = 'warn'
				_self.message = '打卡失败'
			})
		}
	}
}
</script>