const { createApp } = Vue;
createApp({
    data(){
        return {
            state: true,
            inputName: '',
            names: [],
            showError: false,
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
        }
    },
    computed: {

    }

}).mount('#paybill');