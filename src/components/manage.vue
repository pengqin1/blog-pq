<template>
	<div v-loading.fullscreen="fullscreenLoading">
		<top-nav></top-nav>
		<left-nav></left-nav>
        <div class="content-main">
  		    <router-view></router-view>
        </div>
	</div>
</template>

<script>
    import top from './topNav.vue'
	import left from './leftNav.vue'
    import nav from 'static/js/nav.js'
    // import dictService from 'services/dictService'
   
    export default {
        created: function() {
            // this.$store.dispatch('updateDictData');   // 获取字典数据
        },
        computed: {
            fullscreenLoading() {
                return this.$store.state.config.fullscreenLoading;
            }
        },
        components: {
            'top-nav': top,
            'left-nav': left
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    body{
        background-color: #fff;
        min-width: 1200px;
    }
</style>
