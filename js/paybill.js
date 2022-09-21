const { createApp } = Vue;
createApp({
    data(){
        return {
            state: true,
            inputName: '',
            names: [],
            showError: false,
            result: '',
        }
    },
    methods: {
        addNameToList(){
            if (this.validate(this.inputName)) {
                this.names.push(this.inputName)
                this.inputName = ''
                this.showError = false
            }else{
                this.showError = true
            }
        },
        validate(value){
            if (value !== '') {
                return true;
            } else {
                return false;
            }
        },
        showResults(){
            this.result = this.names[Math.floor(Math.random() * this.names.length)]
            this.state = false
        },
        resetApp(){
            this.state = true
            this.inputName = ''
            this.names = []
            this.showError = false
            this.result = ''
        },
        removeName(index){
            this.names.splice(index, 1)
        }
    },

}).mount('#paybill');