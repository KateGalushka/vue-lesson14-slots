<template>
	<div class="wrapper">
		<nav>
	        <router-link to="/">Головна</router-link> |
	        <router-link :to="{ name: 'products' }">Товари</router-link> |
	        <router-link :to="{ name: 'distributors' }">Постачальники</router-link> |
	        <router-link :to="{ name: 'contacts' }">Контакти</router-link> |
	        <router-link :to="{ name: 'shopping-rules' }">Правила купівлі</router-link>
	    </nav>
		<slot name="title">
			<h1>Вітаємо!</h1>
		</slot>
		<slot name="catalog"></slot>
		<footer>
			<slot name="footer-left">
				<div>Рейтинг магазину: 54449</div>
			</slot>
			<slot name="footer-right">
				<div>Статус: <span style="color:green">відкрито</span></div>

			</slot>
		</footer>

	</div>
</template>

<script>
	export default {
		name: 'CatalogMasterpage'
	}
</script>

<style lang="scss" scoped>

footer{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 50px;
	padding: 15px;
}

</style>