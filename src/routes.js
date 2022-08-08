import { writable } from 'svelte/store'
import Notfound from "./pages/Notfound.svelte";
import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Services from "./pages/Services.svelte";

export const routes = writable({})

routes.set({
    404: Notfound,
    "#home": Home,
    "#about": About,
    "#services": Services,
});