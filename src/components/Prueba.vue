<template>
  <div id="Prueba">
   <div class="container cont">

    <div class="row">

      <div class="col-md-12">
      
        <h1>Buscar Lineamientos </h1> 
        
        <input type="text" v-model="buscar" class="form-control" placeholder="Ejemplo: Política de Gobierno Digital"/>              

      </div>

    </div>

    <div class="row mt-3">

      <div class="col-md-4" v-for="item in items" v-bind:key="item.id"> 

        <div class="card mb-3">
          <!--<img class="card-img-top" v-bind:src="'img/' + item.img" v-bind:alt="item.nombre">-->
          <div class="card-body">
            <h3 class="card-title mb-3">{{ item.nombre }}</h3>
            <p class="card-text">
              <strong>Categoría:</strong> {{ item.categoria }} 
            </p>
            <p class="card-text">
              <strong>Descripción:</strong> {{ item.descripcion }} 
            </p>
            <p class="card-text">
              <strong>Información asociada:</strong> {{ item.informacion }} 
            </p>
            <p class="card-text">
              <strong>Información asociada:</strong>
              <br>
              <!--For example, instead of <div id="{{ val }}">, use <div :id="val">.-->
              <a :href= "item.site">{{ item.nombre_site }}</a>
              <br>
              <a :href= "item.site2">Recurso 2</a>
            </p>
         
            
          </div>
        </div>

      </div>

    </div>

   </div>
   </div>
</template>

<script>
import datos from "../assets/json/pokemones.json";
export default {
  // Exporto mi componente 'Pokemones' 
  name: 'Prueba',
  props: {
    msg: String
  },
  
  // declaro el elemento buscar 
  data() {
    return {
      buscar: ''
    }
  },
    
  // Creo un método llamado 'items' y obtengo los datos de los pokemones
  // Asimismo filtro la búsqueda de los pokemones con el método filter()  
  computed: {
    items() {
      return datos.filter(item => {
        return item.nombre.toLowerCase().includes(this.buscar.toLowerCase());
      });
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /**/
</style>