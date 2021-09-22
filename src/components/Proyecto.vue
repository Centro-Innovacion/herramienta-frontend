<template>
  <div id="Proyecto">
    <div class="MigaPan">
        <a href= "/request">Regresar al menú de temas</a> 
        <a href= "/evaluar">Si no encontraste lo que buscabas y deseas radicar una solicitud haz click aquí</a>
    </div>
    <br>
    <div class="Titulo">
      <h4>ACOMPAÑAMIENTO PARA UN PROYECTO</h4>
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

    <div class="temas">
      <label for="tema" class="tema">2. Selecciona el tema relacionado con tu solicitud:
        <span class="obligatorio">*</span>
      </label>
      <div v-for="n, i in 1" id="tema_proyecto">
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
            id="otro_tema_proyecto"
            placeholder="¿Cuál?"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
    </div>

    <div class="correo">
      <label for="correo" class="correo">3. Escribe tu correo electrónico:
        <span class="obligatorio">*</span>
      </label>
      <div class="correotext">
        <b-form-group 
          id="input-group" 
          label-for="input"
          >
          <b-form-input
          id="correo_proyecto"
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
      <b-button type="submit" variant="primary" :disabled="!(checkedNames&&checkedNames1)" v-on:click="crearCitaProyecto()">Enviar</b-button>
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
  name: "Personas",
  data: function (){
    return {
      choices:[],
      municipios: null,
      selectedMunicipio: -1,
      selectedOption: '',
      value: '',
      texto_proyecto: '',
      tema_proyecto:'',
      otro_tema_proyecto:'',
      correo_proyecto:'',
      limite: 1000,
      mensaje: '',
      checkedNames: null,
      checkedNames1: null,
    }
  },
  methods:{

      hideModal() {
        this.$refs['my-modal'].hide(),
        window.location.href = '/home'
      },

      selectMunicipio:function() {
      this.selectedOption = '';
      },
      
      crearCitaProyecto: function() {
      this.texto_proyecto = document.getElementById("texto_proyecto").value;
      this.tema_proyecto = document.getElementById("tema_proyecto").value;
      this.otro_tema_proyecto = document.getElementById("otro_tema_proyecto").value;
      this.correo_proyecto = document.getElementById("correo_proyecto").value;
      let self = this;
      let id = sessionStorage.getItem('identificador');

      if(this.texto_proyecto!== '' && this.tema_proyecto !== '' && this.correo_proyecto!=='')
      {
        this.newCitaProyecto = {
          "id_rol": id,
          "texto_proyecto": this.texto_proyecto,
          "tema_proyecto": this.tema_proyecto,
          "otro_tema_proyecto": this.otro_tema_proyecto,
          "correo_proyecto": this.correo_proyecto,
        }
      
      axios.post("http://127.0.0.1:8000/proyecto/create/", this.newCitaProyecto)
        .then((result) => {
          this.$refs['my-modal'].show(),
          document.getElementById("texto_proyecto").value = "",
          document.getElementById("tema_proyecto").value = "",
          document.getElementById("otro_tema_proyecto").value = "",
          document.getElementById("correo_proyecto").value = null
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
#Proyecto .MigaPan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 100px 30px 100px ;/*top-right-bottom-left*/
}
#Proyecto .MigaPan a {
  color: #004884;
}
#Proyecto .Titulo {
  display: flex;
  justify-content: center;
}
#Proyecto .Titulo h4 {
  font-family: Montserrat;
  color: #004884;
  font-size: 36px;
  font-weight: bold;
}
#Proyecto .Subtitulo {
  display: flex;
  justify-content: center;
}
#Proyecto .Subtitulo p {
  font-family: Montserrat;
  color: #004884;
  font-size: 24px;
  font-weight: bold;
}
#Proyecto .Textarea {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Proyecto .Textarea label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Proyecto .Textarea span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: light;
  font-family: Montserrat;
}
#Proyecto .termycond {
  margin: 0px 0px 0 470px;/*top-right-bottom-left*/;
}
#Proyecto .temas {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Proyecto .temas label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Proyecto .temas p {
  font-family: Montserrat;
  color: #004884;
  margin: 0px 0px 0px 0px;/*top-right-bottom-left*/
}
#Proyecto .temas span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Proyecto .otra {
  margin: 0 700px 0 0;
}
#Proyecto .correotext {
  margin: 0 500px 0 0;
}
#Proyecto .Textarea {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Proyecto .Textarea label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Proyecto .Textarea p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Proyecto .Textarea span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: normal;
  font-family: Montserrat;
}
#Proyecto .correo{
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Proyecto .correo label {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Proyecto .correo span {
  margin-top: 30px;
  color: #f42f63;
  font-weight: bold;
  font-family: Montserrat;
}
#Proyecto .boton {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>