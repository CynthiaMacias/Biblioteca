var users = new Users();
var table = function(){
  $("#tb-users").html("");
  let data = users.getUsers();
  data.then(item=>{
    datatable(item);
  })
}
let datatable=function(data){
  var estilo; 
  $.each(data,function(i,data){
      estilo = (data.estatus == false) ? 'tomato' : ((data.estatus == true) ? '' : '');
      document.getElementById('tb-users').innerHTML +=`<tr class='tr-sub'id=${data.id} data-id=` + data.id + ` style="background:` + estilo + `; cursor:pointer; ">
                                                                        <td>` + data.id + `</td>
                                                                        <td>` + data.userName + `</td> 
                                                                        <td><button type="submit" id=${data.id}  class="btn btn-warning btnEditart"><i class="far fa-edit"></i> Editar</button></td >
                                                                        <td><button type="submit" id=${data.id+`,`+ data.userName}  class="btn btn-primary btnPermisos"><i class="fas fa-redo"></i> Permisos</button></td >
                                                                    </tr>`;
    });
    $(".btnPermisos").click(function(){
    $("#modal").modal('show');
    $("#modal .modal-title").html("Permisos");
      $("#modal .modal-body").html(`<div class="col-lg-12">
        <form action="#" id="formPerm">         
            <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                <div class="card-header"></div>
                    <div class="card-body">
                        <div id="div_perm">                      
                    </div>
                     <div class="card-body">                    
                        <div id="div_sub">
                    </div>
                     <div class="card-body">                    
                        <div id="div_libro">
                    </div>
                    </div>
                </div>
            </form>
        </div>`);
    $('#modal .modal-footer').html(`<div class="col-lg-3 offset-10"><button type="button" class="btn btn-success btn-block align-items-center btnGuardar" id="btnGuardar">  Guardar <i class=" fas fa-save" font-size: 30px;></i></button></div>`);
        perm()
    })
    
}
let perm = function(){
 let data = users.getCat();
  data.then(item=>{
    permcheck(item);
  })
}
let permcheck=function(data){
    data.forEach(function(d){
         $("#div_perm").append(`
            <div class="col-lg-3">
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="${d.id}" name="permisoscat">
                        <label class="form-check-label" for="${d.nombre}">${d.nombre}</label>
                    </div>               
                </div>
            </div>            
        `);
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){   
                 idC = parseInt(this.value);                   
                subC(idC)
            }          
        });
        })
  
}
let subC = function(id){
 let data = users.getsubId(id);
  data.then(item=>{
    permchecksub(item);
  })
}
let permchecksub=function(data){
    data.forEach(function(d){
        $("#div_sub").html("");
         $("#div_sub").append(`
            <div class="col-lg-3">
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="${d.id}" name="permisossub">
                        <label class="form-check-label" for="${d.nombre}">${d.nombre}</label>
                    </div>               
                </div>
            </div>            
        `);
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                //let idcat = parseInt(this.value);
                libro(idC)
            }else{
                $("#div_sub").html("");
            }          
        });
        })
  
}
let libro = function(id){
 let data = users.getLibros(id);
  data.then(item=>{
    permchecklib(item);
  })
}
let permchecklib=function(data){
    $("#div_libro").html("");
    data.forEach(function(d){
        
         $("#div_libro").append(`
            <div class="col-lg-3">
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="${d.id}" name="permisossub">
                        <label class="form-check-label" for="${d.nombre}">${d.nombre}</label>
                    </div>               
                </div>
            </div>            
        `);
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
             
            }else{
                $("#div_libro").html("");
            }          
        });
        })
  
}
table();