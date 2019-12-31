class Libros{
    constructor(){
        this.url="http://localhost:5000/api"
    }
      async getLib(){
        const response= await fetch(this.url+'/libros',{
        });
        const data= response.json();
        return data;
    }
     async getselectcat(){
        const response=await fetch(this.url+'/categoria',{
        });
        const data=response.json();
        return data;
    }   
      async getselectsub(id){
        const response=await fetch(this.url+'/subcategoria/'+id,{
        });
        const data=response.json();
        return data;
    }
    async postLib(item){
        fetch(this.url+'/libros',{          
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(item)
        }).then(function(response){
            return response.text();
        }).then(function(data){
            let id = parseInt(data,10);         
            let postc = lib.postfile(id);
            postc.then((response)=>{
                table();
            })
        })
       
    }
     async postfile(id){
    let d = archivo.files[0];
    let formData = new FormData();
    formData.append('Id', id);
    formData.append('ArchivoFile', d);
        const it={
            Id:id,
            ArchivoFile:d
        };
       fetch(this.url+'/libros/uploadFile', {
            mode: 'no-cors',
            method: 'POST',
            body: formData,
        })
        .then(function (response) {
        
        });
    }
   
}