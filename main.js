window.onload = function (){

}

var app= new Vue({
    el:'#app',
    data:{
        data: null,
        es: true,
        animacion: false
},


mounted(){
        axios.get('texto.json')
        .then((response)=> {
                this.data=response.data
        })
        .catch(function (error){
                console.log("Error al cargar el JSON" +error);
        });
},
methods:{
    cambiarIdioma: function () {
        this.es=!this.es
    }

},


computed:{
    obtenerTexto: function () {
        if (this.data === null) {
                return "";
        }
        if (this.es) {
                return this.data.es;
        } else {
                return this.data.en;
        }
    },
        
}

})

