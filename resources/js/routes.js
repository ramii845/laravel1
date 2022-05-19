import { createRouter,createWebHashHistory } from 'vue-router'
import Home from "./Home";
import AllCategories from "./components/Categories/AllCategories"; 
import AddCategorie from "./components/Categories/AddCategorie"; 
import EditCategorie from "./components/Categories/EditCategorie";
import AllScategories from "./components/SousCategories/AllSousCategories";
import AddScategorie from "./components/SousCategories/AddSousCategorie"; 
import EditSousCategorie from "./components/SousCategories/EditSousCategorie"; 
import AllArticles from "./components/Articles/AllArticles"; 
import AddArticles from "./components/Articles/AddArticle"; 
import EditArticle from "./components/Articles/EditArticle"; 
import Register from './components/Authentification/Register.vue';
import Login from './components/Authentification/Login.vue';
import Profile from './components/Authentification/Profile.vue'; 
import Reegister from './components/Authentification/Reegister.vue';
import Loogin from './components/Authentification/Loogin.vue';
import Proofile from './components/Authentification/Proofile.vue'; 
import Logout from './components/Authentification/Logout.vue'; 
import Hoome from "./Hoome";
import Cart from "./components/Cart.vue";



const routes = [
 {
 path: '/home',
 name: 'home',
 component: Home
 },
 {
    path: '/',
    name: 'hoome',
    component: Hoome
    },
 {
    path: '/categories',
    name: 'categories',
    component: AllCategories
    },
    {
        path: '/addCategorie',
        name: 'addCategorie',
        component: AddCategorie
        },
        {
            path: '/editCategorie',
            name: 'editCategorie',
            component: EditCategorie 
        },
        {
            path: '/scategories',
            name: 'scategories',
            component: AllScategories
            },
            {
                path: '/addScategories',
                name: 'addScategories',
                component: AddScategorie
             },
             {
                path: '/editScategorie',
                name: 'editScategorie',
                component: EditSousCategorie
                },{
                    path: '/articles',
                    name: 'articles',
                    component: AllArticles
                    }, 
                    {
                        path: '/addArticle',
                        name: 'addArticle',
                        component: AddArticles
                        }, 
                        {
                            path: '/editArticle',
                            name: 'editArticle',
                            component: EditArticle
                            }, 
                            {
                                name: 'register',
                                path: '/register',
                                component: Register
                                },
                                {
                                name: 'login',
                                path: '/login',
                                component: Login
                                },
                                {
                                name: 'profile',
                                path: '/profile',
                                component: Profile },
                                {
                                    name: 'logout',
                                    path: '/logout',
                                    component: Logout
                                    }, 
                                    {
                                        path: '/Cart',
                                        name: 'Cart',
                                        component: Cart
                                        },
                                        {
                                            name: 'reegister',
                                            path: '/reegister',
                                            component: Reegister
                                            },
                                            {
                                            name: 'loogin',
                                            path: '/loogin',
                                            component: Loogin
                                            },
                                            {
                                            name: 'proofile',
                                            path: '/proofile',
                                            component: Proofile },
                                            
                           
                       
       
   
 ];
const router = createRouter({
 history: createWebHashHistory(),
 routes
 })

export default router