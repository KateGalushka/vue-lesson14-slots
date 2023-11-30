<template>
	<catalog-masterpage>
		<template #title>
			<h2>Оберіть продукти</h2>
			<router-link :to="{name:'productsWithFilters'}">Фільтр товарів</router-link>
		</template>

		<template #catalog>
			<router-view name="filters"></router-view>

			<div class="card-container">
				<card-component v-for="product in getFilteredProductsList" :key="product.id">
					<template #image>
						<img class="card__img" :src="(product.img)? product.img : defaultImg" alt="">
					</template>
					<template #title>
						{{ product.title }}
					</template>
					<template #info>
						{{ product.price }} грн.
					</template>
				</card-component>
			</div>

			<router-link :to="{ name: 'product-editor' }">Додати новий товар</router-link>
			<router-view name="editor"></router-view>
		</template>
	</catalog-masterpage>
</template>

<script>
import CatalogMasterpage from '@/masterpages/CatalogMasterpage.vue';
import CardComponent from '@/components/CardComponent.vue';
import {products} from '../data/data'
import { mapGetters, mapActions } from 'vuex';


	export default {
		name: 'ProductsView',

		components: {
			CatalogMasterpage, CardComponent
		},
		
		data() {
			return {
				defaultImg: require('@/assets/Untitled.png')
			}
		},
		computed: {
			...mapGetters(['getProductsList', 'getFilteredProductsList']),
		},
		created() {
			this.setProductsList(products);
		},
		methods: {
			...mapActions(['setProductsList']) 
		}
		
	}
</script>

<style lang="scss" scoped>
.card__img{
	width: 200px;
	height: 200px;
}

</style>