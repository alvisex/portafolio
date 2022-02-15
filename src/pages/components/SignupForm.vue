<template>
	<div
		class="section section-signup"
		style="background-image: url('/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
	>
		<div class="container">
			<h2 class="text-center">Tecnologías con las que trabajo</h2>
			<div class="row">
				<div v-for="t in tecnologias" class="col-3">
					<card header-classes="text-center" class="py-3 shadow">
						<template slot="header">
							<h5>{{t.name}}</h5>
							<div class="social-line">
								<img :src="t.img" height="100px" alt="una imagen bonita" />
							</div>
						</template>
					</card>
				</div>
			</div>
			<!-- <div class="col text-center">
				<router-link to="/login" class="btn btn-simple btn-round btn-white btn-lg">View Login Page</router-link>
			</div>-->
		</div>
	</div>
</template>
<script>
import { Card, Button } from "@/components";

export default {
	components: {
		Card,
		[Button.name]: Button
	},
	data() {
		return {
			tecnologias: [
				{ name: "Vue.js", img: "/img/iconos/vuejs.png" },
				{ name: "Nuxt.js", img: "/img/iconos/nuxt.png" },
				{ name: "Strapi", img: "/img/iconos/strapi.png" },
				{ name: "Docker", img: "/img/iconos/docker.png" },
				{ name: "Javascript ES6+", img: "/img/iconos/js.png" },
				{ name: "Concourse", img: "/img/iconos/concourse.png" },
				{ name: "GraphQL", img: "/img/iconos/graphql.png" },
				{ name: "Webpack", img: "/img/iconos/webpack.png" },
				{ name: "Node.js", img: "/img/iconos/nodejs.png" },
				{ name: "Laravel", img: "/img/iconos/laravell.png" },
				{ name: "Gulp", img: "/img/iconos/gulp.png" },
			
				{ name: "MongoDB", img: "/img/iconos/mongodb.png" }
			]
		};
	}
};
</script>
<style lang="scss">
.social-line{
	img{ object-fit: contain;}
	
}
</style>
