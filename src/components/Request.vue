<template>
    <div id="Request">

        <div class="MigaPan">
        <a href= "/Home">Regresar a la página de inicio</a> 
        <a href= "/evaluar">Si no encontraste lo que buscabas y deseas radicar una solicitud haz click aquí</a>
        </div>
        <div class="Encabezado">
            <img src="../assets/quiero_saber.png">
            <h1> | </h1>
            <span class="QUIERO-SABER">SECCIÓN 1. QUIERO SABER</span>
        </div>
        <div class="descripcion">
          <p>Escoge una categoría para consultar la información que buscas</p>
        </div>
        <div class="Contenido">
            <a class="boton" v-on:click="contarLineamientos" id="botonLineamientos">
            <div class="Lineamientos">
                <div class="titulo">
                    <img src="../assets/lineamientos.png">
                    <p>LINEAMIENTOS</p>
                </div>
                <div class="Lnea-4"></div>
                <div class="texto">
                    <h1>
                      Acuerdos, guías, manuales, marcos, modelos, normatividad.
                    </h1>
                </div>
            </div>
            </a>

            <a class="boton" v-on:click="contarSocializacion" id="botonSocializacion">
            <div class="Socializacion">
                <div class="titulo">
                  <img src="../assets/socializacion.png">
                  <p>SOCIALIZACIÓN</p>
                </div>
                <div class="Lnea-5"></div>
                <div class="texto">
                    <h1>
                      Conéctate y transfórmate con Gobierno Digital, plataforma CIEN.
                    </h1>
                </div>
            </div>
            </a>

            <a class="boton" v-on:click="contarFortalecimiento" id="botonFortalecimiento">
            <div class="Fortalecimiento">
                <div class="titulo">
                  <img src="../assets/fortalecimiento.png">
                  <p>FORTALECIMIENTO</p>
                </div>
                <div class="Lnea-6"></div>
                <div class="texto">
                    <h1>
                      Cursos virtuales, herramientas colaborativas, máxima velocidad, piloto blockchain.
                    </h1>
                </div>
            </div>
            </a>

            <a class="boton" v-on:click="contarAcompanamiento" id="botonAcompanamiento">
            <div class="Acompanamiento">
                <div class="titulo">
                  <img src="../assets/acompanamiento.png">
                  <p>ACOMPAÑAMIENTO</p>
                </div>
                <div class="Lnea-7"></div>
                <div class="texto">
                    <h1>
                      Carpeta ciudadana digital, acompañamiento en marcos, modelos, PETI, caja de herramientas.
                    </h1>
                </div>
            </div>
            </a>

            <a class="boton" v-on:click="contarMedicion" id="botonMedicion">
            <div class="Medicion">
                <div class="titulo">
                  <img src="../assets/medicion.png">
                  <p>MEDICIÓN</p>
                </div>
                <div class="Lnea-8"></div>
                <div class="texto">
                    <h1>
                      Autodiagnóstico, FURAG, herramientas de medición, índice de Gobierno Digital, informes de gestión,
                      mapas y tableros interactivos.
                      
                    </h1>
                </div>
            </div>
            </a>

        </div>
        <br>
        <hr>
        <br>
        <div class="Encabezado">
            <img src="../assets/seccion_acompanamiento.png">
            <h1> | </h1>
            <span class="QUIERO-SABER">SECCIÓN 2. QUIERO ACOMPAÑAMIENTO</span>
        </div>
        <div class="descripcion">
          <p>Si necesitas un acompañamiento, haz click en la opción que requieras</p>
        </div>
        <div class="Contenido">
            <a class="boton" v-on:click="contarProyecto" id="botonProyecto">
            <div class="Proyecto">
                <div class="titulo">
                    <img src="../assets/proyecto.png">
                    <p>PROYECTO</p>
                </div>
                <div class="Lnea-4"></div>
                <div class="texto">
                    <h1>
                      Elige esta opción si necesitas acompañamiento con un proyecto.
                    </h1>
                </div>
            </div>
            </a>
            
            <a class="boton" v-on:click="contarCharla" id="botonCharla">
            <div class="Charla">
                <div class="titulo">
                  <img src="../assets/socializacion.png">
                  <p>CHARLA</p>
                </div>
                <div class="Lnea-5"></div>
                <div class="texto">
                    <h1>Elige esta opción si necesitas una charla.</h1>
                </div>
            </div>
            </a>

            <a class="boton" v-on:click="contarCapacitacion" id="botonCapacitacion">
            <div class="Capacitacion">
                <div class="titulo">
                  <img src="../assets/fortalecimiento.png">
                  <p>CAPACITACIÓN</p>
                </div>
                <div class="Lnea-6"></div>
                <div class="texto">
                    <h1>Elige esta opción si necesitas una capacitación</h1>
                </div>
            </div>
            </a>

          </div>
          <br>
          <hr>
          <br>
          <div class="Encabezado">
            <img src="../assets/quiero_reunion.png">
            <h1> | </h1>
            <span class="QUIERO-SABER">SECCIÓN 3. QUIERO UNA REUNIÓN</span>
        </div>
        <div class="descripcion">
          <p>Escoge esta opción únicamente si ya revisaste las anteriores y no se encuentra allí la información que requieres</p>
        </div>

        
        <div class="Contenidoreunion">
          <a class="boton" v-on:click="contarReunion" id="botonReunion">
            <div class="Reunion">
                <div class="titulo">
                    <img src="../assets/reunion.png">
                    <p>REUNIÓN</p>
                </div>
                <div class="Lnea-4">
                </div>
                <div class="texto">
                    <h1>
                      Si ya revisaste las secciones anteriores y no encontraste lo que buscabas,
                      y consideras que una reunión es la única forma de resolver tu solicitud, puedes
                      seleccionar esta opción.
                    </h1>
                </div>
            </div>
          </a>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Request",
  data: function () {
      return {
          id_rol:"",
          botonLineamientos: 0,
          botonSocializacion: 0,
          botonAcompanamiento: 0,
          botonFortalecimiento:0,
          botonMedicion: 0,
          botonProyecto: 0,
          botonCapacitacion: 0,
          botonCharla: 0,
          botonReunion: 0,
      }
  },

  methods: {

        contarLineamientos: function() {
            this.botonLineamientos = 0;
            let self = this;
            let id = sessionStorage.getItem('identificador');
            console.log(this.id, this.botonLineamientos);

            this.newLineamientos = {
                "id_rol": id,
                "lineamientos": this.botonLineamientos + 1,
                "socializacion": 0,
                "acompanamiento": 0,
                "fortalecimiento": 0,
                "medicion": 0,
                "proyecto": 0,
                "charla": 0,
                "capacitacion": 0,
                "reunion": 0,
            }

            axios.post("http://127.0.0.1:8000/request/solicitud/", this.newLineamientos)
                .then((result) => {
                    console.log(this.id);
                    console.log(this.botonLineamientos);
                    window.location.href = '/lineamientos';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/lineamientos';
                });
        },

        contarSocializacion: function() {
            this.botonSocializacion = 0;
            let self = this;
            let id = sessionStorage.getItem('identificador');
            console.log(this.id, this.botonSocializacion);

            this.newSocializacion = {
                "id_rol": id,
                "lineamientos": 0,
                "socializacion": this.botonSocializacion + 1,
                "acompanamiento": 0,
                "fortalecimiento": 0,
                "medicion": 0,
                "proyecto": 0,
                "charla": 0,
                "capacitacion": 0,
                "reunion": 0,
            }

            axios.post("http://127.0.0.1:8000/request/solicitud/", this.newSocializacion)
                .then((result) => {
                    console.log(this.id);
                    console.log(this.botonSocializacion);
                    window.location.href = '/socializacion';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/socializacion';
                });
        },

        contarAcompanamiento: function() {
            this.botonAcompanamiento = 0;
            let self = this;
            let id = sessionStorage.getItem('identificador');
            console.log(this.id, this.botonAcompanamiento);

            this.newAcompanamiento = {
                "id_rol": id,
                "lineamientos": 0,
                "socializacion": 0,
                "acompanamiento": this.botonAcompanamiento + 1,
                "fortalecimiento": 0,
                "medicion": 0,
                "proyecto": 0,
                "charla": 0,
                "capacitacion": 0,
                "reunion": 0,
            }

            axios.post("http://127.0.0.1:8000/request/solicitud/", this.newAcompanamiento)
                .then((result) => {
                    console.log(this.id);
                    console.log(this.botonAcompanamiento);
                    window.location.href = '/acompanamiento';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/acompanamiento';
                });
        },

        contarFortalecimiento: function() {
            this.botonFortalecimiento = 0;
            let self = this;
            let id = sessionStorage.getItem('identificador');
            console.log(this.id, this.botonFortalecimiento);

            this.newFortalecimiento = {
                "id_rol": id,
                "lineamientos": 0,
                "socializacion": 0,
                "acompanamiento": 0,
                "fortalecimiento": this.botonFortalecimiento + 1,
                "medicion": 0,
                "proyecto": 0,
                "charla": 0,
                "capacitacion": 0,
                "reunion": 0,
            }

            axios.post("http://127.0.0.1:8000/request/solicitud/", this.newFortalecimiento)
                .then((result) => {
                    console.log(this.id);
                    console.log(this.botonFortalecimiento);
                    window.location.href = '/fortalecimiento';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/fortalecimiento';
                });
        },

        contarMedicion: function() {
            this.botonMedicion = 0;
            let self = this;
            let id = sessionStorage.getItem('identificador');
            console.log(this.id, this.botonMedicion);

            this.newMedicion = {
                "id_rol": id,
                "lineamientos": 0,
                "socializacion": 0,
                "acompanamiento": 0,
                "fortalecimiento": 0,
                "medicion": this.botonMedicion + 1,
                "proyecto": 0,
                "charla": 0,
                "capacitacion": 0,
                "reunion": 0,
            }

            axios.post("http://127.0.0.1:8000/request/solicitud/", this.newMedicion)
                .then((result) => {
                    console.log(this.id);
                    console.log(this.botonMedicion);
                    window.location.href = '/medicion';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/medicion';
                });
        },

        contarProyecto: function() {
            this.botonProyecto = 0;
            let self = this;
            let id = sessionStorage.getItem('identificador');
            console.log(this.id, this.botonProyecto);

            this.newProyecto = {
                "id_rol": id,
                "lineamientos": 0,
                "socializacion": 0,
                "acompanamiento": 0,
                "fortalecimiento": 0,
                "medicion": 0,
                "proyecto": this.botonProyecto + 1,
                "charla": 0,
                "capacitacion": 0,
                "reunion": 0,
            }

            axios.post("http://127.0.0.1:8000/request/solicitud/", this.newProyecto)
                .then((result) => {
                    console.log(this.id);
                    console.log(this.botonProyecto);
                    window.location.href = '/proyecto';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/proyecto';
                });
        },

        contarCharla: function() {
            this.botonCharla = 0;
            let self = this;
            let id = sessionStorage.getItem('identificador');
            console.log(this.id, this.botonCharla);

            this.newCharla = {
                "id_rol": id,
                "lineamientos": 0,
                "socializacion": 0,
                "acompanamiento": 0,
                "fortalecimiento": 0,
                "medicion": 0,
                "proyecto": 0,
                "charla": this.botonCharla + 1,
                "capacitacion": 0,
                "reunion": 0,
            }

            axios.post("http://127.0.0.1:8000/request/solicitud/", this.newCharla)
                .then((result) => {
                    console.log(this.id);
                    console.log(this.botonCharla);
                    window.location.href = '/charla';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/charla';
                });
        },

        contarCapacitacion: function() {
            this.botonCapacitacion = 0;
            let self = this;
            let id = sessionStorage.getItem('identificador');
            console.log(this.id, this.botonCapacitacion);

            this.newCapacitacion = {
                "id_rol": id,
                "lineamientos": 0,
                "socializacion": 0,
                "acompanamiento": 0,
                "fortalecimiento": 0,
                "medicion": 0,
                "proyecto": 0,
                "charla": 0,
                "capacitacion": this.botonCapacitacion + 1,
                "reunion": 0,
            }

            axios.post("http://127.0.0.1:8000/request/solicitud/", this.newCapacitacion)
                .then((result) => {
                    console.log(this.id);
                    console.log(this.botonCapacitacion);
                    window.location.href = '/capacitacion';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/capacitacion';
                });
        },

        contarReunion: function() {
            this.botonReunion = 0;
            let self = this;
            let id = sessionStorage.getItem('identificador');
            console.log(this.id, this.botonReunion);

            this.newReunion = {
                "id_rol": id,
                "lineamientos": 0,
                "socializacion": 0,
                "acompanamiento": 0,
                "fortalecimiento": 0,
                "medicion": 0,
                "proyecto": 0,
                "charla": 0,
                "capacitacion": 0,
                "reunion": this.botonReunion + 1,
            }

            axios.post("http://127.0.0.1:8000/request/solicitud/", this.newReunion)
                .then((result) => {
                    console.log(this.id);
                    console.log(this.botonReunion);
                    window.location.href = '/reunion';
                })
                .catch((error) => {
                    //alert("Error, contacte al administrador del sitio");
                    window.location.href = '/reunion';
                });
        },
  }
}
</script>

