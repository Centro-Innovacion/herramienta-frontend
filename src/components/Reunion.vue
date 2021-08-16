<template>
  <div id="Reunion">
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
            id="charla_otro_tema"
            placeholder="Si seleccionaste otra, por favor escribe cuál"
            ></b-form-input>
        </b-form-group>
    </div>

    <br>

    <div class="Calendario">
      <p>3. En caso de requerir una reunión para resolver tu solicitud, por favor selecciona una fecha
        disponible en el calendario:
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

    <div class="Hora">
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

        selectedhour: 'A',
        optionshour: [
          { item: 'A', name: '9:00a.m - 10:00a.m' },
          { item: 'B', name: '10:00a.m - 11:00a.m' },
          { item: 'D', name: '11:00a.m - 12:00a.m', notEnabled: true },
          { item: { d: 1 }, name: '2:00p.m - 3:00p.m' }
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
        return weekday === 0 || weekday === 6 || day === 8
      },
      envio: function() {
            alert("Tu solicitud ha sido recibida, la analizaremos y pronto nos pondremos en contacto contigo");
            window.location.href = '/evaluar';
     }
    }
  }
</script>

<style>
#Reunion h4,p {
  text-align: center;
}
#Reunion a {
  margin-left: 10%;
}
#Reunion .Textarea {
  margin-left:10%;
  margin-right:10%;
}
#Reunion .Textarea p {
  text-align: left;
  font-weight:bold;
}
#Reunion .Select {
  margin-left:10%;
  text-align: left;
  margin-right: 10%;
}
#Reunion .Select p {
  text-align: left;
  font-weight:bold;
}
#Reunion .Calendario {
  margin-left:10%;
  margin-right:10%;
  text-align: left;
}
#Reunion .Calendario p {
  text-align: left;
  font-weight:bold;
}
#Reunion .Hora {
  margin-left:10%;
  margin-right:10%;
  text-align: left;
}
#Reunion .Hora p {
  text-align: left;
  font-weight:bold;
}
</style>