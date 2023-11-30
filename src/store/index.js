import { createStore } from 'vuex'

export default createStore({
    state: {
		productsList:[],
		distributorsList:[],
		filterTitle: null

	 },
    getters: {
		 getProductsList: ({ productsList }) => productsList,
		 getDistributorsList: ({ distributorsList }) => distributorsList,
		 getFilteredProductsList: ({ productsList, filterTitle })=>{
			if (filterTitle) {
				let arr = productsList.filter(product => product.title.toLowerCase().includes(filterTitle.toLowerCase()));
				return arr;
			} else return productsList;
		}
	 },
    mutations: {
		 loadProductsList(state, data){
			state.productsList = data
		 },
		 updateFilterTitle(state, val){
			state.filterTitle = val
		 },
		 addProduct(state, product){
			state.productsList.push(product)
		 }
	 },
    actions: {
		setProductsList({commit}, data){
			 commit('loadProductsList', data)
		},
		updateFilterTitle({commit}, newVal){
			commit('updateFilterTitle', newVal);
		},
		 onAddProduct({commit}, productObj){
			commit('addProduct', {
				id: new Date().getTime(),
				...productObj
			})
		 }
	 },
    modules: {},
})
