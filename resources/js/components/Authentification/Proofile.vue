<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{user.email}}</strong> Command
      </h3>
    </header>
   <div>
    <table>
    <tr v-for="(c) of cart" :key="c.id">
      <td><img :src="(`../storage/images/${c.imageartpetitf}`)" :alt="c.designation" width="50"></td>  
      <td>{{ c.designation }}</td>
      <td>{{ c.price }} TND </td>
      <td>- Quantité : {{ c.quantite }} </td>
      </tr>
   </table>
   
     <div >
       
         <div>Total items : {{cart.length }}</div>
         <div>Total price  : {{total}} TND </div>
      
    </div>

     <button class="btn btn-info" @click="command()"> VALIDER </button>

  </div>

  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:8000/commandes';

export default {
  name: 'Profile',
  data(){
    return{
      user:{},
      cart:[],
       total:0,
       source:{},
       Produits:[]
    }
  },
  methods: {
    command() {
      //Mettre à jour la quantité de stock
      this.majproduits();
      //Mettre en place la commande
      //construire une ligne commande
      let tabLignes=[];
      this.cart.map((lig)=>{tabLignes.push({"idproduit":lig.id,"designationproduit":lig.designation,"quantitecommandee":lig.quantite}) });
      //construire l'objet commande
    const objetcommande={
        client:this.user.email,
        total: this.total,
        lignes: tabLignes 
      }
         return axios.post(API_URL, objetcommande)
                    .then(response => (
                        console.log(response.data),
                        alert("valdation"),
                        localStorage.removeItem("cart"),
                        this.cart =[],
                        this.total=0,
                          this.$router.push('/')  
                    ))
                    .catch(err => console.log(err))
    },
    getProduits(){
          let apiURL = 'http://localhost:8000/produits';
            axios.get(apiURL).then(res => {
                this.Produits = res.data;
            }).catch(error => {
                console.log(error)
            });
       },
        majproduits(){
           this.cart.map((lig)=>{
            this.Produits.map((pro)=>{
              if(pro.id==lig.id){
                let objetproduit={
                    reference: pro.reference,
                    designation: pro.designation,
                    marque: pro.marque,
                    prixAchat: pro.prixAchat,
                    price: pro.price,
                    qtestock:pro.qtestock-lig.quantite,
                    imageartpetitf: pro.imageartpetitf,
                    
                };
                return axios.put("http://localhost:8000/produits/"+pro.id, objetproduit)
                        .then(response => (
                            console.log(response.data)
                          ))
                        .catch(err => console.log(err))
             }
          });
          });
        }
     },
      mounted(){
       this.cart = JSON.parse(localStorage.getItem("cart"));  
       let tot=0;
      this.cart.map((ca)=>{tot= tot + ca.price*ca.quantite})
      this.total=tot
          
        const us = JSON.parse(localStorage.getItem('user'));
        this.user = us.user;
      this.getProduits();
     }
};
</script>
