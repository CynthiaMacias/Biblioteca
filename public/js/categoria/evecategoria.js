class Categoria{
    constructor(){
        this.url="http://localhost:5000/api"
    }
    async getCat(){
        const response= await fetch(this.url+'/categoria',{
        });
        const data= response.json();
        return data;
    }
    async getCatId(){
        const response = await fetch(this.url+'/categoria',{
        });
        const data=response.json();
        return data;
    }
    async postEst(item){
        fetch(this.url+'/categoria/'+item.Id,{
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
    async postCat(item){
        fetch(this.url+'/categoria',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(item)
        }).then(function(response){
            return response.text();
        }).then(function(data){
            table();
        })
    }
}