<template>
	<div class="wrapper">
		<nav>
			<router-link to="/">На головну</router-link>
		</nav>
		<slot></slot>

		<footer>
			<h3>Галерея</h3>
			<div class="gallery">
				<img src="../assets/1.jpg">
				<img src="../assets/2.jpg">
				<img src="../assets/3.jpg">
				<img src="../assets/4.jpg">
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
// .wrapper{
// 	min-height: 75vh;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// }
.gallery{
	display: flex;
	width: 100%;
	gap: 20px;
	img{
		width: 200px;
	}
}

</style>