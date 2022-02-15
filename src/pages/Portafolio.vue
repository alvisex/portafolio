<template>
	<div>
		<div class="page-header page-header-small">
			<parallax class="page-header-image" style="background-image: url('img/bg6.jpg')"></parallax>
			<div class="content-center">
				<div class="container">
					<h1 class="title">Aquí es donde se ve lo bueno.</h1>
					<!--        <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
					</div>-->
				</div>
			</div>
		</div>
		<div class="section section-about-us">
			<div class="container">
				<div class="row">
					<div class="col-md-8 ml-auto mr-auto text-center">
						<h2 class="title">Un vistazo a los trabajos realizados</h2>
						<!-- <h5 class="description">mmmm</h5> -->
					</div>
				</div>
				<div class="separator separator-primary"></div>
				<div class="section">
					<div v-for="(p,index) in proyectos" :key="p.keyname" class="row portafolio-i">
						<div
							class="col-md-7"
							:class="(index %2 == 0)? 'order-last':''"
							data-sal="zoom-out"
							data-sal-duration="750"
							data-sal-delay="550"
						>
							<img :src="p.img" alt />
						</div>
						<div
							class="col-md-5"
							:class="(index %2 == 0)? 'text-right':''"
							data-sal="zoom-out"
							data-sal-duration="750"
							data-sal-delay="200"
						>
							<h3 class="mb-1">{{p.titulo}}</h3>
							<strong>{{p.tipo}}</strong>
							<p class="mt-3">{{p.desc}}</p>
							<router-link
								class="btn btn-primary"
								:to="{name: 'proyecto', params:{keyname: p.keyname} }"
							>Ver Proyecto</router-link>
						</div>
					</div>
				</div>
				<div class="section text-right">
					<h4>...y los que están por venir.</h4>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";

import sal from "sal.js";

export default {
	name: "Portafolio",
	bodyClass: "landing-page",
	components: {
		[Button.name]: Button,
		[FormGroupInput.name]: FormGroupInput
	},
	data() {
		return {
			proyectos: []
		};
	},
	created() {
		fetch("/data/proyectos.json")
			.then(response => response.json())
			.then(data => {
				// console.log(data);
				this.proyectos = data;
			})
			.catch(err => console.error(err));
	},
	mounted() {
		setTimeout(()=>{
			sal({
					threshold: 0.5,
					once: true
				});
		},500)
	}
};
</script>
<style>
.portafolio-i {
	margin: 4em 0;
	padding: 3em 0.5em;
}
</style>
