<template>
	<catalog-masterpage>
		<template #title>
			<h2>Оберіть постачальника</h2>
		</template>
		<template #catalog>
			<div class="card-container">
					<card-component v-for="distr in distrList" :key="distr.id">
						<template #image>
							<img class="card__img" :src="distr.img" alt="">
						</template>
						<template #title>
							{{ distr.title }}
						</template>
						<template #info>
							<div>
								<img :src="distr.logo1"> <img :src="distr.logo2">
							</div>
						</template>
					</card-component>
				</div>
		</template>
		<template #footer-left>
			<div>Найбільш популярний: <span style="color:green">Економ</span></div>
		</template>
	</catalog-masterpage>
</template>

<script>
import CatalogMasterpage from '@/masterpages/CatalogMasterpage.vue';
import CardComponent from '@/components/CardComponent.vue';
import { distr } from '../data/data'

export default {
	name: 'DistributorsView',
	components: {
		CatalogMasterpage, CardComponent
	},
	data() {
		return {
			distrList: distr
		}
	},
}
</script>

<style lang="scss" scoped>
.card__img{
	width: 200px;
	height: 200px;
}
</style>