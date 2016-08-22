<template>
	<div class="mz-box-upload mz-wrap mz-container">
		<textarea placeholder="这一刻的想法..." v-model="content"></textarea>
		<div class="mz-flex">
			<i class="mz-icon mz-icon-add"  @click="upload"></i>

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

export default{
	data: function () {
		return {
			content: ''
		}
	},
	components: {
		mButton
	},
	route: {
		data ({to: { params: { id }}}){
			this.id = id;
		}
	},
	methods: {
		upload: function () {
			wx.chooseImage({
				count: 1, // 默认9
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: function (res) {
					var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
				}
			});
		},

		submit: function () {
			activity.sign(this.id, '',this.content).then(function () {

			}).catch(

			)
		}
	}
}
</script>