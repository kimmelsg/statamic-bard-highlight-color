const { core: commands } = Statamic.$bard.tiptap;
const { markInputRule } = commands;

export default class HighlightColor {
  name() {
    return "highlightColor";
  }

  schema() {
    return {
      attrs: {
        color: {
          default: "#000"
        }
      },
      parseDOM: [
        {
          style: "background",
          getAttrs: value => ({ background: value })
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
