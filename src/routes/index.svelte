<h1>Welcome to SvelteKit</h1>
<script>
  export let people;
</script>


<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
  {#each people as person}
    <li>{person.first_name}</li>
  {/each}
</ul>
