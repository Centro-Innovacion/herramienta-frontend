<template>
  <div id="Proyecto">
    <a href= "/Request">Regresar al menú de temas</a>
    <br>
    <h4>SECCIÓN 3. SOLICITUD DETALLADA</h4>
    <p>Proporciona mayor información sobre tu solicitud</p>

    <div class="Textarea">
      <p>1. Por favor escribe tu solicitud de manera detallada:</p>
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Escribe algo..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <pre class="mt-3 mb-0">{{ text }}</pre>
    </div>

    <div class="Select">
      <p>2. Por favor selecciona el área a la que pertenece tu solicitud:</p>
      <b-form-select
        id="opcion"
        v-model="selected" 
        :options="options" 
        size="md" 
        class="mt-3"
      >
      </b-form-select>
      <br>
      <br>
      <b-form-group 
            id="input-group" 
            label="Otra:" 
            label-for="input"
            >
            <b-form-input
            id="otra"
            placeholder="Si seleccionaste otra, por favor escribe cuál"
            ></b-form-input>
        </b-form-group>
    </div>

    <br>
    
    <center>
    <b-button type="submit" variant="primary" v-on:click="envio">Enviar</b-button>
    </center>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Selecciona una opción' },
          { value: 'a', text: 'Adopción de IPv6' },
          { value: 'b', text: 'Centro de Innovación Pública Digital' },
          { value: 'c', text: 'Ciudades y Territorios Inteligentes' },
          { value: 'd', text: 'Datos Abiertos' },
          { value: 'd', text: 'Espacio Colaborativo Data Sandbox' },
          { value: 'd', text: 'Gov.Co / Territorial' },
          { value: 'd', text: 'Marco de Arquitectura Empresarial' },
          { value: 'd', text: 'Marco de Interoperabilidad' },
          { value: 'd', text: 'Marco de Transformación Digital' },
          { value: 'd', text: 'Mi Colombia Digital' },
          { value: 'd', text: 'Máxima Velocidad' },
          { value: 'd', text: 'Portal Único del Estado Colombiano' },
          { value: 'd', text: 'Seguridad y Privacidad de la Información' },
          { value: 'd', text: 'Sello de Excelencia Gobierno Digital' },
          { value: 'd', text: 'Servicios Ciudadanos Digitales' },
          { value: 'd', text: 'Software Libre' },
          { value: 'd', text: 'Tecnologías Emergentes' },
          { value: 'd', text: 'Transfórmate con Gobierno Digital' },
          { value: 'd', text: 'Transparencia y Accesibilidad Web' },
          { value: 'd', text: 'Urna de Cristal' },
          { value: 'd', text: 'Otra' },
        ],
        value: '',
        
      }
    },
    methods: {
     envio: function() {

            alert("Tu solicitud ha sido recibida, la analizaremos y pronto nos pondremos en contacto contigo");
            window.location.href = '/evaluar';
     }
    }
  }
</script>

<style>
#Proyecto h4,p {
  text-align: center;
}
#Proyecto a {
  margin-left: 10%;
}
#Proyecto .Textarea {
  margin-left:10%;
  margin-right:10%;
}
#Proyecto .Textarea p {
  text-align: left;
  font-weight:bold;
}
#Proyecto .Select {
  margin-left:10%;
  text-align: left;
  margin-right: 10%;
}
#Proyecto .Select p {
  text-align: left;
  font-weight:bold;
}
</style>