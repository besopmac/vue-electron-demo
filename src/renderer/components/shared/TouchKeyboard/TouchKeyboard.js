import VueTouchKeyboard from "vue-touch-keyboard";

export default {
  name: "TouchKeyboard",
  components: {
    "vue-touch-keyboard": VueTouchKeyboard.component
  },
  data() {
    return {
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false
      }
    };
  },

  methods: {
    accept(text) {
      alert("Input text: " + text);
      this.hide();
    },

    show(e) {
      this.input = e.target;
      this.layout = e.target.dataset.layout;

      if (!this.visible) {
        this.visible = true;
      }
    },

    hide() {
      this.visible = false;
    },

    next() {
      let inputs = document.querySelectorAll("input");
      let found = false;
      [].forEach.call(inputs, (item, i) => {
        if (!found && item == this.input && i < inputs.length - 1) {
          found = true;
          this.$nextTick(() => {
            inputs[i + 1].focus();
          });
        }
      });
      if (!found) {
        this.input.blur();
        this.hide();
      }
    }
  }
};
