var cat = new Categoria();
var table = function(){ 
   $("#tb-categoria").html("");
    let data = cat.getCat();
    data.then(item=>{
      datatable(item);
    })
}
table();
let datatable=function(data){
  var estilo;
  $("#tb-categoria").html("");
  $.each(data,function(i,it){
     estilo = (it.estatus == false) ? 'tomato' : ((it.estatus == true) ? '' : '');
    document.getElementById('tb-categoria').innerHTML +=`<tr class='tr-cat'id=${it.id} data-id=` + it.id + ` style="background:` + estilo + `; cursor:pointer; ">
                                                                        <td>` + it.id + `</td>
                                                                        <td>` + it.nombre + `</td> 
                                                                        <td><button type="submit" id=${it.id}  class="btn btn-warning btnEditart"><i class="far fa-edit"></i> Editar</button></td >
                                                                        <td><button type="submit" id=${it.id+`,`+ it.nombre}   class="btn btn-danger btnEliminar"><i class="fas fa-undo-alt"></i> Baja</button></td>
                                                                        <td><button type="submit" id=${it.id+`,`+ it.nombre}  class="btn btn-primary btnReactivar"><i class="fas fa-redo"></i> Reactivar</button></td >
                                                                        </tr>`;
    });
    $(".btnEliminar").click(function(){
     var valores = this.id;
     var valor = valores.split(",");
     var Id = valor[0];
     let i = parseInt(Id,10)
     var nombre = valor[1];
      const item={
        Id:i,
        Nombre:nombre,
        Estatus:false
      };
      let poste = cat.postEst(item);
        poste.then((response)=>{
            $("#modal").modal('show');
            $("#modal .modal-title").html("")
            $("#modal .modal-body").html(`<div class="text-center"><h3 class="text-center header"><i class="fas fa-redo" style="color: red; font-size: 85px;text-align: center; display: block;"></i>Dado de baja correctamente</h3></div>`);
          })  
    })
     $(".btnReactivar").click(function(){
     var valores = this.id;
     var valor = valores.split(",");
     var Id = valor[0];
     let i = parseInt(Id,10)
     var nombre = valor[1];
      const item={
        Id:i,
        Nombre:nombre,
        Estatus:true
      };
      let poste = cat.postEst(item);
        poste.then((response)=>{
            $("#modal").modal('show');
            $("#modal .modal-title").html("")
            $("#modal .modal-body").html(`<div class="text-center"><h3 class="text-center header"><i class="fas fa-redo" style="color: blue; font-size: 85px;text-align: center; display: block;"></i>Dado de baja correctamente</h3></div>`);
          })  
    })
}
$("#btnNuevo").click(function(){  
    $("#modal").modal('show');
    $("#modal .modal-title").html("Captura de datos");
      $("#modal .modal-body").html(`<div class="col-lg-12">
        <form action="#" id="formCat">
           <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="nombre" style="text-transform:uppercase;" onkeyup="javascript:this.value=this.value.toUpperCase(); placeholder="NOMBRE">
                </div>
              </div>
            </form>
        </div>`);
    $('#modal .modal-footer').html(`<div class="col-lg-3 offset-10"><button type="button" class="btn btn-success btn-block align-items-center btnGuardar" id="btnGuardar">  Guardar <i class=" fas fa-save" font-size: 30px;></i></button></div>`);
    $("#btnGuardar").click(function(){
        let nombre=$("#nombre").val();
        let name=nombre.toUpperCase();
        const item={
          Nombre:name,
          Estatus:true
        };
        let postc = cat.postCat(item);
          postc.then((response)=>{
              $("#modal").modal('show');
              $("#modal .modal-title").html("")
              $("#modal .modal-footer").html("")
              $("#modal .modal-body").html(`<div class="text-center"><div class="text-center"><h3><i class="far fa-check-circle" style="color: green; font-size: 85px;text-align: center; display: block;"></i> Guardado correctamente</h3></i>`);
          })        
    });
})
