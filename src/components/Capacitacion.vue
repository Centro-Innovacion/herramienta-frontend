<template>
  <div id="Capacitacion">

    <div class="MigaPan">
      <a href= "/menu">Regresar al menú de temas</a>
    </div>
    <br>

    <div class="Titulo">
      <h4>SOLICITUD DE CAPACITACIÓN</h4>
    </div>

    <br>

    <div class="Subtitulo">
      <p>Proporciona mayor información sobre tu solicitud</p>
    </div>
    <div class="Textarea">
      <p>1. Por favor escribe tu solicitud de manera detallada:</p>
      <span>Caracteres restantes: {{limite - mensaje.length}}</span>
      <textarea
        id ="texto_capacitacion"
        cols="50"
        rows="3"
        class="form-control"
        v-model="mensaje"
        maxlenght="1000"
        >
      </textarea>
    </div>

    <div class="num_personas"> 
      <label>2. Registra el número de personas que asistirán a la capacitación: </label>
      <br>
      <input type="number" name="num_personas" id="personas_capacitacion">
     </div>

      <div class="modalidad">
      <label>3. Selecciona la modalidad de la capacitación:</label>
      <br>
      <select name="select_modalidad" id="modalidad_capacitacion">
        <option value="" selected>Selecciona una opción</option>
        <option value="Virtual">Virtual</option>
        <option value="Presencial">Presencial</option>
      </select>
      </div>

    <div class="tema">
      <label for="Tema" class="Tema">2. Selecciona el tema de la capacitación:
        <span class="obligatorio">*</span>
      </label>
      <select name="select_tema" id="tema_capacitacion">
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
        <input type="text" name="otro_tema" id="otro_tema_capacitacion">
    </div>

    <div class="calendario">
    <label for="Calendario" class="Calendario">5. Selecciona una fecha disponible en el calendario para la capacitación:
        <span class="obligatorio">*</span>
        <br>
        <p>
          Ten en cuenta que únicamente podrás programar capacitaciones a partir de siete días calendario desde la fecha de hoy.
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
        id = "fecha_capacitacion">
      </b-calendar>
      <br>
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
          id="correo_capacitacion"
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
      <b-button type="submit" variant="primary" :disabled="!(checkedNames&&checkedNames1)" v-on:click="crearCitaCapacitacion()">Enviar</b-button>
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
  name: "Capacitacion",
  data: function (){
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    //minDate.setMonth(minDate.getMonth())
    minDate.setDate(now.getDate()+7)
    // 15th in two months
    //const maxDate = new Date(today)
    //maxDate.setMonth(maxDate.getMonth() + 1)
    //maxDate.setDate(15)

    return {
      min: minDate,
      mensaje:'',
      limite: 1000,
      value: '',
      temas: null,
      checkedNames: null,
      checkedNames1: null,
      text: '',
      texto_capacitacion: '',
      personas_capacitacion: 0,
      modalidad_capacitacion: '',
      tema_capacitacion: '',
      otro_tema_capacitacion: '',
      fecha_capacitacion: '',
      correo_capacitacion: '',
    }    
  },                
  methods: {

    hideModal() {
        this.$refs['my-modal'].hide(),
        window.location.href = '/home'
      },
        
    crearCitaCapacitacion: function() {
      this.texto_capacitacion = document.getElementById("texto_capacitacion").value;
      this.personas_capacitacion = document.getElementById("personas_capacitacion").value;
      this.modalidad_capacitacion = document.getElementById("modalidad_capacitacion").value;
      this.tema_capacitacion = document.getElementById("tema_capacitacion").value;
      this.otro_tema_capacitacion = document.getElementById("otro_tema_capacitacion").value;
      this.fecha_capacitacion = document.getElementById("fecha_capacitacion").value;
      this.correo_capacitacion = document.getElementById("correo_capacitacion").value;
      
      let self = this;
      let id = sessionStorage.getItem('identificador');
      
      if(this.texto_capacitacion!== '' && this.personas_capacitacion!=='' && this.modalidad_capacitacion!==''
      && this.fecha_capacitacion!=='' && this.correo_capacitacion!=='')
      {
        this.newCitaCapacitacion = {
          "id_rol": id,
          "texto_capacitacion": this.texto_capacitacion,
          "personas_capacitacion": this.personas_capacitacion,
          "modalidad_capacitacion": this.modalidad_capacitacion,
          "tema_capacitacion": this.tema_capacitacion,
          "otro_tema_capacitacion": this.otro_tema_capacitacion,
          "fecha_capacitacion": this.fecha_capacitacion,
          "correo_capacitacion": this.correo_capacitacion,
        }
      
      
      axios.post("http://127.0.0.1:8000/capacitacion/crear/", this.newCitaCapacitacion)
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
#Capacitacion .MigaPan {
  text-align: center;
}
#Capacitacion .MigaPan a {
  color: #004884;
}
#Capacitacion .Titulo {
  display: flex;
  justify-content: center;
}
#Capacitacion .Titulo h4 {
  font-family: Montserrat;
  color: #004884;
  font-size: 36px;
  font-weight: bold;
}
#Capacitacion .Subtitulo {
  display: flex;
  justify-content: center;
}
#Capacitacion .Subtitulo p {
  font-family: Montserrat;
  color: #004884;
  font-size: 24px;
  font-weight: bold;
}
#Capacitacion .temas {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Capacitacion .calendario {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Capacitacion .temas label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Capacitacion .calendario label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Capacitacion .calendario p {
  color: #f42f63;
  font-size: 15px;
  font-weight:normal;
}
#Capacitacion .temas p {
  font-family: Montserrat;
  color: #004884;
  margin: 0px 0px 0px 0px;/*top-right-bottom-left*/
}
#Capacitacion .temas span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Capacitacion .num_personas {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Capacitacion .num_personas span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Capacitacion .Textarea p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Capacitacion .termycond {
  margin: 0px 0px 0 470px;/*top-right-bottom-left*/;
}
#Capacitacion .num_personas label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Capacitacion .modalidad {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Capacitacion .modalidad span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Capacitacion .modalidad label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Capacitacion .otra {
  margin: 0 700px 0 0;
}
#Capacitacion .correotext {
  margin: 0 500px 0 0;
}
#Capacitacion .Textarea {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Capacitacion .Textarea label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Capacitacion .Textarea span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: light;
  font-family: Montserrat;
}
#Capacitacion .correo{
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Capacitacion .correo label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Capacitacion .correo span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Capacitacion .boton {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
#Capacitacion .tema p {
  font-size: 12px;
  color: #f42f63;
}
#Capacitacion .tema {
  margin: 20px 700px 0 100px;/*top-right-bottom-left*/
  display: flex;
  flex-direction: column;
}
#Capacitacion .tema label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Capacitacion .otro label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Capacitacion .otro {
  margin: 20px 700px 0 100px;/*top-right-bottom-left*/
  display: flex;
  flex-direction: column;
}
</style>