<script lang="ts">
  // Put this in a specific theme route so it can import by route
  import "@fontsource/kaushan-script";
  import "@fontsource/great-vibes";
  import Card from "./Card.svelte";

  export let text: Record<string, string>; // TODO: type

  let fonts = {
    frontTextFont: '"Kaushan Script", cursive',
    innerText1Font: '"Kaushan Script", cursive',
    innerText2Font: '"Great Vibes", cursive',
    innerText3Font: '"Kaushan Script", cursive',
  };

  let cardClass = "test-card";
</script>

<Card {text} {fonts} {cardClass} isWide={false} />
