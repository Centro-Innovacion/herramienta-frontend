<template>
  <div id="Reunion">

    <div class="MigaPan">
      <a href= "/request">Regresar al menú de temas</a> 
      <a href= "/evaluar">Si no encontraste lo que buscabas y deseas radicar una solicitud haz click aquí</a>
    </div>
    <br>

    <div class="Titulo">
      <h4>SOLICITUD DE REUNIÓN</h4>
    </div>

    <br>

    <div class="Subtitulo">
      <p>Proporciona mayor información sobre tu solicitud</p>
    </div>
    <div class="Textarea">
      <p>1. Por favor escribe tu solicitud de manera detallada:</p>
      <span>Caracteres restantes: {{limite - mensaje.length}}</span>
      <textarea
        id ="texto_reunion"
        cols="50"
        rows="3"
        class="form-control"
        v-model="mensaje"
        maxlenght="1000"
        v-on:keyup="parar()"
        >
      </textarea>
    </div>

    <div class="tema">
      <label for="Tema" class="Tema">2. Selecciona el tema de la reunión:
        <span class="obligatorio">*</span>
      </label>
      
      <select v-model="selectedTema" @change="selectTema">
        <option v-for="(tema,index) in temas" :key="tema.id" :value="index">{{ tema.label }}</option>
      </select>
      <br>

    <label for="Calendario" class="Calendario">3. Selecciona una fecha disponible en el calendario para la reunión:
        <span class="obligatorio">*</span>
        <br>
        <p>
          Ten en cuenta que únicamente podrás programar reuniones para los días miércoles o viernes
          y a partir de siete días calendario desde la fecha de hoy.
        </p> 
      </label>
  
      <b-calendar 
        v-model="value" 
        :date-disabled-fn="dateDisabled" 
        selected-variant="info"
        today-variant="info"
        nav-button-variant="primary" 
        :min="min" 
        :max="max" 
        width: block
        locale="es"
        id = "fecha_reunion">
      </b-calendar>
      <br>
      <label for="Hora" class="Hora">4. Selecciona la hora de la reunión:
        <span class="obligatorio">*</span>
      </label>
      <select id = "hora_reunion" v-model="selectedHora" >
        <option id = "tema_reunion" v-for="hora in temas[selectedTema].options" :key="hora.id">{{ hora }}</option>
      </select>
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
          id="correo_reunion"
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
      <b-button type="submit" variant="primary" :disabled="!(checkedNames&&checkedNames1)" v-on:click="crearCitaReunion()">Enviar</b-button>
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
  name: "Reunion",
  data: function (){
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    //minDate.setMonth(minDate.getMonth())
    minDate.setDate(now.getDate() + 7)
    // 15th in two months
    //const maxDate = new Date(today)
    //maxDate.setMonth(maxDate.getMonth() + 1)
    //maxDate.setDate(15)
    return {
      mensaje:'',
      limite: 1000,
      value: '',
      min: minDate,
      //max: maxDate,
      tema: '',
      fecha: '',
      hora: '',
      temas: null,
      selectedTema: 0,
      selectedHora: '',
      checkedNames: null,
      checkedNames1: null,
      text: '',
      
      temas:[{ label: 'Selecciona una opción de la lista', value: null },
          {
              label:"Ciudades y Territorios inteligentes",
              options:["Ciudades y Territorios inteligentes", "7:30 - 8:00 am"]
          },
          {
              label:"Datos abiertos",
              options:["Datos abiertos", "7:30 - 8:00 am"]
          },
          {
              label:"Espacio colaborativo Data Sandbox",
              options:["Espacio colaborativo Data Sandbox", "7:30 - 8:00 am"]
          },
          {
              label:"Máxima velocidad",
              options:["Máxima velocidad", "7:30 - 8:00 am"]
          },
          {
              label:"Sello de excelencia Gobierno Digital",
              options:["Sello de excelencia Gobierno Digital", "7:30 - 8:00 am"]
          },
          {
              label:"Software Libre",
              options:["Software Libre", "7:30 - 8:00 am"]
          },
          {
              label:"Transfórmate con Gobierno Digital",
              options:["Transfórmate con Gobierno Digital", "7:30 - 8:00 am"]
          },
          {
              label:"Adopción de IPv6",
              options:["Adopción de IPv6", "7:30 - 8:00 am"]
          },
          {
              label:"Marco de arquitectura empresarial",
              options:["Marco de arquitectura empresarial", "7:30 - 8:00 am"]
          },
          {
              label:"Marco de interoperabilidad",
              options:["Marco de interoperabilidad", "7:30 - 8:00 am"]
          },
          {
              label:"Seguridad y privacidad de la información",
              options:["Seguridad y privacidad de la información", "7:30 - 8:00 am"]
          },
          {
              label:"Gov.co/Territorial",
              options:["Gov.co/Territorial", "7:30 - 8:00 am"]
          },
          {
              label:"Portal único del Estado colombiano",
              options:["Portal único del Estado colombiano", "7:30 - 8:00 am"]
          },
          {
              label:"Innovación pública digital",
              options:["Innovación pública digital", "7:30 - 8:00 am"]
          },
          {
              label:"Urna de cristal",
              options:["Urna de cristal", "7:30 - 8:00 am"]
          },
          {
              label:"Tecnologías emergentes",
              options:["Tecnologías emergentes", "7:30 - 8:00 am"]
          },
      ]
    }    
  },                
  methods: {

    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()
      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 1 || weekday === 2 || weekday === 4 || weekday === 6 

      //if ((document.getElementById("tema_reunion").value) === "Datos abiertos"){
      //return weekday === 5
      //}
    },

    onSubmit(event) {
        event.preventDefault()
        },

    hideModal() {
        this.$refs['my-modal'].hide(),
        window.location.href = '/home'
      },

    onKeyDown: function() {
      if (this.mensaje.lenght > this.limite){
          mensaje.lenght = mensaje.lenght
      }
    },
    
    onSubmit(event) {
        event.preventDefault()
        },

    parar: function() {
      if(mensaje.lenght >= limit){
        mensaje.lenght = limit
      }
    },
        
    crearCitaReunion: function() {
      this.texto_reunion = document.getElementById("texto_reunion").value;
      this.fecha_reunion = document.getElementById("fecha_reunion").value;
      this.correo_reunion = document.getElementById("correo_reunion").value;
      this.tema_reunion = document.getElementById("tema_reunion").value;
      this.hora_reunion = document.getElementById("hora_reunion").value;
      let self = this;
      let id = sessionStorage.getItem('identificador');

      if(this.texto_reunion!== '' && this.fecha_reunion !== '' && this.correo_reunion!==''
        && this.tema_reunion!=='' && this.hora_reunion !=='')
      {

        this.newCitaReunion = {
          "id_rol": id,
          "texto_reunion": this.texto_reunion,
          "tema_reunion": this.tema_reunion,
          "fecha_reunion": this.fecha_reunion,
          "hora_reunion": this.hora_reunion,
          "correo_reunion": this.correo_reunion,
        }
      
      
      axios.post("http://127.0.0.1:8000/meeting/create/", this.newCitaReunion)
        .then((result) => {
          this.$refs['my-modal'].show(),
          document.getElementById("texto_reunion").value = "",
          document.getElementById("fecha_reunion").value = "",
          document.getElementById("correo_reunion").value = "",
          document.getElementById("tema_reunion").value = null,
          document.getElementById("hora_reunion").value = null
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
#Reunion .MigaPan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 100px 30px 100px ;/*top-right-bottom-left*/
}
#Reunion .MigaPan a {
  color: #004884;
}
#Reunion .Titulo {
  display: flex;
  justify-content: center;
}
#Reunion .Titulo h4 {
  font-family: Montserrat;
  color: #004884;
  font-size: 36px;
  font-weight: bold;
}
#Reunion .Subtitulo {
  display: flex;
  justify-content: center;
}
#Reunion .Subtitulo p {
  font-family: Montserrat;
  color: #004884;
  font-size: 24px;
  font-weight: bold;
}
#Reunion .tema p {
  font-size: 12px;
  color: #f42f63;
}
#Reunion .tema {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
  display: flex;
  flex-direction: column;
}
#Reunion .tema select {
  margin-right: 500px;
}
#Reunion .Calendario {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Reunion .Calendario p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Reunion .Hora {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Reunion .termycond {
  margin: 0px 0px 0 470px;/*top-right-bottom-left*/;
}
#Reunion .terminos{
  display: flex;
  justify-content: center;
}
#Reunion .tratamiento{
  margin: 20px 0 0 0;
  display: flex;
  justify-content: center;
}
#Reunion .Hora p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Reunion .Calendario label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Reunion .Textarea span {
  color: #004884;
  font-family: Montserrat;
}
#Reunion .tema label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Reunion .tema p {
  font-family: Montserrat;
  color: #004884;
  margin: 0px 0px 0px 0px;/*top-right-bottom-left*/
}
#Reunion .tema span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Reunion .otra {
  margin: 0 700px 0 0;
}
#Reunion .correo{
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Reunion .correo label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Reunion .correo span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Reunion .correotext {
  margin: 0 500px 0 0;
}
#Reunion .Textarea {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Reunion .Textarea p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Reunion .boton {
  margin: 40px 0 0 0;
  display: flex;
  justify-content: center;
}
</style>