<template>
  <div id="Evaluacion">

        <div class="Titulo">
            <h4>INTEGRACIÓN CON SEDE ELECTRÓNICA</h4>
        </div>

        <br>
        <div class="dep_mun">
            <label for="Tema" class="Tema">Para radicar tu petición en el sistema de información del Ministerio de las Tecnologías de
            la Información y las Comunicaciones, por favor dirígete a este link: 
            <a class="boton" href="https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Informes-de-PQRSD/125804:Registro-PQRSD" target="_blank">Sistema de PQRS</a>
            </label>
        </div>
        <br>
      
        <div class="Textarea">
            <p>Para ayudarnos a mejorar esta herramienta puedes enviarnos un resumen de tu solicitud aquí:</p>
            <b-form-textarea
                id="eval"
                v-model="text"
                placeholder="Escribe algo..."
                rows="3"
                max-rows="6"
            ></b-form-textarea>

            <pre class="mt-3 mb-0">{{ text }}</pre>
        </div>

        <div class="boton">
        <b-button type="submit" variant="primary" v-on:click="final">Finalizar</b-button>
        </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
        selected: [],
        options: [
            { text: 'Si', value: 'Si' },
            { text: 'No', value: 'No' }
        ]      
        }
    },

    methods: {
        final: function() {
            alert("Gracias, tu evaluación ha sido recibida");
            window.location.href = '/home';
        }
    }
  }
</script>

<style>
#Evaluacion .Titulo {
  display: flex;
  justify-content: center;
}
#Evaluacion .Titulo h4 {
  font-family: Montserrat;
  color: #004884;
  font-size: 36px;
  font-weight: bold;
}
#Evaluacion .dep_mun {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Evaluacion .dep_mun label {
  font-family: Montserrat;
  color: #f42f63;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Evaluacion .Textarea {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Evaluacion .Textarea p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Evaluacion .boton {
  display: flex;
  justify-content: center;
}
</style>