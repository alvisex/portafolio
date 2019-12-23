<template>
	<div>
		<div class="page-header clear-filter" filter-color="blue">
			<parallax class="page-header-image" style="background-image:url('img/header.jpg')"></parallax>
			<div class="container">
				<div class="content-center brand">
					<!-- <img class="n-logo" src="img/now-logo.png" alt /> -->
					<h1 class="h1-seo">Alvise Leal</h1>
					<h3>Full Stack Web Developer</h3>
				</div>
			</div>
		</div>
		<div class="main">
			<!-- 			<div class="section section-images">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="hero-images-container">
								<img src="img/hero-image-1.jpg" height="650px" alt />
							</div>
							<div class="hero-images-container-1">
								<img src="img/hero-image-2.png" alt />
							</div>
							<div class="hero-images-container-2">
								<img src="img/hero-image-3.png" alt />
							</div>
						</div>
					</div>
				</div>
			</div>-->
		</div>
		<div class="section">
			<div class="container text-center">
				<div class="row justify-content-md-center">
					<div class="col-md-12 col-lg-8">
						<h2 class="title">¿Qué es lo que hago?</h2>
						<p
							class="description"
						>Bueno, se podría considerar que son un desarrollador Front-End que crea sitios web, pero eso no cubriria por completo todo lo que puedo hacer.</p>
						<p
							class="description"
						>Las teconologías web perminen una gran gama de soluciones para distintas necesidades de las empresas o instituciones, desde presentar dinámica y estéticamente su imagen, hasta brindar soluciones y facilidades a los usuarios de las apliaciones web</p>
					</div>
				</div>
				<div class="row justify-content-md-center">
					<div class="col-md-12 col-lg-8">
						<h2 class="title">¿Pero que no cualquiera puede hacerlo?</h2>
						<p class="description">Si, cualquiera puede hacer una pagina web, incluso gratuitamente.</p>
						<p
							class="description"
						>Sin embargo, la calidad y profesionalidad son grandes distintivos que no se obtienen facilmente, he ahí es donde está el principal factor disyuntivo. Las tecnologías están para aprovecharse y sacer su máximo provecho, aquí es donde me destaco, implementando el stack de herramientas mas adecuado para el objetivo del cliente y optimizado su implementación desde un diseño estético hasta un rendimiento impecable.</p>
					</div>
				</div>
			</div>
		</div>
		<signup-form></signup-form>
		<!-- <examples-section></examples-section> -->
	</div>
</template>
<script>
import { Parallax } from "@/components";
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/Navigation";
import TabsSection from "./components/Tabs";
import ProgressPagination from "./components/ProgressPagination";
import Notifications from "./components/Notifications";
import Typography from "./components/Typography";
import JavascriptComponents from "./components/JavascriptComponents";
import CarouselSection from "./components/CarouselSection";
import NucleoIconsSection from "./components/NucleoIconsSection";
import SignupForm from "./components/SignupForm";
import ExamplesSection from "./components/ExamplesSection";
import DownloadSection from "./components/DownloadSection";

export default {
	name: "index",
	bodyClass: "index-page",
	components: {
		Parallax,
		BasicElements,
		Navigation,
		TabsSection,
		ProgressPagination,
		Notifications,
		Typography,
		JavascriptComponents,
		CarouselSection,
		NucleoIconsSection,
		SignupForm,
		ExamplesSection,
		DownloadSection
	}
};
</script>
<style></style>
