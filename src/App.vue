<template>
  <div id="App">
    <div class="headergovco">
      <img src="./assets/GOV.CO v1_Logo GOV.CO standart.png">
      <a class="boton" href="https://www.gov.co/home/" target="_blank">Ir a gov.co</a>
    </div>
    <div class="headergodi">
      <img src="./assets/LOGO-GOBIERNO-DIGITAL.jpg">
      <span class="tituloherramienta">
      Herramienta De Acompañamiento para la gestión de solicitudes</span>
      <span>
      <a class="boton" href="https://gobiernodigital.mintic.gov.co/" target="_blank">Ir a Gobierno Digital</a>
      </span>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <img src="./assets/logogobiernodigital.png">
      <div class="footertext1">
          <h1>
          Dirección de Gobierno Digital
          </h1>
          <p>
          Edificio Murillo Toro, Cra 8 entre calles 12 y 13 Bogotá D.C., Colombia
          <br>
          Código Postal: 111711
          <br>
          Horario de atención: Lunes a viernes 8:00am a 5:00pm
          <br>
          <h2>
          <a class="boton" href="https://twitter.com/GobDigitalCO?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">Twitter</a>
          &nbsp &nbsp 
          <a class="boton" href="https://www.facebook.com/GobDigitalCO/" target="_blank">Facebook</a> &nbsp &nbsp
          </h2>
          </p>
      </div>
      <div class="footertext2">
        <h1>
        Contacto
        </h1>
          <p>
          Conmutador: +57(1)3443460
          </p>
          <br>
          <h2>
          Términos y Condiciones
          </h2>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
#App .headergovco {
  width: 1280px;
  height: 50px;
  padding: 8px 10px 8px 10px;/*top-right-bottom-left*/
  border: solid 1px #3366CC;
  background-color: #3366CC;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#App .headergovco img {
  width: 115px;
  height: 34px;
}
#App .headergovco a {
  color: #FFFFFF;
  font-size: 15px;
}
#App .headergodi {
  width: 1280px;
  height: 90px;
  padding: 8px 10px 8px 10px;
  border: solid 1px #FFFFFF;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#App .headergodi img {
  width: 180px;
  height: 90px;
}
#App .headergodi span {
  color: #3366CC;
  font-size: 15px;
}
#App .headergodi .tituloherramienta {
  width: 673px;
  height: 24px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #025dc3;
}
#App .main-component {
  width: 1280px;
  background-color: #e6effd;
  height:fit-content;
  min-height: 85vh;
  margin: 0%;
  padding-top: 5vh;
  padding-bottom: 10vh;
  margin-bottom: 0%;
}
#App .footer {
  margin-left: 0;
  margin-right: 0;
  padding: 10px;
  margin-bottom: 0%;
  width: 1280px;
  background-color: #025dc3;
  height:fit-content;
  min-height: 100px;
  display: flex;
  justify-content: space-around;
}
#App .footer p {
  display: flex;
  justify-content: center;
  text-align: left;
  color: #FFFFFF;
  padding-top: 5px;
  font-family: WorkSans;
}
#App .footer h1 {
  padding-top: 10px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
}
#App .footer h2 {
  padding-top: 10px;
  font-family: WorkSans;
  font-size: 12px;
  font-weight: lighter;
  color: #FFFFFF;
}
#App .footer img {
  width: 270px;
  height: 160px;
  margin: 10px 39px 29px 0;

}
#App .footertext1 a {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
#App .footertext2 h2 {
  margin-top: 20px;
}
</style>