<template>
  <div id="Charla">
    <a href= "/Request">Regresar al menú de temas</a>
    <br>
    <h4>SECCIÓN 3. SOLICITUD DETALLADA</h4>
    <p>Proporciona mayor información sobre tu solicitud</p>

    <div class="Textarea">
      <p>1. Por favor escribe tu solicitud de manera detallada:</p>
      <b-form-textarea
        id="sol_charla"
        v-model="text"
        placeholder="Escribe algo..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <pre class="mt-3 mb-0">{{ text }}</pre>
    </div>

    <div class="dep_mun">
                    <label for="Tema" class="Tema">2. Por favor selecciona un Tema para visualizar el correo al que debes enviar tu solicitud:
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
                        Para solicitudes relacionadas con el tema {{ municipios[selectedMunicipio].label }} por favor escribe un correo a {{ selectedOption }}.
                    </span>

                    <!-- departamento{{ municipios[selectedMunicipio].label }} municipio{{ selectedOption }}-->
                    
                </div>

    <br>
    
    <center>
    <b-button type="submit" variant="primary" v-on:click="envio">Enviar</b-button>
    </center>

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
#Charla h4,p {
  text-align: center;
}
#Charla a {
  margin-left: 10%;
}
#Charla .Textarea {
  margin-left:10%;
  margin-right:10%;
}
#Charla .Textarea p {
  text-align: left;
  font-weight:bold;
}
#Charla .Select {
  margin-left:10%;
  text-align: left;
  margin-right: 10%;
}
#Charla .Select p {
  text-align: left;
  font-weight:bold;
}
#Charla .dep_mun {
  margin-left: 128px;
  display: flex;
  flex-direction: column;
  font-weight: bold
}
#Charla .dep_mun select {
  margin-right: 500px;
  
}
</style>