<script>
  import ListItem from "./ListItem.svelte";
  export let items;
</script>

<div>
  {#each items as item}
    <ListItem {item} />
  {/each}
</div>
