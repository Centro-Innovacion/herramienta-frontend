<template>
  <div id="Home">
    <div class="contenido">
      <img src="../assets/imagenhomematica.png">
      <div class= "texto">
        <h1>
           ¡Te damos la bienvenida!
        </h1>
        <br>
        <h2>
          La Dirección de Gobierno Digital creó esta herramienta para acercarse más a tí
          y ayudarte a resolver tus solicitudes de manera más ágil.
        </h2>
        <br>
        <h3>
          Para empezar, por favor selecciona el rol desde el cual deseas hacer tu consulta:
        </h3> 
        <br>
        <div class="botones">
          <a class="boton" v-on:click="contarCiudadania" id="botonCiudadania">Soy un ciudadano</a>
          <br>
          <a class="boton" v-on:click="contarPublicas" id="botonPublicas">Soy una Entidad Pública </a>
          <br>
          <a class="boton" v-on:click="contarPrivadas" id="botonPrivadas">Soy una Empresa Privada</a>
          <br>
          <a class="boton" v-on:click="contarAcademia" id="botonAcademia">Soy de la Academia</a>
          <br>
          <a class="boton" v-on:click="contarSociedadCivil" id="botonSociedadCivil">Hago parte de la Sociedad Civil</a>
          <br>
          <a class="boton" v-on:click="contarOtro" id="botonOtro">Otro</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: function () {
      return {
          id_rol:"",
          botonCiudadania:0,
          botonPublicas:0,
          botonPrivadas:0,
          botonAcademia:0,
          botonSociedadCivil:0,
          botonOtro:0,
      }
  },

  methods: {
        contarCiudadania: function() {
            this.botonCiudadania = 1;
            let self = this
            this.newCiudadania = {
                "rol": "ciudadania",
                "contador":this.botonCiudadania,
            }
            axios.post("http://127.0.0.1:8000/rol/crear/", this.newCiudadania)
                .then((result) => {
                    console.log(result.data.id_rol);
                    sessionStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/request';
                });
        },

        contarPublicas: function() {
            this.botonPublicas = 1;
            let self = this
            this.newPublicas = {
                "rol": "entidad publica",
                "contador":this.botonPublicas,
            }
            axios.post("http://127.0.0.1:8000/rol/crear/", this.newPublicas)
                .then((result) => {
                    console.log(result.data.id_rol);
                    sessionStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/entidad';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/entidad';
                });
        },

        contarPrivadas: function() {
            this.botonPrivadas = 1;
            let self = this
            this.newPrivadas = {
                "rol": "entidad privada",
                "contador":this.botonPrivadas,
            }
            axios.post("http://127.0.0.1:8000/rol/crear/", this.newPrivadas)
                .then((result) => {
                    console.log(result.data.id_rol);
                    sessionStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                     window.location.href = '/request';
                });
        },

        contarAcademia: function() {
            this.botonAcademia = 1;
            let self = this
            this.newAcademia = {
                "rol": "academia",
                "contador":this.botonAcademia,
            }
            axios.post("http://127.0.0.1:8000/rol/crear/", this.newAcademia)
                .then((result) => {
                    console.log(result.data.id_rol);
                    sessionStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                     window.location.href = '/request';
                });
        },

        contarSociedadCivil: function() {
            this.botonSociedadCivil = 1;
            let self = this
            this.newSociedadCivil = {
                "rol": "sociedad civil",
                "contador":this.botonSociedadCivil,
            }
            axios.post("http://127.0.0.1:8000/rol/crear/", this.newSociedadCivil)
                .then((result) => {
                    console.log(result.data.id_rol);
                    sessionStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/request';
                });
        },

        contarOtro: function() {
            this.botonOtro = 1;
            let self = this
            this.newOtro = {
                "rol": "otro",
                "contador":this.botonOtro,
            }
            axios.post("http://127.0.0.1:8000/rol/crear/", this.newOtro)
                .then((result) => {
                    console.log(result.data.id_rol);
                    sessionStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/request';
                });
        },

          }
}
</script>

<style>
#Home .contenido {
  display: flex;
  justify-content: space-around;
}
@media (max-width: 600px) {
  #Home .contenido {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
#Home img {
  width: 40%;
  height: 40%;
  margin: 70px 47px 0px 20px;/*top-right-bottom-left*/
  filter: brightness(1.1);
  mix-blend-mode: multiply;
}
@media (max-width: 600px) {
  #Home img {
    width: 35%;
    height: 35%;
    margin: 0 0 0 140px;
   
  }
}
#Home .texto {
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  margin-top: 40px;
}
@media (max-width:600px) {
  #Home .texto {
    margin: 5px 20px 0 20px;/*top-right-bottom-left*/
    display: flex;
    justify-content: center;
  }
}

#Home .texto h1 {
  color: #004884;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 40px;
  display: flex;
  justify-content: center;
}
@media (max-width: 600px) {
  #Home .texto h1 {
    font-size: 25px;
  }
}
#Home .texto h2 {
  color: #004884;
  font-family: Montserrat;
  font-size: 26px;
  display: flex;
  text-align: justify;
  font-weight: regular;
}
@media (max-width: 600px) {
  #Home .texto h2 {
    font-size: 18px;
  }
}
#Home .texto h3 {
  color: #004884;
  font-family: Montserrat;
  font-size: 22px;
  display: flex;
  text-align: justify;
  font-weight: bold;
}
@media (max-width: 600px) {
  #Home .texto h3 {
    font-size: 15px;
  }
}
#Home .botones {
  display:flex;
  justify-content: center;
  flex-direction: column; /*poner uno debajo del otro*/
  padding-right: 180px;
  padding-left: 180px;
  text-align: center; /*alinear texto al centro*/
}
@media (max-width: 600px) {
  #Home .botones {
    padding: 0 40px 0 40px ;/*top-right-bottom-left*/
  }
}
#Home .boton {
width: 100%;
padding-right: 30px; /*espacio alrededor texto*/
padding-left: 30px;
padding-bottom: 5px;
padding-top: 5px;
background-color: #F42F63; /*color botón*/
color: #FFFFFF; /*color texto*/
font-family: Montserrat;
border-radius: 40px; /*bordes redondos*/
text-decoration: none; /*quitar el subrayado del hipervinculo*/
cursor: pointer;
}
@media (max-width: 600px) {
  #Home .boton {
    font-size: 13px;
  }
}
</style>
