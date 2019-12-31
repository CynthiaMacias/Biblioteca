class Users{
    constructor(){
         this.url="http://localhost:5000/api"
    }
    async getUsers(){
        const response = await fetch(this.url+'/usuarios/list',{

        });
        const data = response.json();
        return data;
    }
      async getCat(){
        const response= await fetch(this.url+'/categoria',{
        });
        const data= response.json();
        return data;
    }
   async getsubId(){
        const response=await fetch(this.url+'/subcategoria',{

        });
        const data=response.json();
        return data;
    }
    async getsubId(){
        const response=await fetch(this.url+'/subcategoria',{
        });
        const data=response.json();
        return data;
    }
     async getLibros(id){
        const response=await fetch(this.url+'/libros/cat/'+id,{
        });
        const data=response.json();
        return data;
    }
}