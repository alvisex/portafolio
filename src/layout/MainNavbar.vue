<template>
	<navbar
		position="fixed"
		type="primary"
		:transparent="transparent"
		:color-on-scroll="colorOnScroll"
		menu-classes="ml-auto"
	>
		<template slot-scope="{ toggle, isToggled }">
			<router-link v-popover:popover1 class="navbar-brand" to="/">Portafolio express</router-link>
			<!-- <el-popover ref="popover1" popper-class="popover" placement="bottom" width="200" trigger="hover">
				<div class="popover-body"></div>
			</el-popover>-->
		</template>
		<template slot="navbar-menu">
			<li class="nav-item">
				<router-link class="nav-link" to="/portafolio">
					<i class="now-ui-icons business_briefcase-24"></i>Portafolio
				</router-link>
			</li>

			<li class="nav-item">
				<a
					class="nav-link"
					rel="tooltip"
					title="Agregame en LinkedIn"
					data-placement="bottom"
					href="www.linkedin.com/in/alvise-leal"
					target="_blank"
				>
					<i class="fab fa-linkedin"></i>
					<p class="d-lg-none d-xl-none">Linkedin</p>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="https://www.facebook.com/alvisex" target="_blank">
					<i class="fab fa-facebook-square"></i>
					<p class="d-lg-none d-xl-none">Facebook</p>
				</a>
			</li>
			<li class="nav-item">
				<a
					class="nav-link"
					rel="tooltip"
					title="Checa algunas de mis fotos en Instagram"
					data-placement="bottom"
					href="https://www.instagram.com/alvise.x"
					target="_blank"
				>
					<i class="fab fa-instagram"></i>
					<p class="d-lg-none d-xl-none">Instagram</p>
				</a>
			</li>
		</template>
	</navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
export default {
	name: "main-navbar",
	props: {
		transparent: Boolean,
		colorOnScroll: Number
	},
	components: {
		DropDown,
		Navbar,
		NavbarToggleButton,
		NavLink,
		[Popover.name]: Popover
	}
};
</script>

<style scoped></style>
