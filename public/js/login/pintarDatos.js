let log = new login();
$("#btnLogin").click(function(){
    let email=$("#email").val();
    let password=$("#password").val();
    const item={
     email:email,
     password:password
    };
    let login =  log.postLog(item);
    login.then((response)=>{
            
     });
});
