<template>
	<catalog-masterpage>
		<template #catalog>
			<div>
				Сподіваюсь, Ви не будете чемними і обов'язково щось купите!
			</div>
		</template>

		<template #footer-right>
			<div>
				<span>Власник: Баба Галя</span>
				<img class="footer__img" src="../assets/2.jpg" alt="baba Galya">
			</div>
			
		</template>

	</catalog-masterpage>
</template>

<script>
import CatalogMasterpage from '@/masterpages/CatalogMasterpage.vue';

export default {
    name: 'HomeView',
    components: {
		CatalogMasterpage
    },
}
</script>
<style lang="scss" scoped>
.footer__img{
	width:100px;
}

</style>
