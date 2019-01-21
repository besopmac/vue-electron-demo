import { mapState, mapActions } from "vuex";

export default {
  name: "StepsBreadcrumb",
  computed: {
    ...mapState(["activeRoute", "scenes"])
  },
  methods: {
    ...mapActions(["goNext", "goPrevious"])
  }
};
