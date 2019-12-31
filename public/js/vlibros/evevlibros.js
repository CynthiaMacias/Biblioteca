class ver{
    constructor(){
        this.url="http://localhost:5000/api"
    }
    async getLibros(){
        const response= await fetch(this.url+'/libros',{
        });
        const data= response.json();
        return data;
    }
}