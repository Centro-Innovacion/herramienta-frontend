import vueRouter from 'vue-router'

import App from '../App'
import Home from '../components/Home'
import Personas from '../components/Personas'
import Request from '../components/Request'
import Lineamientos from '../components/Lineamientos'
import Socializacion from '../components/Socializacion'
import Acompanamiento from '../components/Acompanamiento'
import Fortalecimiento from '../components/Fortalecimiento'
import Medicion from '../components/Medicion'
import Proyecto from '../components/Proyecto'
import Charla from '../components/Charla'
import Capacitacion from '../components/Capacitacion'
import Reunion from '../components/Reunion'
import Evaluacion from '../components/Evaluacion'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: Home
            },
        {
            path: '/home',
            name: "Home",
            component: Home
        },
        {
            path: '/personas',
            name: "Personas",
            component: Personas
        },
        {
            path: '/request',
            name: "Request",
            component: Request
        },
        {
            path: '/lineamientos',
            name: "Lineamientos",
            component: Lineamientos
        },
        {
            path: '/socializacion',
            name: "Socializacion",
            component: Socializacion
        },
        {
            path: '/acompanamiento',
            name: "Acompanamiento",
            component: Acompanamiento
        },
        {
            path: '/fortalecimiento',
            name: "Fortalecimiento",
            component: Fortalecimiento
        },
        {
            path: '/medicion',
            name: "Medicion",
            component: Medicion
        },
        {
            path: '/proyecto',
            name: "Proyecto",
            component: Proyecto
        },
        {
            path: '/charla',
            name: "Charla",
            component: Charla
        },
        {
            path: '/capacitacion',
            name: "Capacitacion",
            component: Capacitacion
        },
        {
            path: '/reunion',
            name: "Reunion",
            component: Reunion
        },
        {
            path: '/evaluar',
            name: "Evaluacion",
            component: Evaluacion
        }
        ]
        })
        export default router