<script lang="ts">
  // Put this in a specific theme route so it can import by route
  import "@fontsource/great-vibes";
  import "@fontsource/reenie-beanie";
  import Card from "./Card.svelte";

  export let text: Record<string, string>; // TODO: type

  let fonts = {
    frontTextFont: '"Reenie Beanie", cursive',
    innerText1Font: '"Reenie Beanie", cursive',
    innerText2Font: '"Great Vibes", cursive',
    innerText3Font: '"Reenie Beanie", cursive',
  };

  let cardClass = "test-card-2";

  let isWide = true;
</script>

<Card {text} {fonts} {cardClass} {isWide} />
