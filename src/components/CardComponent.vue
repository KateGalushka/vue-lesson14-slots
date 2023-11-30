<template>
	<div class="card">
		<slot name="image">
			<img class="card__img" src="../assets/Untitled.png" alt="image">
		</slot>
		<div class="card__title">
			<slot name="title"></slot>
		</div>
		<div class="card__info">
			<slot name="info"></slot>
		</div>
		<button>Купити</button>
	</div>
</template>

<script>
	export default {
		name: 'CardComponent'
	}
</script>

<style lang="scss" scoped>
.card{
	width: 14.75rem;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 2px solid green;
	border-radius: 10px;
	button{
		padding: 5px 10px;
		margin-top: 15px;
	}
}
.card__img{
	width: 200px;
	height: 200px;
}
.card__title, .card__info{
	font-size: 1.125rem;
	font-weight: 600;
	padding-top: 15px;
}
</style>