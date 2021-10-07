<template>
  <div id="Proyecto">

    <div class="MigaPan">
      <a href= "/menu">Regresar al menú de temas</a> 
    </div>
    <br>

    <div class="Titulo">
      <h4>ACOMPAÑAMIENTO PARA UN PROYECTO</h4>
    </div>

    <br>

    <div class="Subtitulo">
      <p>Proporciona mayor información sobre tu solicitud</p>
    </div>
    <div class="Textarea">
      <p>1. Por favor escribe tu solicitud de manera detallada:</p>
      <span>Caracteres restantes: {{limite - mensaje.length}}</span>
      <textarea
        id ="texto_proyecto"
        cols="50"
        rows="3"
        class="form-control"
        v-model="mensaje"
        maxlenght="1000"
        >
      </textarea>
    </div>

    <div class="tema">
      <label for="Tema" class="Tema">2. Selecciona el tema del proyecto:
        <span class="obligatorio">*</span>
      </label>
      <select name="select" id="tema_proyecto">
        <option value="" selected>Selecciona una opción</option>
        <option value="adopcion de IPv6">Adopción de IPv6</option>
        <option value="innovacion publica digital">Innovación pública digital</option>
        <option value="ciudades y territorios inteligentes">Ciudades y territorios inteligentes</option>
        <option value="datos abiertos">Datos abiertos</option>
        <option value="espacio colaborativo data sandbox">Espacio colaborativo Data Sandbox</option>
        <option value="gov.co/territorial">GOV.CO/Territorial</option>
        <option value="infraestructura de datos">Infraestructura de datos</option>
        <option value="marco de arquitectura empresarial">Marco de arquitectura empresarial</option>
        <option value="marco de interoperabilidad">Marco de interoperabilidad</option>
        <option value="marco de transformacion digital">Marco de transformación digital</option>
        <option value="mi colombia digital">Mi Colombia digital</option>
        <option value="maxima velocidad">Máxima velocidad</option>
        <option value="portal unico del estado colombiano">Portal único del Estado colombiano</option>
        <option value="seguridad y privacidad de la información">Seguridad y privacidad de la información</option>
        <option value="sello de excelencia gobierno digital">Sello de excelencia de Gobierno Digital</option>
        <option value="servicios ciudadanos digitales">Servicios ciudadanos digitales</option>
        <option value="software libre">Software libre</option>
        <option value="tecnologias emergentes">Tecnologías emergentes</option>
        <option value="transformate con gobierno digital">Transfórmate con Gobierno Digital</option>
        <option value="transparencia y accesibilidad web">Transparencia y accesibilidad web</option>
        <option value="urna de cristal">Urna de cristal</option>
      </select>
    </div>

    <div class="otro">
        <label for="tema" class="tema">Otro: </label>
        <input type="text" name="otro_tema" id="otro_tema_proyecto">
    </div>

    <div class="correo">
      <label for="correo" class="correo">4. Escribe tu correo electrónico:
        <span class="obligatorio">*</span>
      </label>
      <div class="correotext">
        <b-form-group 
          id="input-group" 
          label-for="input"
          >
          <b-form-input
          id="correo_proyecto"
          placeholder="Correo electrónico"
          ></b-form-input>
        </b-form-group>
      </div>
      </div>
    <br>
    <div class='termycond'>
      <input type="checkbox" id="politica" value="Politica" v-model="checkedNames">
      <label for="politica">
        <a
        href="https://www.mintic.gov.co/portal/715/articles-62124_politica_tratamiento_datos_personales_u20200917.pdf"
        target="_blank"
        >Autorizo el tratamiento de datos personales</a>
      </label>
      <br>
      <input type="checkbox" id="terminos" value="Terminos" v-model="checkedNames1">
      <label for="terminos">
        <a
        href="/terminos"
        target="_blank"
        >Acepto los términos y condiciones</a>
      </label>
      <br>
    </div>
    <div class="boton">
      <b-button type="submit" variant="primary" :disabled="!(checkedNames&&checkedNames1)" v-on:click="crearCitaProyecto()">Enviar</b-button>
      <b-modal ref="my-modal" hide-footer title="Solicitud recibida">
      <div class="d-block text-center">
        <h3>
          Tu solicitud ha sido recibida y pronto nos pondremos en contacto contigo.
          <br>
          Ya puedes cerrar esta ventana.
        </h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cerrar</b-button>
    </b-modal>  
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Proyecto",
  data: function (){
    return {
      mensaje:'',
      limite: 1000,
      value: '',
      temas: null,
      checkedNames: null,
      checkedNames1: null,
      text: '',
      texto_proyecto: '',
      tema_proyecto: '',
      otro_tema_proyecto: '',
      correo_proyecto: '',
    }    
  },                
  methods: {

    hideModal() {
        this.$refs['my-modal'].hide(),
        window.location.href = '/home'
      },
        
    crearCitaProyecto: function() {
      this.texto_proyecto = document.getElementById("texto_proyecto").value;
      this.tema_proyecto = document.getElementById("tema_proyecto").value;
      this.otro_tema_proyecto = document.getElementById("otro_tema_proyecto").value;
      this.correo_proyecto = document.getElementById("correo_proyecto").value;
      
      let self = this;
      let id = sessionStorage.getItem('identificador');
      
      if(this.texto_proyecto!== '' && this.correo_proyecto!=='')
      {
        this.newCitaProyecto = {
          "id_rol": id,
          "texto_proyecto": this.texto_proyecto,
          "tema_proyecto": this.tema_proyecto,
          "otro_tema_proyecto": this.otro_tema_proyecto,
          "correo_proyecto": this.correo_proyecto,
        }
      
      
      axios.post("http://127.0.0.1:8000/proyecto/crear/", this.newCitaProyecto)
        .then((result) => {
          this.$refs['my-modal'].show()
        })
        .catch((error) => {
          alert("Actualiza la página. Error 1");
          window.location.href = '/home'
        });  
    }
    else {
          alert("Debes completar todos los campos antes de continuar");
          }
    }
  }
}
</script>

