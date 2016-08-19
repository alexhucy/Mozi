<template>
	<div class="mz-box-upload mz-wrap mz-container">
		<textarea placeholder="这一刻的想法..."></textarea>
		<div class="mz-flex">
			<i class="mz-icon mz-icon-add"></i>

			<div style="flex: 1;margin-left: 10px">
				<span style="color:#eca409;font-size: 1.6rem">上传图证</span>
				<p>每位用户每次打卡限制上传一张图片</p>
			</div>

		</div>
	</div>

	<div style="margin-top: 30px">
		<m-button type="success" large>确认</m-button>
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

export default{
	components: {
		mButton
	}
}
</script>