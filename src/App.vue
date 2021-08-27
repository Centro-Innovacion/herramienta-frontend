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
          <a class="boton" href="https://www.facebook.com/GobDigitalCO/" target="_blank">Facebook</a> 
          </h2>
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
  width: 100%;
  height: 50px;
  padding: 0 10px 0 10px;/*top-right-bottom-left*/
  border: solid 1px #3366CC;
  background-color: #3366CC;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 600px) {
  #App .headergovco {
    height: 21px;
  }
}
#App .headergovco img {
  width: 115px;
  height: 34px;
}
@media (max-width: 600px) {
  #App .headergovco img {
    width: 69px;
    height: 21px;
    margin: 0 265px 0 0;
    object-fit: contain;
  }
}
#App .headergovco a {
  color: #FFFFFF;
  font-size: 15px;
}
@media (max-width: 600px){
  #App .headergovco a {
    font-size: 8px;
  }
}

#App .headergodi {
  width: 100% ;
  height: 90px;
  padding: 8px 10px 8px 10px;
  border: solid 1px #FFFFFF;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 600px) {
  #App .headergodi {
    height: 60px;
  }
}
#App .headergodi img {
  width: 180px;
  height: 90px;
}
@media (max-width: 600px) {
  #App .headergodi img {
    width: 91px;
    height: 50px;
    margin: 0 14px 0 0;
  }
}
#App .headergodi span {
  color: #3366CC;
  font-size: 15px;
}
@media (max-width: 600px) {
  #App .headergodi span {
    font-size: 8px;
  }
}
#App .headergodi .tituloherramienta {
  width: 700px;
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
@media (max-width: 635px) {
  #App .headergodi .tituloherramienta {
    width: 165px;
    height: 22px;
    font-size: 10px;
    text-align: center;
  }
}
#App .main-component {
  width: 100%;
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
  width: 100%;
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
@media (max-width: 600px) {
  #App .footer p {
    font-size: 10px;
  }
}
#App .footer h1 {
  padding-top: 10px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
}
@media (max-width: 600px) {
  #App .footer h1 {
    font-size: 12px;
  }
}
#App .footer h2 {
  padding-top: 10px;
  font-family: WorkSans;
  font-size: 12px;
  font-weight: lighter;
  color: #FFFFFF;
}
@media (max-width: 600px) {
  #App .footer h2{
    font-size: 9px;
  }
}
#App .footer img {
  width: 270px;
  height: 160px;
  margin: 10px 39px 29px 0;
}
@media (max-width: 600px) {
  #App .footer img {
    width: 114px;
    height: 72px;
    margin: 0 10px 6px 0;
  }
}
#App .footertext1 a {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  margin-right: 20px;
}
#App .footertext2 h2 {
  margin-top: 20px;
}
</style>