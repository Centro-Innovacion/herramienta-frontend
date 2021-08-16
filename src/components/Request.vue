<template>
    <div id="Request">
        <div class="Encabezado">
            <h4>SECCIÓN 2. SOLICITUDES</h4>
            <!--<p>Por favor lee la descripción de cada tema y selecciona el que corresponda a tu solicitud</p>-->
        </div>

        <br>

        <div class="Titulo1">
            <h4>QUIERO SABER</h4>
        </div>
        
        <div class="Tarjetassaber">
            <b-row class="mt-5">
                <b-col cols="12" md="4">
                    
                    <b-card
                        border-variant="primary"
                        header="Quiero saber sobre Lineamientos"
                        header-bg-variant="primary"
                        header-text-variant="white"
                        tag="article"
                        style="max-width: 20rem;"
                        header-class="text-center"
                        body-class="text-left"
                        margin-bottom="75px"
                    >
                    
                        <!--b-card-img :src="require('../assets/lineamientos.png')"></b-card-img-->
                        <h6>
                            Aquí encontrarás información sobre:
                            <br>
                            <br>
                            - Política de Gobierno Digital
                            <br>
                            - Manual de Gobierno Digital
                            <br>
                            - Marco de Arquitectura Empresarial
                            <br>
                            - Marco de Seguridad y Privacidad
                            <br>
                            - Marco de Transformación Digital
                            <br>
                            - Marco de Interoperabilidad
                            <br>
                            - Modelo de Territorios y Ciudades Inteligentes
                            <br>
                            - Guías de Servicios Ciudadanos Digitales
                            <br>
                            - Lineamientos para el protocolo de Internet IPv6
                        </h6>

                        <div class="botones">
                        <b-button v-on:click="contarLineamientos" id="botonLineamientos" variant="primary" >Seleccionar</b-button>
                        </div>

                    </b-card>
                </b-col>
                        <br>
                <b-col cols="12" md="4">
                    <b-card
                        border-variant="primary"
                        header="Quiero saber sobre Socialización"
                        header-bg-variant="primary"
                        header-text-variant="white"
                        tag="article"
                        style="max-width: 20rem;"
                        header-class="text-center"
                        body-class="text-left"
                    >
                        <!--b-card-img :src="require('../assets/socializacion.png')"></b-card-img-->
                        <h6>
                            Aquí encontrarás información sobre:
                            <br>
                            <br>
                            - Hablemos con Gobierno Digital
                            <br>
                            - Conéctate con Gobierno Digital
                            <br>
                            - Transfórmate con Gobierno Digital
                        </h6>
                        
                        <div class="botones">
                        <b-button v-on:click="contarSocializacion" id="botonSocializacion" variant="primary">Seleccionar</b-button>
                        </div>
                    
                    </b-card>
                </b-col>

                <b-col cols="12" md="4">
                    <b-card
                        border-variant="primary"
                        header="Quiero saber sobre Acompañamiento"
                        header-bg-variant="primary"
                        header-text-variant="white"
                        tag="article"
                        style="max-width: 20rem;"
                        header-class="text-center"
                        body-class="text-left"
                    >
                        <!--b-card-img :src="require('../assets/acompanamiento.png')"></b-card-img-->
                        <h6>
                            Aquí encontrarás información sobre:
                            <br>
                            <br>
                            - Talleres de Gobierno Digital
                            <br>
                            - Máxima Velocidad
                            <br>
                            - Caja de Herramientas
                            <br>
                            - Urna de Cristal
                            <br>
                            - CSIRT Gobierno
                            <br>
                            - Acuerdo Marco de Precios en Tecnología
                            <br>
                            - Centro de Contacto
                        </h6>
                       
                        <div class="botones">
                        <b-button v-on:click="contarAcompanamiento" id="botonAcompanamiento" variant="primary">Seleccionar</b-button>
                        </div>
                    
                    </b-card>
                </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col cols="12" md="4">
                <b-card
                    border-variant="primary"
                    header="Quiero saber sobre Fortalecimiento"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    tag="article"
                    style="max-width: 20rem;"
                    header-class="text-center"
                    body-class="text-left"
                >
                    <!--b-card-img :src="require('../assets/fortalecimiento.png')"></b-card-img>-->
                    <h6>
                    Aquí encontrarás información sobre:
                    <br>
                    <br>
                    - Generación de Capacidades TI
                    <br>
                    - Gov.Co y Goc.vo/Territorial
                    <br>
                    - Catalizadores de la Innovación
                    <br>
                    - Ciudades y Territorios Inteligentes
                    <br>
                    - Data Sandbox
                    <br>
                    - Hacker Girls
                    <br>
                    - Proyectos Especiales
                    <br>
                    - Sello de Excelencia
                    <br>
                    - Generación de Capacidades TI (Maestrías, Especializaciones, Diplomados, cursos y certificaciones)
                    </h6>
                    
                    <div class="botones">
                    <b-button v-on:click="contarFortalecimiento" id="botonFortalecimiento" variant="primary">Seleccionar</b-button>
                    </div>
                
                </b-card>
                </b-col>

                <b-col cols="12" md="4">
                    <b-card
                        border-variant="primary"
                        header="Quiero saber sobre Medición"
                        header-bg-variant="primary"
                        header-text-variant="white"
                        tag="article"
                        style="max-width: 20rem;"
                        header-class="text-center"
                        body-class="text-left"
                    >
                        <!--b-card-img :src="require('../assets/medicion.png')"></b-card-img-->
                        <h6>
                        Aquí encontrarás herramientas de seguimiento, mapas interactivos,
                        informes de gestión, tableros de Power BI con información, instrumentos de evaluación
                        e índices, entre otros.
                        </h6>
                        
                        <div class="botones">
                        <b-button v-on:click="contarMedicion" id="botonMedicion" variant="primary">Seleccionar</b-button>
                        </div>
                    
                    </b-card>
            </b-col>       
        </b-row>
        </div>

        <br>
        <br>
        <br>

        <div class="Titulo2">
            <h4>QUIERO ACOMPAÑAMIENTO</h4>
        </div>

        <div class="Tarjetasacomp">
        <b-row class="mt-5">
            <b-col cols="12" md="4">
                <b-card
                    border-variant="primary"
                    header="Quiero asesoría sobre un proyecto"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    tag="article"
                    style="max-width: 20rem;"
                    header-class="text-center"
                    body-class="text-left"
                    margin-bottom="75px"
                >
                    <!--b-card-img :src="require('../assets/lineamientos.png')"></b-card-img-->
                    <b-card-text>
                        
                    </b-card-text>

                    <div class="botones">
                    <b-button v-on:click="contarProyecto" id="botonProyecto" variant="primary">Seleccionar</b-button>
                    </div>
                
                </b-card>
            </b-col>

            <b-col cols="12" md="4">
                <b-card
                    border-variant="primary"
                    header="Quiero una charla"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    tag="article"
                    style="max-width: 20rem;"
                    header-class="text-center"
                    body-class="text-left"
                    margin-bottom="75px"
                >
                    <!--b-card-img :src="require('../assets/lineamientos.png')"></b-card-img-->
                    <b-card-text>
                        
                    </b-card-text>

                    <div class="botones">
                    <b-button v-on:click="contarCharla" id="botonCharla" variant="primary">Seleccionar</b-button>
                    </div>
                
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card
                    border-variant="primary"
                    header="Quiero una capacitación"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    tag="article"
                    style="max-width: 20rem;"
                    header-class="text-center"
                    body-class="text-left"
                    margin-bottom="75px"
                >
                    <!--b-card-img :src="require('../assets/lineamientos.png')"></b-card-img-->
                    <b-card-text>
                        
                    </b-card-text>

                    <div class="botones">
                    <b-button v-on:click="contarCapacitacion" id="botonCapacitacion" variant="primary">Seleccionar</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        </div>

        <br>
        <br>
        <br>

        <div class="Titulo3">
            <h4>QUIERO REUNIRME</h4>
        </div>

        <div class="Tarjetasreunion">
        <b-row class="mt-5">
            <b-col cols="12" md="4">
                <b-card
                    border-variant="primary"
                    header="Quiero reunirme"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    tag="article"
                    style="max-width: 20rem;"
                    header-class="text-center"
                    body-class="text-left"
                >
                    <!--b-card-img :src="require('../assets/otros.png')"></b-card-img-->
                    
                    <h6>
                        Si no encontraste la información en las categorías anteriores y consideras que una reunión
                        es el único espacio en el que se solucionará tu solicitud por favor selecciona esta opción 
                        y el equipo de la Dirección de Gobierno Digital evaluará tu caso y de ser necesario se pondrá
                        en contacto contigo.
                    </h6>

                    <div class="botones">
                    <b-button v-on:click="contarReunion" id="botonReunion" variant="primary">Seleccionar</b-button>
                    </div>
                </b-card>
            
            </b-col>
        </b-row>
        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Request",
    data: function () {
        return {
            id_usuario:"",
            botonLineamientos:0,
            botonSocializacion:0,
            botonAcompanamiento:0,
            botonFortalecimiento:0,
            botonMedicion:0,
            botonProyecto:0,
            botonCharla:0,
            botonCapacitacion:0,
            botonReunion:0,
            }
    },

    methods: {

        contarLineamientos: function() {
            this.botonLineamientos = this.botonLineamientos + 1;
            let self = this
            let id = localStorage.getItem('identificador');
            console.log(this.id, this.botonLineamientos);

            this.newLineamientos = {
                "id_usuario":id,
                "contador_lineamientos":this.botonLineamientos,
            }

                axios.post("http://127.0.0.1:8000/request/lineamientos/{id_usuario}", this.newLineamientos)
                    .then((result) => {
                        console.log(this.id);
                        console.log(this.botonLineamientos);
                        window.location.href = '/lineamientos';
                    })
                    .catch((error) => {
                        /*alert("Los datos no se pudieron guardar porque no hay conexión con la base de datos");*/
                        window.location.href = '/lineamientos';
                    });
        },

        contarSocializacion: function() {
            this.botonSocializacion = this.botonSocializacion + 1;
            let self = this
            let id = localStorage.getItem('identificador');
            console.log(this.id, this.botonSocializacion);

            this.newSocializacion = {
                "id_usuario":id,
                "contador_socializacion":this.botonSocializacion,
            }

                axios.post("http://127.0.0.1:8000/request/socializacion/", this.newSocializacion)
                    .then((result) => {
                        console.log(this.id);
                        console.log(this.botonSocializacion);
                        window.location.href = '/socializacion';
                    })
                    .catch((error) => {
                        /*alert("Los datos no se pudieron guardar porque no hay conexión con la base de datos");*/
                        window.location.href = '/socializacion';
                    });
        },

        contarAcompanamiento: function() {
            this.botonAcompanamiento = this.botonAcompanamiento + 1;
            let self = this
            let id = localStorage.getItem('identificador');
            console.log(this.id, this.botonAcompanamiento);

            this.newAcompanamiento = {
                "id_usuario":id,
                "contador_acompanamiento":this.botonAcompanamiento,
            }

                axios.post("http://127.0.0.1:8000/request/acompanamiento/", this.newAcompanamiento)
                    .then((result) => {
                        console.log(this.id);
                        console.log(this.botonAcompanamiento);
                        window.location.href = '/acompanamiento';
                    })
                    .catch((error) => {
                        /*alert("Los datos no se pudieron guardar porque no hay conexión con la base de datos");*/
                        window.location.href = '/acompanamiento';
                    });
        },

        contarFortalecimiento: function() {
            this.botonFortalecimiento = this.botonFortalecimiento + 1;
            let self = this
            let id = localStorage.getItem('identificador');
            console.log(this.id, this.botonFortalecimiento);

            this.newFortalecimiento = {
                "id_usuario":id,
                "contador_fortalecimiento":this.botonFortalecimiento,
            }

                axios.post("http://127.0.0.1:8000/request/fortalecimiento/", this.newFortalecimiento)
                    .then((result) => {
                        console.log(this.id);
                        console.log(this.botonFortalecimiento);
                        window.location.href = '/fortalecimiento';
                    })
                    .catch((error) => {
                        /*alert("Los datos no se pudieron guardar porque no hay conexión con la base de datos");*/
                        window.location.href = '/fortalecimiento';
                    });
        },

        contarMedicion: function() {
            this.botonMedicion = this.botonMedicion + 1;
            let self = this
            let id = localStorage.getItem('identificador');
            console.log(this.id, this.botonMedicion);

            this.newMedicion = {
                "id_usuario":id,
                "contador_medicion":this.botonMedicion,
            }

                axios.post("http://127.0.0.1:8000/request/medicion/", this.newMedicion)
                    .then((result) => {
                        console.log(this.id);
                        console.log(this.botonMedicion);
                        window.location.href = '/medicion';
                    })
                    .catch((error) => {
                        /*alert("Los datos no se pudieron guardar porque no hay conexión con la base de datos");*/
                        window.location.href = '/medicion';
                    });
        },

        contarProyecto: function() {
            this.botonProyecto = this.botonProyecto + 1;
            let self = this
            let id = localStorage.getItem('identificador');
            console.log(this.id, this.botonProyecto);

            this.newProyecto = {
                "id_usuario":id,
                "contador_proyecto":this.botonProyecto,
            }

                axios.post("http://127.0.0.1:8000/request/proyecto/", this.newProyecto)
                    .then((result) => {
                        console.log(this.id);
                        console.log(this.botonProyecto);
                        window.location.href = '/proyecto';
                    })
                    .catch((error) => {
                        /*alert("Los datos no se pudieron guardar porque no hay conexión con la base de datos");*/
                        window.location.href = '/proyecto';
                    });
        },

        contarCharla: function() {
            this.botonCharla = this.botonCharla + 1;
            let self = this
            let id = localStorage.getItem('identificador');
            console.log(this.id, this.botonCharla);

            this.newCharla = {
                "id_usuario":id,
                "contador_charla":this.botonCharla,
            }

                axios.post("http://127.0.0.1:8000/request/charla/", this.newCharla)
                    .then((result) => {
                        console.log(this.id);
                        console.log(this.botonCharla);
                        window.location.href = '/charla';
                    })
                    .catch((error) => {
                        /*alert("Los datos no se pudieron guardar porque no hay conexión con la base de datos");*/
                        window.location.href = '/charla';
                    });
        },

        
        contarCapacitacion: function() {
            this.botonCapacitacion = this.botonCapacitacion + 1;
            let self = this
            let id = localStorage.getItem('identificador');
            console.log(this.id, this.botonCapacitacion);

            this.newCapacitacion = {
                "id_usuario":id,
                "contador_capacitacion":this.botonCapacitacion,
            }

                axios.post("http://127.0.0.1:8000/request/capacitacion/", this.newCapacitacion)
                    .then((result) => {
                        console.log(this.id);
                        console.log(this.botonCapacitacion);
                        window.location.href = '/capacitacion';
                    })
                    .catch((error) => {
                        /*alert("Los datos no se pudieron guardar porque no hay conexión con la base de datos");*/
                        window.location.href = '/capacitacion';
                    });
        },


        contarReunion: function() {
            this.botonReunion = this.botonReunion + 1;
            let self = this
            let id = localStorage.getItem('identificador');
            console.log(this.id, this.botonReunion);

            this.newReunion = {
                "id_usuario":id,
                "contador_reunion":this.botonReunion,
            }

                axios.post("http://127.0.0.1:8000/request/reunion/", this.newReunion)
                    .then((result) => {
                        console.log(this.id);
                        console.log(this.botonReunion);
                        window.location.href = '/reunion';
                    })
                    .catch((error) => {
                        /*alert("Los datos no se pudieron guardar porque no hay conexión con la base de datos");*/
                        window.location.href = '/reunion';
                    });
        },

    }
}
</script>

<style>
#Request .Encabezado h4 {
    text-align: center;
}
#Request .Tarjetassaber {
    margin-left: 5%;
}
#Request .Tarjetasacomp {
    margin-left: 5%;
}
#Request .Tarjetasreunion {
    margin-left: 5%;
}
#Request .Tarjetassaber h6 {
    font-weight:lighter;
    text-align: justify;
}
#Request .Tarjetasacomp h6 {
    font-weight:lighter;
    text-align: justify;
}
#Request .Tarjetasreunion h6 {
    font-weight:lighter;
    text-align: justify;
}
#Request .Titulo1 {
    text-align: center;
    background: #F42F63;
    color: white;
}
#Request .Titulo2 {
    text-align: center;
    background: #F42F63;
    color: white;
}
#Request .Titulo3 {
    text-align: center;
    background: #F42F63;
    color: white;
}
#Request .botones {
    text-align: center;
}
</style>