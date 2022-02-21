<h1>Welcome to SvelteKit</h1>
<script>
  export let count;

  function increment() {
    count += 1;
  }
</script>


<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={increment}>Count {count}</button>
