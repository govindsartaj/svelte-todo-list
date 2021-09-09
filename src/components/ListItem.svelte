<script>
  export let item;

  const handleItemClick = (e) => {
    const elt = e.target;
    elt.classList.toggle("crossed-line");
    console.log(elt.classList);
  };
</script>

<div on:click={handleItemClick}>
  {item.label}
</div>