<style>
#Request .MigaPan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 100px 30px 100px ;/*top-right-bottom-left*/
}
#Request .MigaPan a {
  color: #004884;
}
#Request .Contenido {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
#Request a {
    border: solid 1px #e6effd;
    background-color: #e6effd;
    text-decoration: none; /*quitar el subrayado del hipervinculo*/
    cursor: pointer;
}
#Request .Encabezado {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    color: #004884;
}

#Request .Encabezado h1{
    font-size: 50px;
    font-weight: lighter;
}
#Request .Encabezado img {
  width: 69px;
  height: 75px;
  margin: 0 11px 0 0;
}
#Request .QUIERO-SABER {
  height: 30px;
  margin: 23px 0 22px 11px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #004884;
}
#Request .descripcion {
  display: flex;
  justify-content: center;
  font-family: "Montserrat",sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #004884;
}
#Request .Lineamientos {
  width: 509px;
  height: 160px;
  margin: 10px 10px 10px 100px;
  padding: 0px 30px 42px 0px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  
}
#Request .Lineamientos img {
  width: 92px;
  height:90px;
  margin: 20px 15px 10px 25px;/*top-right-bottom-left*/
}
#Request .Lineamientos .Lnea-4 {
  width: 0;
  height: 159px;
  margin: 0px 0 43.5px;/*top-right-bottom-left*/
  border: solid 1px #e6effd;
}
#Request .Lineamientos p {
  width: 161px;
  height: 24px;
  margin: 14px 20px 0 0;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Lineamientos h1 {
  width: 226px;
  height: 162px;
  margin: 60px 10px 0 10px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}

