<script>
  import { onMount } from "svelte";
  import { routes } from "./routes.js";

  let hash, page;

  function onRouteChanged() {
    hash = window.location.hash || "#home";
    page = $routes[hash] || $routes[404];
  }

  onMount(onRouteChanged);
</script>

<svelte:window on:hashchange={onRouteChanged} />
<svelte:component this={page} {...$$props} />
