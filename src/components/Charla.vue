<template>
  <div id="Charla">

    <div class="MigaPan">
        <a href= "/request">Regresar al menú de temas</a> 
        <a href= "/evaluar">Si no encontraste lo que buscabas y deseas radicar una solicitud haz click aquí</a>
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
        <option value="value1">Virtual</option>
        <option value="value2">Presencial</option>
      </select>
      </div>

    <div class="temas">
      <label for="tema" class="tema">4. Selecciona el tema relacionado con tu solicitud:
            <span class="obligatorio">*</span>
      </label>
      <div v-for="n, i in 1" id="tema_charla">
        <p><input type="radio" value="ipv6" v-model="choices[i]">Adopción de IPv6</p>
        <p><input type="radio" value="innovacion" v-model="choices[i]">Innovación Pública Digital</p>
        <p><input type="radio" value="ciudades" v-model="choices[i]">Ciudades y Territorios Inteligentes</p>
        <p><input type="radio" value="datos" v-model="choices[i]">Datos Abiertos</p>
        <p><input type="radio" value="sandbox" v-model="choices[i]">Espacio Colaborativo Data Sandbox</p>
        <p><input type="radio" value="govco" v-model="choices[i]">Gov.co/Territorial</p>
        <p><input type="radio" value="arquitectura" v-model="choices[i]">Marco de Arquitectura Empresarial</p>
        <p><input type="radio" value="interoperabilidad" v-model="choices[i]">Marco de Interoperabilidad</p>
        <p><input type="radio" value="transformacion" v-model="choices[i]">Marco de Transformación Digital</p>
        <p><input type="radio" value="digital" v-model="choices[i]">Mi Colombia Digital</p>
        <p><input type="radio" value="maxima" v-model="choices[i]">Máxima Velocidad</p>
        <p><input type="radio" value="portal" v-model="choices[i]">Portal único del Estado Colombiano</p>
        <p><input type="radio" value="seguridad" v-model="choices[i]">Seguridad y Privacidad de la Información</p>
        <p><input type="radio" value="sello" v-model="choices[i]">Sello de Excelencia Gobierno Digital</p>
        <p><input type="radio" value="scd" v-model="choices[i]">Servicios Ciudadanos Digitales</p>
        <p><input type="radio" value="libre" v-model="choices[i]">Software Libre</p>
        <p><input type="radio" value="emergentes" v-model="choices[i]">Tecnologías Emergentes</p>
        <p><input type="radio" value="gobierno" v-model="choices[i]">Transfórmate con Gobierno Digital</p>
        <p><input type="radio" value="transparencia" v-model="choices[i]">Transparencia y Accesibilidad Web</p>
        <p><input type="radio" value="urna" v-model="choices[i]">Urna de Cristal</p>
        <p><input type="radio" value="otro" v-model="choices[i]">Otro</p>
        <div class="otra">
          <b-form-group 
              id="input-group" 
              >
              <b-form-input
              id="otro_tema_charla"
              placeholder="¿Cuál?"
              ></b-form-input>
          </b-form-group>
        </div>
      </div>
    </div>

    <div class="calendario">
    <label for="Calendario" class="Calendario">5. Selecciona una fecha disponible en el calendario para la reunión:
        <span class="obligatorio">*</span>
        <br>
        <p>
          Ten en cuenta que únicamente podrás programar charlas a partir de siete días calendario desde la fecha de hoy.
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
    minDate.setDate(now.getDate()+7)
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

      if(this.texto_capacitacion!== '' && this.personas_capacitacion !== '' && this.modalidad_capacitacion!==''
        && this.tema_capacitacion!=='' && this.fecha_capacitacion !=='' && this.correo_capacitacion !=='')
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
      
      
      axios.post("http://127.0.0.1:8000/charla/create/", this.newCitaCharla)
        .then((result) => {
          this.$refs['my-modal'].show(),
          document.getElementById("texto_charla").value = "",
          document.getElementById("personas_charla").value = "",
          document.getElementById("modalidad_charla").value = "",
          document.getElementById("tema_charla").value = null,
          document.getElementById("otro_tema_charla").value = null,
          document.getElementById("fecha_charla").value = null
          document.getElementById("correo_charla").value = null
        })
        .catch((error) => {
          //alert("Recuerde que el texto de la solicitud no puede superar los 1000 caracteres");
          this.$refs['my-modal'].show()
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 100px 30px 100px ;/*top-right-bottom-left*/
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
</style>