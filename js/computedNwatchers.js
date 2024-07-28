const warning = "If you are found loosing focus, you will be executed";
const computedWatchers = new Vue({
    el: '#computedWatchers',
    data(){
        return {
            user: '',
            active: false,
            computedActive: false,
            loading: false,
            firstName: "Mohit"
        }
    },
    methods: {
        message(){
            console.log('message triggered');
            return this.user === 'mohit'? `welcome ${this.user}!` : 'You aren\'t allowed'
        },
        isActive(){
            console.log('isActive triggered')
            return this.active? 'Active' : 'Inactive'
        },
        isComputedActive(){
            return this.computedActive? 'ComputedActive' : 'ComputedInactive'
        },
        toggleActive(){
            // this.active = !this.active;
            // or
            this.active = this.active? false : true
        },
        toggleComputedActive(){
            this.computedActive = this.computedActive? false : true
        },
        changeApp2Property(){
            app2.valueAcessibleToComputedWatchersApp = "Value changed by computedWatchers instance"
        }
    },
    computed: {
        computedMessage(){
            console.log('compMessage triggered');
            return this.user === 'mohit'? `welcome ${this.user}!` : 'You aren\'t allowed'
        },
        computedActive(){
            console.log("computed property trying to run async, could not change loading(observe the console) ", this.loading)
            this.loading = true
            setTimeout(()=>{
                this.loading = false
            }, 3000)
        },
    },
    watch: {
        // active(value){
        //     console.log("watcher reacted", value, this.loading)
        //     this.loading = true
        //     setTimeout(()=>{
        //         this.loading = false
        //     }, 3000)
            
            
        // },
    },
    mounted(){
        this.firstName = "montie"
        // call below method here if don't want to place a button to do it.
        // setTimeout(this.changeApp2Property, 2000);
    }
})


const app2 = new Vue({
    el: '#app2',
    data(){
        return {
            valueAcessibleToComputedWatchersApp: "Value of app2 instance"
        }
    },
    methods: {
        accessOuterProperty(){
            alert(warning);
        }
    }
})