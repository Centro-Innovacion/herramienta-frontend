<template>
  <div id="Charla">

    <div class="MigaPan">
        <a href= "/request">Regresar al menú de temas</a> 
        <a href= "/evaluar">Si no encontraste lo que buscabas y deseas radicar una solicitud haz click aquí</a>
    </div>

    <br>

      <div class="Titulo">
        <h4>CHARLA</h4>
      </div>
      <br>
      <div class="Subtitulo">
        <p>Proporciona mayor información sobre tu solicitud</p>
      </div>
    

    <div class="dep_mun">
        <label for="Tema" class="Tema">1. Por favor selecciona un Tema para visualizar el correo al que debes enviar tu solicitud:
            <span class="obligatorio">*</span>
        </label>
        <br>
        <select  v-model="selectedMunicipio" @change="selectMunicipio">
            <option v-for="(municipio,index) in municipios" :value="index">{{ municipio.label }}</option>
        </select>
        <br>
        <select id = "mun_ent" v-model="selectedOption" v-if="selectedMunicipio != -1">
            <option id = "dep_ent" v-for="option in municipios[selectedMunicipio].options">{{ option }}</option>
        </select>
        <br>
        <span v-if="selectedOption">
            Para solicitudes relacionadas con el tema {{ municipios[selectedMunicipio].label }}, por favor escribe un correo a {{ selectedOption }}.
        </span>

        <!-- departamento{{ municipios[selectedMunicipio].label }} municipio{{ selectedOption }}-->
    </div>

    <br>
    
    <div class="Textarea">
      <p>2. Para ayudarnos a mejorar esta herramienta puedes enviarnos un resumen de tu solicitud aquí:</p>
      <b-form-textarea
        id="sol_charla"
        v-model="text"
        placeholder="Escribe algo..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <pre class="mt-3 mb-0">{{ text }}</pre>
    </div>

    <br>

    <div class="boton">
      <b-button type="submit" variant="primary" v-on:click="terminar">Terminar</b-button>
    </div>

  </div>
</template>

<script>
  import axios from "axios";

export default {
    name: "Personas",
    data: function (){
        return {
            municipios: null,
            selectedMunicipio: -1,
            selectedOption: '',
            
            municipios:[{ label: 'Por favor selecciona una opción de la lista', value: null },
                {
                    label:"Adopción de IPv6",
                    options:["pepito@mintic.gov.co"]
                },
                {
                    label:"Centro de Innovación Pública Digital",
                    options:["mvosorio@mintic.gov.co"]
                },
                {
                    label:"Ciudades y Territorios Inteligentes",
                    options:["mguerra@mintic.gov.co"]
                },
                {
                    label:"Datos Abiertos",
                    options:["lsantamaria@mintic.gov.co"]
                },
                {
                    label:"Espacio Colaborativo Data Sandbox",
                    options:["jxxx@mintic.gov.co"]
                },
                {
                    label:"Gov.co/Territorial",
                    options:["dclavijo@mintic.gov.co"]
                },
                {
                    label:"Marco de Arquitectura Empresarial",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Marco de Interoperabilidad",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Marco de Transformación Digital",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Mi Colombia Digital",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Máxima Velocidad",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Portal único del Estado Colombiano",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Seguridad y Privacidad de la Información",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Sello de Excelencia Gobierno Digital",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Servicios Ciudadanos Digitales",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Software Libre",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Tecnologías Emergentes",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Transfórmate con Gobierno Digital",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Transparencia y Accesibilidad Web",
                    options:["hbermudez@mintic.gov.co"]
                },
                {
                    label:"Urna de Cristal",
                    options:["hbermudez@mintic.gov.co"]
                },
        ],
        value: '',
        
      }
    },
    methods:{

        selectMunicipio:function() {
        this.selectedOption = '';
        },
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
#Charla .dep_mun {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Charla .dep_mun label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Charla .dep_mun select {
  margin: 10px 0 10px 0;
}
#Charla .dep_mun span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Charla .Textarea {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Charla .Textarea p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Charla .boton {
  display: flex;
  justify-content: center;
}
</style>