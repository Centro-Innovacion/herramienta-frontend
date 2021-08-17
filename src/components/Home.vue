<template>
  <div id="Home">
    <div class="contenido">
      <img src="../assets/imagenhome.png">
      <div class= "texto">
        <h1>
           ¡Te damos la bienvenida!
        </h1>
        <br>
        <h2>
          La Dirección de Gobierno Digital creó esta herramienta para acercarse más a tí
          y ayudarte a resolver tus solicitudes de manera más ágil.
        </h2>
        <br>
        <h3>
          Para empezar, por favor selecciona una opción:
        </h3> 
        <br>
        <div class="botones">
          <a class="boton" href="https://www.gov.co/home/" target="_blank">Ciudadanía</a>
          <br>
          <a class="boton" href="https://www.gov.co/home/" target="_blank">Entidades Públicas</a>
          <br>
          <a class="boton" href="https://www.gov.co/home/" target="_blank">Empresas Privadas</a>
          <br>
          <a class="boton" href="https://www.gov.co/home/" target="_blank">Academia</a>
          <br>
          <a class="boton" href="https://www.gov.co/home/" target="_blank">Sociedad Civil</a>
          <br>
          <a class="boton" href="https://www.gov.co/home/" target="_blank">Otro</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
#Home .contenido {
  display: flex;
  justify-content: space-around;
}
#Home img {
  width: 40%;
  height: 40%;
  margin: 0px 47px 0px 20px;/*top-right-bottom-left*/
  filter: brightness(1.1);
  mix-blend-mode: multiply;
}
#Home .texto {
  display: flex;
  flex-direction: column;
  padding-right: 10px;
}
#Home .texto h1 {
  color: #004884;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 40px;
  display: flex;
  justify-content: center;
}
#Home .texto h2 {
  color: #004884;
  font-family: Montserrat;
  font-size: 26px;
  display: flex;
  text-align: justify;
  font-weight: regular;
}
#Home .texto h3 {
  color: #004884;
  font-family: Montserrat;
  font-size: 22px;
  display: flex;
  text-align: justify;
  font-weight: bold;
}
#Home .botones {
  display:flex;
  justify-content: center;
  flex-direction: column; /*poner uno debajo del otro*/
  padding-right: 220px;
  padding-left: 220px;
  text-align: center; /*alinear texto al centro*/
}
#Home .boton {
padding-right: 30px; /*espacio alrededor texto*/
padding-left: 30px;
padding-bottom: 5px;
padding-top: 5px;
background-color: #F42F63; /*color botón*/
color: #FFFFFF; /*color texto*/
font-family: Montserrat;
border-radius: 40px; /*bordes redondos*/
text-decoration: none; /*quitar el subrayado del hipervinculo*/
}
</style>
