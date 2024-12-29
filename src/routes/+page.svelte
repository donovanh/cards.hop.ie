<script lang="ts">
  import TestCard from "./cards/TestCard.svelte";
  import TestCard2 from "./cards/TestCard2.svelte";

  let text = {
    frontText: "Front Text",
    innerText1: "Inner Text 1",
    innerText2: "Inner Text 2",
    innerText3: "Inner Text 3",
  };

  let text2 = {
    frontText: "Front Text 2",
    innerText1: "adawd1",
    innerText2: "Iawadw2",
    innerText3: "Inawdadt 3",
  };
</script>

<h1>Cards.hop.ie</h1>
<p>TODO: Create a wide card theme</p>
<p>TODO: Create editor with preview</p>
<p>TODO: Set a preview mode for showing cards without hover angles</p>
<p>TODO: Link to the builder as a route</p>
<p>TODO: Make multiple themes and have them accessible on routes</p>

<div class="container">
  <TestCard {text} />
  <TestCard2 text={text2} />
</div>

<style>
  .container {
    display: flex;
    padding: 0 2em;
  }
</style>
