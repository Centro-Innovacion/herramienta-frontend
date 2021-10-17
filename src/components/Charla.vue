<template>
  <div id="Charla">

    <div class="MigaPan">
        <a href= "/menu">Regresar al menú de temas</a>
    </div>

    <br>

      <div class="Titulo">
        <h4>SOLICITUD DE CHARLA</h4>
      </div>

    <br>
    <div class="Subtitulo">
      <p>Proporciona mayor información sobre tu solicitud</p>
    </div>
    
  <div class="Textarea">
      <p>1. Por favor escribe tu solicitud de manera detallada:</p>
      <span>Caracteres restantes: {{limite - mensaje.length}}</span>
      <textarea
        id ="texto_charla"
        cols="50"
        rows="3"
        class="form-control"
        v-model="mensaje"
        maxlenght="1000"
        >
      </textarea>
    </div>

     <div class="num_personas"> 
      <label>2. Registra el número de personas que asistirán a la charla: </label>
      <br>
      <input type="number" name="num_personas" id="personas_charla">
     </div>

      <div class="modalidad">
      <label>3. Selecciona la modalidad de la charla:</label>
      <br>
      <select name="select" id="modalidad_charla">
        <option hidden selected>Selecciona una opción</option>
        <option value="virtual">Virtual</option>
        <option value="presencial">Presencial</option>
      </select>
      </div>

    <div class="tema">
      <label for="Tema" class="Tema">4. Selecciona el tema de la charla:
        <span class="obligatorio">*</span>
      </label>
      <select name="select" id="tema_charla">
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
        <input type="text" name="otro_tema" id="otro_tema_charla">
    </div>

    <div class="calendario">
    <label for="Calendario" class="Calendario">5. Selecciona una fecha disponible en el calendario para la charla:
        <span class="obligatorio">*</span>
        <br>
        <p>
          Ten en cuenta que únicamente podrás programar charlas a partir de catorce días calendario desde la fecha de hoy.
        </p> 
      </label>
      <br>
  
      <b-calendar 
        v-model="value" 
        :date-disabled-fn="dateDisabled" 
        selected-variant="info"
        today-variant="info"
        nav-button-variant="primary" 
        :min="min" 
        :max="max" 
        locale="es"
        id = "fecha_charla">
      </b-calendar>
      <br>
      </div>

    <div class="correo">
      <label for="correo" class="correo">6. Escribe tu correo electrónico:
            <span class="obligatorio">*</span>
      </label>
      <div class="correotext">
        <b-form-group 
              id="input-group" 
              label-for="input"
              >
              <b-form-input
              id="correo_charla"
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
        href="/privacidad"
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
      <b-button type="submit" variant="primary" :disabled="!(checkedNames&&checkedNames1)" v-on:click="crearCitaCharla()">Enviar</b-button>
      <b-modal ref="my-modal" hide-footer title="Solicitud recibida">
      <div class="d-block text-center">
        <h3>
          Tu solicitud ha sido recibida y pronto nos pondremos en contacto contigo.
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
  name: "Charla",
  data: function (){
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    //minDate.setMonth(minDate.getMonth())
    minDate.setDate(now.getDate()+14)
    // 15th in two months
    //const maxDate = new Date(today)
    //maxDate.setMonth(maxDate.getMonth() + 1)
    //maxDate.setDate(15)

    return {
      min: minDate,
      choices:[],
      municipios: null,
      selectedMunicipio: -1,
      selectedOption: '',  
      value: '',
      text: null,
      limite: 1000,
      mensaje: '',
      checkedNames: null,
      checkedNames1: null,
      texto_charla: '',
      personas_charla: 0,
      modalidad_charla: '',
      tema_charla: '',
      otro_tema_charla: '',
      fecha_charla: '',
      correo_charla: '',         
  }
},
    methods:{

      dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()
      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 6 

      //if ((document.getElementById("tema_reunion").value) === "Datos abiertos"){
      //return weekday === 5
      //}
    },
    
      hideModal() {
        this.$refs['my-modal'].hide(),
        window.location.href = '/home'
      },

      crearCitaCharla: function() {
        this.texto_charla = document.getElementById("texto_charla").value;
        this.personas_charla = document.getElementById("personas_charla").value;
        this.modalidad_charla = document.getElementById("modalidad_charla").value;
        this.tema_charla = document.getElementById("tema_charla").value;
        this.otro_tema_charla = document.getElementById("otro_tema_charla").value;
        this.fecha_charla = document.getElementById("fecha_charla").value;
        this.correo_charla = document.getElementById("correo_charla").value;
        let self = this;
        let id = sessionStorage.getItem('identificador');

        if(this.texto_charla!== '' && this.personas_charla !== '' && this.modalidad_charla!==''
          && this.fecha_charla !=='' && this.correo_charla !=='')
        {

          this.newCitaCharla = {
            "id_rol": id,
            "texto_charla": this.texto_charla,
            "personas_charla": this.personas_charla,
            "modalidad_charla": this.modalidad_charla,
            "tema_charla": this.tema_charla,
            "otro_tema_charla": this.otro_tema_charla,
            "fecha_charla": this.fecha_charla,
            "correo_charla": this.correo_charla,
          }
        
        
        axios.post("http://127.0.0.1:8000/charla/crear/", this.newCitaCharla)
          .then((result) => {
            this.$refs['my-modal'].show()
          })
          .catch((error) => {
            alert("Recuerde que el texto de la solicitud no puede superar los 1000 caracteres");
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
#Charla .MigaPan {
  text-align: center;
}
#Charla .MigaPan a {
  color: #004884;
}
#Charla .Titulo {
  display: flex;
  justify-content: center;
}
#Charla .Titulo h4 {
  font-family: Montserrat;
  color: #004884;
  font-size: 36px;
  font-weight: bold;
}
#Charla .Subtitulo {
  display: flex;
  justify-content: center;
}
#Charla .Subtitulo p {
  font-family: Montserrat;
  color: #004884;
  font-size: 24px;
  font-weight: bold;
}
#Charla .temas {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Charla .calendario {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Charla .temas label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Charla .calendario label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Charla .calendario p {
  color: #f42f63;
  font-size: 15px;
  font-weight:normal;
}
#Charla .temas p {
  font-family: Montserrat;
  color: #004884;
  margin: 0px 0px 0px 0px;/*top-right-bottom-left*/
}
#Charla .temas span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Charla .num_personas {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Charla .num_personas span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Charla .Textarea p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Charla .termycond {
  margin: 0px 0px 0 470px;/*top-right-bottom-left*/;
}
#Charla .num_personas label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Charla .modalidad {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Charla .modalidad span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Charla .modalidad label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Charla .otra {
  margin: 0 700px 0 0;
}
#Charla .correotext {
  margin: 0 500px 0 0;
}
#Charla .Textarea {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Charla .Textarea label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Charla .Textarea span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: light;
  font-family: Montserrat;
}
#Charla .correo{
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Charla .correo label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Charla .correo span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Charla .boton {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
#Charla .tema p {
  font-size: 12px;
  color: #f42f63;
}
#Charla .tema {
  margin: 20px 700px 0 100px;/*top-right-bottom-left*/
  display: flex;
  flex-direction: column;
}
#Charla .tema label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Charla .otro label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Charla .otro {
  margin: 20px 700px 0 100px;/*top-right-bottom-left*/
  display: flex;
  flex-direction: column;
}
#Charla .d-block, .text-center {
  color: #004884;
  font-family: Montserrat;
}
</style>