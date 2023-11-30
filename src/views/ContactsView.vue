<template>
	<info-masterpage>
		<div>
			<h2>
				Наші контакти
			</h2>
			<div>
				<p>Адреса магазину: біля будинку баби Галі</p>
				<p>Менеджер: дід Петро</p>
				<p>Заступник: онука Софійка</p>
			</div>
		</div>
	</info-masterpage>
   
</template>

<script>
import InfoMasterpage from '../masterpages/InfoMasterpage.vue'


export default {
	name: 'ContactsView',

	components: {
		InfoMasterpage,
	},
}
</script>
