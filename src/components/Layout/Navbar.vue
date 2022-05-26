<template>
    <nav class="navbar is-link" aria-label="main navigation" role="navigation">
        <div class="container is-max-desktop px-1">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    Notedamus
                </div>

                <a
					@click.prevent="showMobileNav = !showMobileNav"
                    role="button"
                    class="navbar-burger"
                    :class=" { 'is-active': showMobileNav }"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div
                id="navbarBasicExample"
                class="navbar-menu"
                :class=" { 'is-active': showMobileNav }"
            >
                <div class="navbar-start"></div>

                <div class="navbar-end">
                    <RouterLink to="/" class="navbar-item is-active">Home</RouterLink>
                    <RouterLink to="/stats" class="navbar-item">Stats</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";

/*
Mobile navbar
*/
const showMobileNav = ref(false);
</script>

<style>
@media (max-width: 1023px) {
	.navbar-menu {
		position: absolute;
		left: 0;
		width: 100%;
	}
}
</style>
