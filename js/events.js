const { createApp } = Vue;
createApp({
    data(){
        return {
            name: "mohit",
            x:0,
            y:0,
            xOffset: 0,
            yOffset: 0,
            valuePassed: null,
            eventFired: null,
            keyboardEventMessage: "",
            people: [
                {
                  name: 'John',
                  message: 'Hello world!'
                },
                {
                  name: 'Rick',
                  message: 'I like pie.'
                },
                {
                  name: 'Amy',
                  message: 'Skydiving is fun!'
                }
              ]
        }
    },
    methods: {
        updateName(){
            this.name = "montie"
        },
        changeToFullName(){
            this.name = "Mohit Guleria"
        },
        instagramName(){
            this.name = "guleria888montie"
        },
        getCoordinates(event){
            this.x = event.clientX;
            this.y = event.clientY;
            this.xOffset = event.offsetX;
            this.yOffset = event.offsetY;
        },
        makeNameAnonymous(value){
            this.name = value;
        },
        printPassedValueAndEvent(value, event){
            this.valuePassed = value;
            this.eventFired = event.type;
        },
        formHandlerMethod(event=null){
            // event.preventDefault();
            console.log('Form submitted')
        },
        setKeyboardEventMessage(event){
            this.keyboardEventMessage = event.target.value;
        },
        move(){
            const first = this.people.shift()
            this.people.push(first)
        },
        changeColorOfRef(){
            this.$refs.someReference.style.color = "red";
        }
        
    },
    computed:{
        coordinatesTextStyles() {
            return {
            color: 'white',
            position: 'relative',
            marginLeft: this.xOffset+'px',
            marginTop: this.yOffset+'px',
            }
        }
    }
}).mount('#events');