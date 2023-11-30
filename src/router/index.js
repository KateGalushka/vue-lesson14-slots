import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import ShoppingRulesView from '../views/ShoppingRulesView.vue'
import ProductsView from '../views/ProductsView.vue'
import FiltersComponent from '../components/FiltersComponent.vue'
import ProductEditor from '../components/ProductEditor.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsView,
		  children: [
				{
					path: 'selector',
					name: 'productsWithFilters',
					components:{
						default: ProductsView,
						filters: FiltersComponent
					}
				},
				{
					path: 'editor',
					name:'product-editor',
					components:{
						default: ProductsView,
						editor: ProductEditor
					}
				},
		  ]
    },
	
    {
        path: '/distributors',
		  name: 'distributors',
        component: ()=>import('../views/DistributorsView'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView
    },
    {
        path: '/shopping-rules',
		  name: 'shopping-rules',
		  component: ShoppingRulesView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
