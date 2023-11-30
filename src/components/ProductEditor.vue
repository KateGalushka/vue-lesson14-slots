<template>
	<div class="editor">
		<h3>Додавання нового товару</h3>
		<label>
			Введіть назву:
			<input v-model="product.title" type="text">
		</label>
		<label>
			Введіть ціну:
			<input v-model="product.price" type="number">
		</label>
		<button @click="onAddProduct(product)">Додати</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';


	export default {
		name: 'ProductEditor',
		data() {
			return {
				product: {}
			}
		},
		methods: {
			...mapActions(['onAddProduct']) 
		},
	}
</script>

<style lang="scss" scoped>
.editor{
	display: flex;
	flex-direction: column;
	width: 300px;
	align-items: center;
	gap: 5px;
	padding: 10px;
	border: 2px solid green;
	border-radius: 10px;
	margin: 20px auto;
	
}

</style>