<template>
  <div id="Integracion">

    <div class="MigaPan">
      <a href= "/home">Regresar al inicio</a> 
    </div>

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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
        selected: [], 
        }
    },

    methods: {
      final: function() {
        window.location.href = '/home';
      }
    }
  }
</script>

<style>
#Integracion .MigaPan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 100px 30px 100px ;/*top-right-bottom-left*/
}
#Integracion .MigaPan a {
  color: #004884;
}
#Integracion .Titulo {
  display: flex;
  justify-content: center;
}
#Integracion .Titulo h4 {
  font-family: Montserrat;
  color: #004884;
  font-size: 36px;
  font-weight: bold;
}
#Integracion .dep_mun {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Integracion .dep_mun label {
  font-family: Montserrat;
  color: #f42f63;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/
}
#Integracion .Textarea {
  margin: 20px 100px 0 100px;/*top-right-bottom-left*/
}
#Integracion .Textarea p {
  font-family: Montserrat;
  color: #004884;
  font-size: 18px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;/*top-right-bottom-left*/ 
}
#Integracion .boton {
  display: flex;
  justify-content: center;
}
</style>