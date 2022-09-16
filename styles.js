const { createApp } = Vue;

createApp({
    data(){
        return {
            isPurple: false,
            stylesH1: {
                color: "white"
            },
            stylesPObj :{'styles-P': true},
            color: {
                'styles-red': true,
                'styles-blue': true,
            },
            onlineIndicator: {
                className: "online-indicator",
                isActive: true,
            },
            dimension: 150
        }
    },
    computed: {
        hiCircleColor(){
            return {purple: this.isPurple}
        },
        resizeCircle(){
            return {width: this.dimension+'px', height: this.dimension+'px'}
        }
    },
    mounted(){
        
    }
}).mount("#styles-classes");