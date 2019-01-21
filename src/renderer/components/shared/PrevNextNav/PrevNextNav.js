import { mapState, mapActions } from "vuex";

export default {
  name: "PrevNextNav",
  computed: {
    ...mapState(["activeRoute"])
  },
  methods: {
    ...mapActions(["goNext", "goPrevious"])
  }
};
