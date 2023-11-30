<template>
	<info-masterpage>
		<div>
			<h2>
				Правила купівлі
			</h2>
			<ul>
				<li>Купуємо багато</li>
				<li>Платимо швидко</li>
				<li>Насолоджуємось покупками</li>
			</ul>
		</div>
	</info-masterpage>
</template>

<script>
import InfoMasterpage from '../masterpages/InfoMasterpage.vue'

export default {
	name: 'ShoppingRulesView',

	components: {
		InfoMasterpage,
	},
}
</script>
