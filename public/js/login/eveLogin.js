class login{
    constructor(){
          this.url="http://localhost:5000/api"
    }  
  async postLog(item){
  let response = fetch(this.url+"/usuarios/Login", {
		method: 'POST',
		body: JSON.stringify(item),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	response
		.then(data => {
			return data.json();
		})
		.then(data => {
			let res = Object.keys(data);
			console.log(res);
			if (res[0] === "Error") {			
			} else {
				location.href = "/menu";
			}
		});
}
 } 

