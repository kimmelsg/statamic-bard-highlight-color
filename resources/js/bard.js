import HighlightColor from "./HighlightColor";
import HighlightColorMenu from "./HighlightColorMenu";

Statamic.$bard.extend(({ mark }) => mark(new HighlightColor()));
Statamic.$bard.buttons(buttons => {
  const indexOfBold = _.findIndex(buttons, { command: "bold" });
  buttons.splice(indexOfBold, 0, {
    name: "color",
    text: "Highlight Color",
    command: "highlightColor",
    args: { color: "#fff" },
    icon: "paint-brush",
    component: HighlightColorMenu
  });
});