<style>
#Proyecto .MigaPan {
  text-align: center;
}
#Proyecto .MigaPan a {
  color: #004884;
}
#Proyecto .Titulo {
  display: flex;
  justify-content: center;
}
#Proyecto .Titulo h4 {
  font-family: Montserrat;
  color: #004884;
  font-size: 36px;
  font-weight: bold;
}
#Proyecto .Subtitulo {
  display: flex;
  justify-content: center;
}
#Proyecto .Subtitulo p {
  font-family: Montserrat;
  color: #004884;
  font-size: 24px;
  font-weight: bold;
}

#Proyecto .tema p {
  font-size: 12px;
  color: #f42f63;
}
#Proyecto .tema {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
  display: flex;
  flex-direction: column;
}
#Proyecto .otro {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
  display: flex;
  flex-direction: column;
}
#Proyecto .tema select {
  margin-right: 500px;
}
#Proyecto .Calendario {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Proyecto .Hora {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Proyecto .termycond {
  margin: 0px 0px 0 470px;/*top-right-bottom-left*/;
}
#Proyecto .terminos{
  display: flex;
  justify-content: center;
}
#Proyecto .tratamiento{
  margin: 20px 0 0 0;
  display: flex;
  justify-content: center;
}
#Proyecto .Hora p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Proyecto .otro input {
  margin: 0px 500px 20px 0px;/*top-right-bottom-left*/
}
#Proyecto .Calendario label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Proyecto .Textarea span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: light;
  font-family: Montserrat;
}
#Proyecto .tema label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Proyecto .otro label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Proyecto .tema p {
  font-family: Montserrat;
  color: #f42f53;
  font-weight: normal;
  font-size: 15px;
  margin: 0px 0px 0px 0px;/*top-right-bottom-left*/
}
#Proyecto .tema span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Proyecto .correo{
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Proyecto .correo label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Proyecto .correo span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Proyecto .correotext {
  margin: 0 500px 0 0;
}
#Proyecto .Textarea {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Proyecto .Textarea p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Proyecto .boton {
  margin: 40px 0 0 0;
  display: flex;
  justify-content: center;
}
</style>