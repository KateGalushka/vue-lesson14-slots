<template>
	<div class="wrapper">
		<!-- <router-view name="filters"/> -->
		<router-view/>
		<!-- <router-view name="editor"/> -->
	</div>
    
</template>

<style lang="scss">
#app {
		 font-family: Avenir, Helvetica, Arial, sans-serif;
		 -webkit-font-smoothing: antialiased;
		 -moz-osx-font-smoothing: grayscale;
		//  text-align: center;
		 color: #2c3e50;
	}
.wrapper{
	min-width: 50vw;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.card-container{
	display: flex;
	flex-wrap: wrap;
	gap:20px;
	margin: 15px auto;

}
nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

</style>
