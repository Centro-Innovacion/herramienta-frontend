<template>
    <div id="Otro">
        <div class="contact_form">
            <div class="formulario">      
                <h1>Otro rol</h1>
                <div class="wrap">
                    <p>
                        <label for="Otro">Escribe tu rol:
                            <span class="obligatorio">*</span>
                        </label>
                        <input type="text" id="otro_rol">
                    </p>
                    
                </div>
                <div class="boton">
                    <a class="boton" v-on:click="crearRol()">Siguiente</a>
                </div>
                <br>
                <p class="aviso">
                <span class="obligatorio"> * </span>los campos son obligatorios.
                </p>          
            </div>
        </div>
    </div>  
</template>

<script>
import axios from "axios";
export default {
    name: "Otro",
    data: function (){
        return {
            otro_rol: '',
        }
    },

    methods:{

        crearRol: function() {
            this.otro_rol = document.getElementById("otro_rol").value;
           
            let id = sessionStorage.getItem('identificador');
            
            if(this.otro_rol !== '')
            {

                this.newRol = {
                    "id_rol": id,
                    "otro_rol": this.otro_rol, 
                }

                axios.post("http://127.0.0.1:8000/otro_rol/crear/", this.newRol)
                    .then((result) => {
                        window.location.href = '/menu';
                    })
                    .catch((error) => {
                        alert("Error, contacte al administrador del sitio");
                    });
                }
                else {
            alert("Debes completar todos los campos antes de continuar");
            }
        },
    }
}
</script>

<style>
#Otro {
    display: flex;
    justify-content: center;
}
#Otro .contact_form{  
    width: 460px; 
    height: auto;
    border-radius: 10px;  
    padding-top: 30px;
    padding-bottom: 20px;  
    background-color: #ffffff; 
    padding-left: 30px;
}
#Otro .wrap p {
    display: flex;
    text-align: left;
    flex-direction: column;
}
#Otro .wrap {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}
#Otro input{
    background-color: #fbfbfb; 
    width: 408px; 
    height: 40px; 
    border-radius: 5px;  
    border-style: solid; 
    border-width: 1px; 
    border-color: #3366cc; 
    margin-top: 10px;  
    padding-left: 10px;
    margin-bottom: 20px; 
}
#Otro .dep_mun select{
    background-color: #fbfbfb; 
    width: 408px; 
    height: 40px; 
    border-radius: 5px;  
    border-style: solid; 
    border-width: 1px; 
    border-color: #3366cc; 
    margin-top: 10px;  
    padding-left: 10px;
    margin-bottom: 20px;
}
#Otro .boton {
    display: flex;
    justify-content: center;
}
#Otro .boton a{
    height: 45px; 
    padding: 5px;   
    background-color: #F42F63; 
    border-color: #F42F63; 
    border-style: solid; 
    border-radius: 10px;  
    width: 200px;   
    cursor: pointer;
    text-decoration: none; /*quitar el subrayado del hipervinculo*/
    color: #ffffff;
}
#Otro button p{
    color: #ffff;
}
#Otro span{
    color: #ab4493; 
}
#Otro .aviso{
    font-size: 13px;  
    color: #3366cc;  
}
#Otro h1{
    font-size: 23px;  
    text-align: center;  
    color: #3366cc;
    font-family: Montserrat;
    padding-bottom: 10px;
}
#Otro h3{
    font-size: 15px; 
    padding-bottom: 30px;
    color: #000000; 
    font-family: Montserrat;
    font-weight: light;  
}
</style>