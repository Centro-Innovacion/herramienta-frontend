import vueRouter from 'vue-router'

import App from '../App'
import Home from '../components/Home'
import Entidad from '../components/Entidad'
import Menu from '../components/Menu'
import Lineamientos from '../components/Lineamientos'
import Socializacion from '../components/Socializacion'
import Acompanamiento from '../components/Acompanamiento'
import Fortalecimiento from '../components/Fortalecimiento'
import Medicion from '../components/Medicion'
import Proyecto from '../components/Proyecto'
import Charla from '../components/Charla'
import Capacitacion from '../components/Capacitacion'
import Reunion from '../components/Reunion'
import Integracion from '../components/Integracion'
import Terminos from '../components/Terminos'
import Privacidad from '../components/Privacidad'

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
            path: '/entidad',
            name: "Entidad",
            component: Entidad
        },
        {
            path: '/menu',
            name: "Menu",
            component: Menu
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
            path: '/integracion',
            name: "Integracion",
            component: Integracion
        },
        {
            path: '/terminos',
            name: "Terminos",
            component: Terminos
        },
        {
            path: '/privacidad',
            name: "Privacidad",
            component: Privacidad
        }
        ]
        })
        export default router