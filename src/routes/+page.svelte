<script>
  import { base } from "$app/paths";
  import { tools } from "../db";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read thesdfsdf documjhgjgjhentation
</p>

<a href="{base}/about">About</a>
<img id="img" src={tools.svelteLogo} alt="svelte logo" />

<style>
  #img {
    max-width: 50px;
    max-height: 50px;
  }
</style>
