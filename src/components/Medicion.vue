<template>
  <div id="Medicion">
    <div class="Encabezado">
      <a href= "/menu">Regresar al menú de temas</a> 
    </div>
    <br>
    <br>
    <div class="container cont">
      <div class="row">
        <div class="col-md-12">
          <h1>Buscar en Medición </h1> 
          <br>
          <input type="text" v-model="buscar" class="form-control" placeholder="Ejemplo: Índice de Gobierno Digital"/>              
          <br>
          <br>
        </div>
      </div>

    <div class="row mt-3">
      <div class="col-md-4" v-for="item in items" v-bind:key="item.id"> 
        <div class="card mb-3">
          <div class="card-body">
            <h3 class="card-title mb-3">{{ item.nombre }}</h3>
              <p class="card-text">
                <strong>Categoría:</strong> {{ item.categoria }} 
              </p>
              <p class="card-text">
                <strong>Descripción:</strong> {{ item.descripcion }} 
              </p>
              <p class="card-text">
                <strong>Información asociada:</strong>
                <br>
                <br>
                <!--For example, instead of <div id="{{ val }}">, use <div :id="val">.-->
                <a :href= "item.site" >{{ item.nombre_site }} </a>
                <br>
                <br>
                <a :href= "item.site2" target="\_blank">{{ item.nombre_site2 }}</a>
                <br>
                <br>
                <a :href= "item.site3" target="\_blank">{{ item.nombre_site3 }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datos from "../assets/json/medicion.json";
export default {
  name: 'Medicion',
  props: {
    msg: String
  },
  
  // declaro el elemento buscar 
  data() {
    return {
      buscar: ''
    }
  },
  // Creo un método llamado 'items' y obtengo los datos de los lineamientos
  // Asimismo filtro la búsqueda con el método filter()  
  computed: {
    items() {
      return datos.filter(item => {
        return item.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(this.buscar.toLowerCase());
      });
    },
  }
  
}
</script>

<style>
#Medicion .Encabezado {
  text-align: center;
}
#Medicion h1 {
  color: #004884;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 32px;
}
#Medicion .card h3 {
  color: #004884;
  font-family: Work-Sans;
  font-size: 22px;
  font-weight: bold;
}
#Medicion .card p {
  color: #004884;
  font-family: Work-Sans;
  font-size: 17px;
}
</style>