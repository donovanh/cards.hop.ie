import "clsx";
import { d as stringify, e as bind_props, c as pop, p as push } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Card($$payload, $$props) {
  push();
  let CLOSED = "closed";
  let text = $$props["text"];
  let fonts = $$props["fonts"];
  let cardClass = $$props["cardClass"];
  let isWide = $$props["isWide"];
  let stateClass = CLOSED;
  let yAxisDegree = 0;
  let xAxisDegree = 0;
  let transition = "none";
  let sheenX = 0;
  let sheenY = 0;
  let sheenOpacity = 0;
  $$payload.out += `<button${attr("style", `transform: rotateY(${stringify(yAxisDegree)}deg) rotateX(${stringify(xAxisDegree)}deg); transition: ${stringify(transition)};`)}${attr("class", `card ${stringify(stateClass)} ${stringify(cardClass)} ${stringify(isWide ? "wide" : "tall")} svelte-1ghqmyz`)}><div class="back svelte-1ghqmyz"><div class="content svelte-1ghqmyz"><p class="intro svelte-1ghqmyz"${attr("style", `font-family: ${stringify(fonts.innerText1Font)}`)}>${escape_html(text.innerText1)}</p> <p class="main-content svelte-1ghqmyz"${attr("style", `font-family: ${stringify(fonts.innerText2Font)}`)}>${escape_html(text.innerText2)}</p> <p class="sign-off svelte-1ghqmyz"${attr("style", `font-family: ${stringify(fonts.innerText3Font)}`)}>${escape_html(text.innerText3)}</p></div></div> <div class="front svelte-1ghqmyz"${attr("style", `--sheenX: ${stringify(sheenX)}px; --sheenY: ${stringify(sheenY)}px; --sheenOpacity: ${stringify(sheenOpacity)};`)}><div class="content svelte-1ghqmyz"><p${attr("style", `font-family: ${stringify(fonts.frontTextFont)}`)} class="svelte-1ghqmyz">${escape_html(text.frontText)}</p></div></div> <div class="lining svelte-1ghqmyz"></div></button>`;
  bind_props($$props, { text, fonts, cardClass, isWide });
  pop();
}
function TestCard($$payload, $$props) {
  let text = $$props["text"];
  let fonts = {
    frontTextFont: '"Kaushan Script", cursive',
    innerText1Font: '"Kaushan Script", cursive',
    innerText2Font: '"Great Vibes", cursive',
    innerText3Font: '"Kaushan Script", cursive'
  };
  let cardClass = "test-card";
  Card($$payload, { text, fonts, cardClass });
  bind_props($$props, { text });
}
function TestCard2($$payload, $$props) {
  let text = $$props["text"];
  let fonts = {
    frontTextFont: '"Reenie Beanie", cursive',
    innerText1Font: '"Reenie Beanie", cursive',
    innerText2Font: '"Great Vibes", cursive',
    innerText3Font: '"Reenie Beanie", cursive'
  };
  let cardClass = "test-card-2";
  let isWide = true;
  Card($$payload, { text, fonts, cardClass, isWide });
  bind_props($$props, { text });
}
function _page($$payload) {
  let text = {
    frontText: "Front Text",
    innerText1: "Inner Text 1",
    innerText2: "Inner Text 2",
    innerText3: "Inner Text 3"
  };
  let text2 = {
    frontText: "Front Text 2",
    innerText1: "adawd1",
    innerText2: "Iawadw2",
    innerText3: "Inawdadt 3"
  };
  $$payload.out += `<h1>Cards.hop.ie</h1> <p>TODO: Create a wide card theme</p> <p>TODO: Create editor with preview</p> <p>TODO: Set a preview mode for showing cards without hover angles</p> <p>TODO: Link to the builder as a route</p> <p>TODO: Make multiple themes and have them accessible on routes</p> <div class="container svelte-1cnfqzo">`;
  TestCard($$payload, { text });
  $$payload.out += `<!----> `;
  TestCard2($$payload, { text: text2 });
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
