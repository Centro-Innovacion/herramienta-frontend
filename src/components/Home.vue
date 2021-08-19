<template>
  <div id="Home">
    <div class="contenido">
      <img src="../assets/imagenhome.png">
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
          Para empezar, por favor selecciona una opción:
        </h3> 
        <br>
        <div class="botones">
          <a class="boton" v-on:click="contarCiudadania" id="botonCiudadania">Ciudadanía</a>
          <br>
          <a class="boton" v-on:click="contarPublicas" id="botonPublicas">Entidades Públicas </a>
          <br>
          <a class="boton" v-on:click="contarPrivadas" id="botonPrivadas">Empresas Privadas</a>
          <br>
          <a class="boton" v-on:click="contarAcademia" id="botonAcademia">Academia</a>
          <br>
          <a class="boton" v-on:click="contarSociedadCivil" id="botonSociedadCivil">Sociedad Civil</a>
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
                    localStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    alert("Error, contacte al administrador del sitio");
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
                    localStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/personas';
                })
                .catch((error) => {
                    alert("Error, contacte al administrador del sitio");
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
                    localStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    alert("Error, contacte al administrador del sitio");
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
                    localStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    alert("Error, contacte al administrador del sitio");
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
                    localStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    alert("Error, contacte al administrador del sitio");
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
                    localStorage.setItem('identificador', result.data.id_rol)
                    window.location.href = '/request';
                })
                .catch((error) => {
                    alert("Error, contacte al administrador del sitio");
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
#Home img {
  width: 40%;
  height: 40%;
  margin: 0px 47px 0px 20px;/*top-right-bottom-left*/
  filter: brightness(1.1);
  mix-blend-mode: multiply;
}
#Home .texto {
  display: flex;
  flex-direction: column;
  padding-right: 10px;
}
#Home .texto h1 {
  color: #004884;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 40px;
  display: flex;
  justify-content: center;
}
#Home .texto h2 {
  color: #004884;
  font-family: Montserrat;
  font-size: 26px;
  display: flex;
  text-align: justify;
  font-weight: regular;
}
#Home .texto h3 {
  color: #004884;
  font-family: Montserrat;
  font-size: 22px;
  display: flex;
  text-align: justify;
  font-weight: bold;
}
#Home .botones {
  display:flex;
  justify-content: center;
  flex-direction: column; /*poner uno debajo del otro*/
  padding-right: 220px;
  padding-left: 220px;
  text-align: center; /*alinear texto al centro*/
}
#Home .boton {
padding-right: 30px; /*espacio alrededor texto*/
padding-left: 30px;
padding-bottom: 5px;
padding-top: 5px;
background-color: #F42F63; /*color botón*/
color: #FFFFFF; /*color texto*/
font-family: Montserrat;
border-radius: 40px; /*bordes redondos*/
text-decoration: none; /*quitar el subrayado del hipervinculo*/
}
</style>
