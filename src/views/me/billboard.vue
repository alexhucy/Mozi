<template>
	<div class="mz-billboard mz-item">
		<div class="mz-billboard-top-1">
			<i class="mz-billboard-rank">NO.1</i>
			<div class="mz-billboard-avatar">
					<img src="/images/crown.png" class="mz-billboard-top-1-crown">
					<img src="http://static.youku.com/user/img/avatar/310/39.jpg" class="mz-billboard-img-avatar">
				  <div class="mz-billboard-top-1-decorate">
					  sunShine
				  </div>
			</div>
		</div>

		<div class="mz-billboard-item mz-item-odds">
			<span class="mz-billboard-item-rank-number">NO.2</span>
			<img src="http://static.youku.com/user/img/avatar/310/39.jpg" class="mz-billboard-img-avatar">
			<div>
				<p class="mz-billboard-name">张三v4</p>
				<p class="mz-billboard-point">积分:23000</p>
			</div>
		</div>

		<div class="mz-billboard-item mz-item-even">
			<span class="mz-billboard-item-rank-number">NO.3</span>
			<img src="http://static.youku.com/user/img/avatar/310/39.jpg" class="mz-billboard-img-avatar">
			<div>
				<p class="mz-billboard-name">张三v4</p>
				<p class="mz-billboard-point">积分:23000</p>
			</div>
		</div>
	</div>
</template>

<style>
.mz-billboard-top-1{
	height: 133px;
	background: #72e4dc;
	color: #fff;
	display: flex;
	align-items: center;
	justify-items: center;
	justify-content: center;
}
.mz-billboard-rank{
	position: absolute;
	top:57px;
	left: 0;
	width: 68px;
	height: 20px;
	background: #fc8087;
	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;
	font-style: normal;
	font-size: 1.6rem;
	line-height: 20px;
	text-align: center;
}
.mz-billboard-top-1 .mz-billboard-img-avatar{
	height: 60px;
	width: 60px;
	border-radius: 50%;
}
.mz-billboard-item{
	height:60px;
	display: flex;
	align-items: center;
}
.mz-billboard-item .mz-billboard-img-avatar{
	height: 50px;
	width: 50px;
	border-radius: 50%;
	margin: 0 20px 0 0;
}
.mz-item-odds{
	background: #fff7e6;
}
.mz-item-even{
	background: #fffcf5;
}
.mz-billboard-name{
	color:#333;
	font-size: 1.6rem;
}
.mz-billboard-point{
	color:#6cd9d1;
	font-size:1.4rem;
}
.mz-billboard-item-rank-number{
	color: #ffba27;
	font-size: 2.4rem;
	margin: 0 31px 0 16px;
}
.mz-billboard-avatar{
	position: relative;
}
.mz-billboard-top-1-crown{
	position: absolute;
	width: 44px;
	top:-15px;
	left:50%;
	margin-left: -22px;
}
.mz-billboard-top-1-decorate{
	width: 152px;
	height: 40px;
	background-image: url("/images/decorate.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: 50%;
	margin-left: -77px;
	bottom: -6px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
</style>

<script>
export default{

}
</script>