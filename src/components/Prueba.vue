<template>
  <div id="Prueba">
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      button-class="right"
      
    >
      <h6>
        
        Some quick example text to build on the card title and make up the bulk of the card's content.
        
      </h6>

      <div class="botontar">
       <b-button href="#" variant="primary">Go somewhere</b-button>
      </div>
    </b-card>
  </div>
</template>

<style>
#Prueba .card h6 {
  text-align: justify;
}

#Prueba .botontar {
  text-align: right;
}
</style>