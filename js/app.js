// console.log( new Vue)
// const { createApp } = Vue;
new Vue({
  el: "#app",
  data() {
    return {
      welcomeMessage: "Welcome to VueJS by Mohit Guleria",
      isGuest: true,
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "Picture of Mount Everest",
      textFromFuture:
        "I am some text that may have dependence on some computed property or watcher",
      htmlFromFuture:
        '<a href="https://www.youtube.com/shorts/ViBdNxY63-4">Click here, to watch my youtube shorts video</a>',
      someArray: ["A living senior citizen", 65, true],
      someObj: {
        car: "Ferrari",
        color: "red",
        gears: 7
      },
      someFunction: function () {
        if (this.isGuest) {
          return `${this.welcomeMessage} is a strategy to force you to buy`;
        } else {
          return;
        }
      },
      vModel: ""
    };
  },
  methods: {
    testMethod() {
      return `${this.isGuest ? "may not be a fraud" : ""}`;
    },
  },
});