#Request .Socializacion {
  width: 509px;
  height: 160px;
  margin: 10px 100px 10px 10px;/*top-right-bottom-left*/
  padding: 0px 30px 42px 0px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}
#Request .Socializacion img {
  width: 92px;
  height:90px;
  margin: 20px 15px 10px 25px;/*top-right-bottom-left*/
}

#Request .Socializacion .Lnea-5 {
  width: 0;
  height: 159px;
  margin: 0px 0 43.5px;/*top-right-bottom-left*/
  border: solid 1px #e6effd;
}

#Request .Socializacion p {
  width: 161px;
  height: 24px;
  margin: 14px 20px 0 0;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Socializacion h1 {
  width: 226px;
  height: 162px;
  margin: 50px 10px 0 10px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Fortalecimiento {
  width: 509px;
  height: 160px;
  margin: 10px 10px 10px 100px;
  padding: 0px 30px 42px 0px;/*top-right-bottom-left*/
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
}
#Request .Fortalecimiento img {
  width: 92px;
  height:90px;
  margin: 20px 15px 10px 45px;/*top-right-bottom-left*/
}

#Request .Fortalecimiento .Lnea-6 {
  width: 0;
  height: 159px;
  margin: 0px 0 43.5px;/*top-right-bottom-left*/
  border: solid 1px #e6effd;
}

