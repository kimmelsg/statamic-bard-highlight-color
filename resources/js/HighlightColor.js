const { core: commands } = Statamic.$bard.tiptap;
const { markInputRule } = commands;

export default class HighlightColor {
  name() {
    return "highlightColor";
  }

  schema() {
    return {
      attrs: {
        background: {
          default: "#000"
        }
      },
      parseDOM: [
        {
          style: "background",
          getAttrs: value => ({ color: value })
        }
      ],
      toDOM: mark => [
        "span",
        { style: `background: ${mark.attrs.color}!important;` },
        0
      ]
    };
  }

  commands({ type, updateMark }) {
    return attrs => updateMark(type, attrs);
  }

  inputRules({ type }) {
    return [markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type)];
  }

  pasteRules({ type }) {
    return [];
  }

  plugins() {
    return [];
  }
}
