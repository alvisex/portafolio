<template>
	<div id="app">
		<router-view name="header" />
		<div class="wrapper">
			<fade-transition origin="center" mode="out-in" :duration="270">
				<router-view />
			</fade-transition>
		</div>
		<router-view name="footer" />
	</div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
export default {
	components: {
		FadeTransition
	}
};
</script>
