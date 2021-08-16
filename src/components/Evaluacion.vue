<template>
  <div id="Evaluacion">
        <div class="Encabezado">
            <h4>SECCIÓN 4. RETROALIMENTACIÓN</h4>
            
        </div>
        <br>
        <div class="Pregunta">
            <p>1. ¿Esta herramienta te ayudó a resolver tu solicitud?</p>
                <b-form-group
                    v-slot="{ ariaDescribedby }"
                >
                    <b-form-checkbox
                        v-for="option in options"
                        v-model="selected"
                        :key="option.value"
                        :value="option.value"
                        :aria-describedby="ariaDescribedby"
                        name="flavour-4a"
                        inline
                    >
                        {{ option.text }}
                    </b-form-checkbox>
                </b-form-group>
        </div>
        <br>
        <div class="Rating">
            <p> 2. Por favor califica qué tanto te ayudó esta herramienta a resolver tu solicitud</p>
            <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
        </div>
        <br>
        

        <div class="Textarea">
      <p>3. Por favor indícanos tus apreciaciones adicionales</p>
      <b-form-textarea
        id="eval"
        v-model="text"
        placeholder="Escribe algo..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <pre class="mt-3 mb-0">{{ text }}</pre>
    </div>

    <center>
        <b-button type="submit" variant="primary" v-on:click="final">Finalizar</b-button>
        </center>
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
#Evaluacion {
    margin-top: 2%;
    margin-left: 10%;
    margin-right: 10%;
    text-align: left;
    font-weight:bold;
}
#Evaluacion .p {
    text-align: left;
}
.checkbox {
    text-align: left;
}
#Evaluacion .Encabezado {
    text-align: center;
}

#button {
    text-align: center;
}
</style>