#Request .Fortalecimiento p {
  width: 161px;
  height: 24px;
  margin: 14px 20px 0 5px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Fortalecimiento h1 {
  width: 226px;
  height: 162px;
  margin: 50px 10px 0 10px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Acompanamiento {
  width: 509px;
  height: 160px;
  margin: 10px 100px 10px 10px;
  padding: 0px 30px 42px 0px;/*top-right-bottom-left*/
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
}
#Request .Acompanamiento img {
  width: 92px;
  height:80px;
  margin: 30px 25px 10px 50px;/*top-right-bottom-left*/
}

#Request .Acompanamiento .Lnea-7 {
  width: 0;
  height: 159px;
  margin: 0px 0 43.5px;/*top-right-bottom-left*/
  border: solid 1px #e6effd;
}

#Request .Acompanamiento p {
  width: 161px;
  height: 24px;
  margin: 14px 20px 0 5px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Acompanamiento h1 {
  width: 226px;
  height: 162px;
  margin: 40px 10px 0 10px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Medicion {
  width: 509px;
  height: 160px;
  margin: 10px 10px 10px 100px;
  padding: 0px 30px 42px 0px;/*top-right-bottom-left*/
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
}
#Request .Medicion img {
  width:80px;
  height:80px;
  margin: 20px 0 20px 60px;/*top-right-bottom-left*/
}

