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
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Escribe algo..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>

    <!--<div class="temas">
      <label for="tema" class="tema">2. Selecciona el tema relacionado con tu solicitud:
            <span class="obligatorio">*</span>
      </label>
      <div v-for="n, i in 1">
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
              id="otra"
              placeholder="¿Cuál?"
              ></b-form-input>
          </b-form-group>
        </div>
      </div>
    </div>-->

    <br>

    <div class="Calendario">
      <p>2. Selecciona una fecha disponible en el calendario:
      </p>
      <b-calendar 
        v-model="value" 
        :date-disabled-fn="dateDisabled" 
        block locale="es-LA"
        selected-variant="danger"
        today-variant="info"
        class="border rounded p-2"
        >
      </b-calendar>
    </div>

    <br>

    <!--<div class="Hora">
      <p>4. Selecciona la hora a la que quieres la reunión:
      </p>
      <b-form-select
      v-model="selectedhour"
      :options="optionshour"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      ></b-form-select>
    </div>-->

    <div class="dep_mun">
      <label for="Ubicacion" class="Ubicacion">3. Selecciona el tema y la hora de la reunión:
          <span class="obligatorio">*</span>
      </label>
      
      <select :value="departamento.label" v-model="selectedDepartamento" @change="selectDepartamento">
          <option v-for="(departamento,index) in departamentos" :value="index">{{ departamento.label }}</option>
      </select>
      <br>
      <select id = "mun_ent" v-model="selectedMunicipio" >
          <option id="dep_ent" v-for="municipio in departamentos[selectedDepartamento].options">{{ municipio }}</option>
      </select>

      <!--Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">-->
      <!-- departamento{{ municipios[selectedMunicipio].label }} municipio{{ selectedOption }}-->
                    
    </div>

    <br>
    
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
              id="otra"
              placeholder="Correo electrónico"
              ></b-form-input>
          </b-form-group>
      </div>
    </div>

    <div class=terminosycond>
            <input type="checkbox" id="politica" value="Politica" v-model="checkedNames" onclick="Siguiente.disabled && terminos.disabled = !this.checked">
            <label for="politica">
                <a
                href="https://www.mintic.gov.co/portal/715/articles-62124_politica_tratamiento_datos_personales_u20200917.pdf"
                target="_blank"
                >Autorizo el tratamiento de datos personales</a>
            </label>
            <br>
            <input type="checkbox" id="terminos" value="Terminos" v-model="checkedNames" onclick="Siguiente.disabled = !this.checked">
            <label for="terminos">
                <a
                href="https://www.mintic.gov.co/portal/715/articles-62124_politica_tratamiento_datos_personales_u20200917.pdf"
                target="_blank"
                >Acepto los términos y condiciones</a>
            </label>
        </div>

    <div class="boton">
      <b-button type="submit" variant="primary" v-on:click="crearReunion" id="botonReunion">Enviar</b-button>
    </div>


  </div>
</template>

<script>
  import axios from "axios";

export default {
    name: "Personas",
    data: function (){
        return {
            nombre_entidad: '',
            departamento: '',
            municipio: '',
            departamentos: null,
            selectedDepartamento: 0,
            selectedOption: '',
            
            departamentos:[{ label: 'Selecciona una opción de la lista', value: null },
                {
                    label:"Ciudades y Territorios inteligentes",
                    options:["7:00 - 7:30 am", "7:30 - 8:00 am","8:00 - 8:30 am"]
                },
                {
                    label:"Datos abiertos",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Espacio colaborativo Data Sandbox",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Máxima velocidad",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Sello de excelencia Gobierno Digital",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Software Libre",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Transfórmate con Gobierno Digital",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Adopción de IPv6",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Marco de arquitectura empresarial",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Marco de interoperabilidad",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Seguridad y privacidad de la información",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Gov.co/Territorial",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Portal único del Estado colombiano",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Innovación pública digital",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Urna de cristal",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
                },
                {
                    label:"Tecnologías emergentes",
                    options:["9:00 - 9:30 am", "10:30 - 10:00 am","11:00 - 11:30 am"]
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
        return weekday === 0 || weekday === 6 || day === 10
      },
      envio: function() {
            alert("Tu solicitud ha sido recibida, la analizaremos y pronto nos pondremos en contacto contigo");
            window.location.href = '/evaluar';
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
#Reunion .dep_mun {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
  display: flex;
  flex-direction: column;
}
#Reunion .dep_mun select {
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
#Reunion .terminosycond {
  margin: 50px 0 0 0;
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
#Reunion .dep_mun label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Reunion .temas p {
  font-family: Montserrat;
  color: #004884;
  margin: 0px 0px 0px 0px;/*top-right-bottom-left*/
}
#Reunion .temas span {
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