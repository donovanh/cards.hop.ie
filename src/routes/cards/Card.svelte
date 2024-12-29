<script lang="ts">
  let CLOSED = "closed";
  let OPEN = "open";

  // External variables
  export let text: Record<string, string>;
  export let fonts: Record<string, string>;
  export let cardClass: string;
  export let isWide: boolean;

  // Local variables
  let stateClass = CLOSED;

  function openCloseCard() {
    if (stateClass === CLOSED) {
      stateClass = OPEN;
      yAxisDegree = 0;
      xAxisDegree = 0;
    } else {
      stateClass = CLOSED;
    }
  }

  import { onMount } from "svelte";

  let card: HTMLElement | null = null; // Reference to the card DOM element
  let yAxisDegree = 0;
  let xAxisDegree = 0;
  let transition = "none";
  let sheenX = 0;
  let sheenY = 0;
  let sheenOpacity = 0;

  // Handle mouse movement
  function handleMouseMove(event: MouseEvent) {
    if (!card) return;

    const rect = card.getBoundingClientRect();

    // Check if the cursor is hovering over the card
    const isHovering =
      event.clientX >= rect.left - 20 &&
      event.clientX <= rect.right + 20 &&
      event.clientY >= rect.top - 20 &&
      event.clientY <= rect.bottom + 20;

    if (!isHovering) {
      sheenOpacity = 0;
    } else {
      sheenOpacity = 1;
    }

    if (stateClass === CLOSED) {
      const height = rect.height;
      const width = rect.width;

      const rawXAxisDegree =
        (Math.max(0, event.clientY - rect.top) / height) * -40;

      yAxisDegree = (Math.max(0, event.clientX - rect.left) / width) * 10;
      xAxisDegree = rawXAxisDegree ? rawXAxisDegree + 20 : 0;

      transition = "none";
      setSheenPosition(
        (event.clientX - rect.left) / width,
        (event.clientY - rect.top) / height
      );
    } else {
      transition = "transform linear 0.1s";
      yAxisDegree = 0;
      xAxisDegree = 0;
      setSheenPosition(0, 0); // Reset to center position
    }
  }

  function setSheenPosition(xRatio: number, yRatio: number) {
    sheenX = 1 - (xRatio - 0.5) * 800;
    sheenY = 1 - (yRatio - 0.5) * 800 - 400;
  }

  onMount(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
</script>

<button
  bind:this={card}
  style="transform: rotateY({yAxisDegree}deg) rotateX({xAxisDegree}deg); transition: {transition};"
  class="card {stateClass} {cardClass} {isWide ? 'wide' : 'tall'}"
  onclick={openCloseCard}
>
  <div class="back">
    <div class="content">
      <p class="intro" style="font-family: {fonts.innerText1Font}">
        {text.innerText1}
      </p>
      <p class="main-content" style="font-family: {fonts.innerText2Font}">
        {text.innerText2}
      </p>
      <p class="sign-off" style="font-family: {fonts.innerText3Font}">
        {text.innerText3}
      </p>
    </div>
  </div>
  <div
    class="front"
    style="--sheenX: {sheenX}px; --sheenY: {sheenY}px; --sheenOpacity: {sheenOpacity};"
  >
    <div class="content">
      <p style="font-family: {fonts.frontTextFont}">{text.frontText}</p>
    </div>
  </div>
  <div class="lining"></div>
</button>

<style>
  @import "$lib/styles/card.css";
</style>
