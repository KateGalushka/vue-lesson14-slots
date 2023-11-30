<template>
	<div class="filters">
		<h3>Фільтри</h3>
		<label>
			Назва товару
			<input v-model="filterTitle" type="text">
			<button @click="onClearFilter">X</button>
		</label>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

	export default {
		name: 'FiltersComponent',

		data() {
			return {
				productTitleFilter: null
			}
		},
		computed: {
			filterTitle: {
				get() {
					return this.productTitleFilter;
				},
				set(newVal) {
					this.updateFilterTitle(newVal)
				}
			}
		},
		methods: {
			...mapActions(['updateFilterTitle']),
			
			onClearFilter(){
				this.filterTitle = null;
			}
		},
	}
</script>

<style lang="scss" scoped>
.filters{
	border: 2px solid green;
	border-radius: 10px;
	margin: 20px auto;
	padding: 10px;
	
}

</style>