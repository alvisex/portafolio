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
				<!-- 				<div class="section-story-overview">
					<div class="row">
						<div class="col-md-6">
							<div class="image-container image-left" style="background-image: url('img/login.jpg')"></div>
						</div>
						<div class="col-md-5">
							<!-- First image on the right side, above the article ->
							<div class="image-container image-right" style="background-image: url('img/bg1.jpg')"></div>
							<h3>
								So what does the new record for the lowest level of winter ice
								actually mean
							</h3>
							<p>
								The Arctic Ocean freezes every winter and much of the sea-ice
								then thaws every summer, and that process will continue whatever
								happens with climate change. Even if the Arctic continues to be
								one of the fastest-warming regions of the world, it will always
								be plunged into bitterly cold polar dark every winter. And
								year-by-year, for all kinds of natural reasons, there’s huge
								variety of the state of the ice.
							</p>
						</div>
					</div>
				</div>-->
				<div class="section">
					<div v-for="p in proyectos" :key="p.id" class="row portafolio-i">
						<div
							class="col-md-7"
							:class="(p.id %2 == 0)? 'order-last':''"
							data-sal="zoom-out"
							data-sal-duration="750"
							data-sal-delay="550"
						>
							<img :src="p.img" alt />
						</div>
						<div
							class="col-md-5"
							:class="(p.id %2 == 0)? 'text-right':''"
							data-sal="zoom-out"
							data-sal-duration="750"
							data-sal-delay="200"
						>
							<h3 class="mb-1">{{p.titulo}}</h3>
							<strong>{{p.tipo}}</strong>
							<p class="mt-3">{{p.desc}}</p>
							<router-link
								class="btn btn-primary"
								:to="{name: 'proyecto', params:{id: p.id} }"
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
			proyectos: [
				{
					img: "/img/proyectos/plastomex.png",
					titulo: "Plastomex",
					tipo: "Sitio web - [SPA]",
					desc:
						"Sitio web de tipo Single Page Aplication (SPA) para la empresa Plastomex",
					id: 1
				},
				{
					img: "/img/proyectos/jefferson.png",
					titulo: "Intituto Jefferson Morelia",
					tipo: "Sitio web",
					desc:
						"Sitio web precompilado en Nunjucks, con alimentación de información por enlaces esxternos y JSON",
					id: 2
				},
				{
					img: "/img/proyectos/avopelle.png",
					titulo: "Avopelle",
					tipo: "E-commerce",
					desc:
						"Sitio web autoadministrable por el cms Wordpress, con trabajo de optimización de rendimiento",
					id: 3
				},
				{
					img: "/img/proyectos/lcconsultoria.png",
					titulo: "LC Consultoría",
					tipo: "Landing Page",
					desc:
						"Página web tipo landing, para generar presencia web a la empresa, exponer sus obras y proporcionar medios de contactos [En desarrollo]",
					id: 4
				},
				{
					img: "/img/proyectos/plataforma1.png",
					titulo: "Plataforma Interna",
					tipo: "Plataforma de administración interna para una agencia ",
					desc:
						"Es una plataforma divididad en Front-End (dashboard) y Back-End (cms). Autoadministrable y configurable según las necesidades de la agencia. Realizada con software OpenSource ",
					id: 5
				},
				{
					img: "/img/proyectos/dashboard.png",
					titulo: "Plataforma Magna",
					tipo:
						"Plataforma de administración de empresa con Firebase como BaaS ",
					desc:
						"Es una plataforma tipo SPA (Single Page Application) con vistas dinámicas según uno de los 3 niveles jerárquicos de la empresa. Usa Firebase como backend (autenticación, base de tatos en tiempo real, mensajería, analytics y hosting)",
					id: 6
				}
			]
		};
	},
	mounted() {
		sal({
			threshold: 0.5,
			once: true
		});
	}
};
</script>
<style>
.portafolio-i {
	margin: 4em 0;
	padding: 3em 0.5em;
}
</style>