#Request .Medicion .Lnea-8 {
  width: 0;
  height: 159px;
  margin: 0px 0 43.5px;/*top-right-bottom-left*/
  border: solid 1px #e6effd;
}

#Request .Medicion p {
  width: 161px;
  height: 24px;
  margin: 14px 0px 0px 55px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Medicion h1 {
  width: 226px;
  height: 162px;
  margin: 30px 10px 0 10px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Proyecto {
  width: 509px;
  height: 160px;
  margin: 10px 10px 10px 100px;
  padding: 0px 30px 42px 0px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  
}
#Request .Proyecto img {
  width: 120px;
  height:60px;
  margin: 30px 15px 25px 20px;/*top-right-bottom-left*/
}
#Request .Proyecto .Lnea-4 {
  width: 0;
  height: 159px;
  margin: 0px 0 43.5px;/*top-right-bottom-left*/
  border: solid 1px #e6effd;
}
#Request .Proyecto p {
  width: 161px;
  height: 24px;
  margin: 14px 20px 0 0;/*top-right-bottom-left*/
  padding-left: 30px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Proyecto h1 {
  width: 226px;
  height: 162px;
  margin: 50px 10px 0 10px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}

#Request .Contenidoreunion {
    display: flex;
    justify-content: center;
}
#Request .Reunion {
  width: 509px;
  height: 160px;
  margin: 10px 10px 10px 10px;
  padding: 0px 30px 42px 0px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}
#Request .Reunion img {
  width: 72px;
  height:50px;
  margin: 40px 25px 30px 40px;/*top-right-bottom-left*/
}
#Request .Reunion .Lnea-4 {
  width: 0;
  height: 159px;
  margin: 0px 0 43.5px;/*top-right-bottom-left*/
  border: solid 1px #e6effd;
}
#Request .Reunion p {
  width: 161px;
  height: 24px;
  margin: 14px 20px 0 0;/*top-right-bottom-left*/
  padding-left: 37px; 
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Reunion h1 {
  width: 226px;
  height: 162px;
  margin: 25px 10px 0 10px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Charla {
  width: 509px;
  height: 160px;
  margin: 10px 100px 10px 10px;/*top-right-bottom-left*/
  padding: 0px 30px 42px 0px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}
#Request .Charla img {
  width: 92px;
  height:90px;
  margin: 20px 15px 10px 25px;/*top-right-bottom-left*/
}

#Request .Charla .Lnea-5 {
  width: 0;
  height: 159px;
  margin: 0px 0 43.5px;/*top-right-bottom-left*/
  border: solid 1px #e6effd;
}

#Request .Charla p {
  width: 161px;
  height: 24px;
  margin: 14px 20px 0 0;/*top-right-bottom-left*/
  padding-left: 40px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Charla h1 {
  width: 226px;
  height: 162px;
  margin: 60px 10px 0 10px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Capacitacion {
  width: 509px;
  height: 160px;
  margin: 10px 10px 10px 100px;
  padding: 0px 30px 42px 0px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  
}
#Request .Capacitacion img {
  width: 92px;
  height:90px;
  margin: 20px 15px 10px 25px;/*top-right-bottom-left*/
}
#Request .Capacitacion .Lnea-4 {
  width: 0;
  height: 159px;
  margin: 0px 0 43.5px;/*top-right-bottom-left*/
  border: solid 1px #e6effd;
}
#Request .Capacitacion p {
  width: 161px;
  height: 24px;
  margin: 14px 20px 0 0;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
#Request .Capacitacion h1 {
  width: 226px;
  height: 162px;
  margin: 60px 10px 0 10px;/*top-right-bottom-left*/
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #004884;
}
</style>
       