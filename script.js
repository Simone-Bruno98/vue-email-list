let app = new Vue ({
    el: "#app",
    data:{
        emailsArray: [],
    },
    methods:{
        request : function(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                console.log(response.data.response);
                this.emailsArray.push(response.data.response);
            });
        },
    },
    mounted: function () {
        for (let i = 0; i < 10; i++) {
          this.request();
        }
    },
});