const drinkData = new Vue({
  el: "#drinks",
  data: {
    firstName: "Cafe",
    lastName: "De Claire"
  },
  computed: {
    cafeName() {
      return this.firstName + " " + this.lastName;
    }
  }
});
