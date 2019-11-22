<template>
	<div>
		<div class="page-header clear-filter" filter-color="blue">
			<parallax class="page-header-image" style="background-image:url('/img/header.jpg')"></parallax>
			<div class="container">
				<div class="content-center brand">
					<!-- <img class="n-logo" src="img/now-logo.png" alt /> -->
					<h1 class="h1-seo">{{ p.titulo }}</h1>
					<h3>{{p.tipo}}</h3>
				</div>
			</div>
		</div>
		<div class="main">
			<div class="section section-images">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="hero-images-container">
								<img :src="p.img" alt />
							</div>
							<!-- <div class="hero-images-container-1">
								<img src="/img/hero-image-2.png" alt />
							</div>
							<div class="hero-images-container-2">
								<img src="/img/hero-image-3.png" alt />
							</div>-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="container">
				<div class="row justify-content-md-end text-right">
					<div class="col-md-7">
						<h2 class="title">¿Qué es?</h2>
						<p class="description">{{p.desc}}</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-7">
						<h2 class="title">Tenologías implementadas</h2>
						<ul>
							<li v-for=" t in p.tecnologias" :key="t">{{ t }}</li>
						</ul>
					</div>
				</div>
				<div class="row" v-if="p.notas">
					<div class="col-md-9">
						<h2 class="title">Notas destacadas</h2>
						<p v-for="n in p.notas" :key="n" class="description">{{n}}</p>
					</div>
				</div>
			</div>
		</div>
		<div
			class="section section-signup text-center"
			style="background-image: url('/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 600px; "
		>
			<template v-if="!p.privado">
				<a :href="p.url" class="btn btn-primary btn-lg" target="_blank">Ir al sitio</a>
			</template>
			<template v-if="p.privado">
				<a
					href="#"
					class="btn btn-primary btn-lg disabled"
					target="_blank"
				>Lo siento, este proyecto es privado</a>
			</template>
		</div>
		<!-- <examples-section></examples-section> -->
	</div>
</template>
<script>
import { Parallax } from "@/components";
import SignupForm from "./components/SignupForm";

export default {
	name: "index",
	bodyClass: "index-page",
	components: {
		Parallax,
		SignupForm
	},
	data() {
		return {
			//p: { privado: false, tecnologias: ["wer", "werrer", "erwerw"] },
			proyectos: []
		};
	},
	computed: {
		id() {
			return this.$route.params.id;
		},
		p() {
			return this.proyectos.find(i => i.id == this.id);
		}
	},
	created() {
		fetch("/data/proyectos.json")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.proyectos = data;
			})
			.catch(err => console.error(err));
	}
};
</script>
<style>
.section-images {
	height: 220px;
}
</style>
