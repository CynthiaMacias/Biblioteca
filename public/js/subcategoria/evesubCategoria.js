class subCategoria{
    constructor(){
          this.url="http://localhost:5000/api"
    }  
    async getsub(){
         const response= await fetch(this.url+'/subcategoria',{
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
    async getselect(){
        const response=await fetch(this.url+'/categoria',{

        });
        const data=response.json();
        return data;
    }
    async postsub(item){
        fetch(this.url+'/subcategoria',{
            method:'POST',
              headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             body:JSON.stringify(item)
        }).then(function(response){
            return response.text();
        }).then(function(data){
            table();
        })
    }
    async postEst (item){
        fetch(this.url+'/subcategoria/'+item.Id,{
            method:'PUT',
            headers:{
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body:JSON.stringify(item)
        }).then(function(response){
            return response.text();
        }).then(function(data){
           table();
        }) 
    }
}