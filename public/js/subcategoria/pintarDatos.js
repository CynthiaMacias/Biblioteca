var sub = new subCategoria();
var table = function(){
  $("#tb-subcategoria").html("");
  let data = sub.getsub();
  data.then(item=>{
    datatable(item);
  })
}
let datatable=function(data){
  var estilo; 
  $.each(data,function(i,data){
      estilo = (data.estatus == false) ? 'tomato' : ((data.estatus == true) ? '' : '');
      document.getElementById('tb-subcategoria').innerHTML +=`<tr class='tr-sub'id=${data.id} data-id=` + data.id + ` style="background:` + estilo + `; cursor:pointer; ">
                                                                        <td>` + data.id + `</td>
                                                                        <td>` + data.nombre + `</td> 
                                                                        <td><button type="submit" id=${data.id}  class="btn btn-warning btnEditart"><i class="far fa-edit"></i> Editar</button></td >
                                                                        <td><button type="submit" id=${data.id+`,`+ data.nombre +`,`+ data.id_categoria}   class="btn btn-danger btnEliminar"><i class="fas fa-undo-alt"></i> Baja</button></td>
                                                                        <td><button type="submit" id=${data.id+`,`+ data.nombre +`,`+ data.id_categoria }  class="btn btn-primary btnReactivar"><i class="fas fa-redo"></i> Reactivar</button></td >
                                                                    </tr>`;
    });
    $(".btnEliminar").click(function(){
      var valores = this.id;
      var valor = valores.split(",");
      var Id= valor[0];
      let i = parseInt(Id,10);
      var nombre = valor[1];
      var idc = valor[2];
      let id_c = parseInt(idc,10);
      const item={
        Id:i,
        Nombre:nombre,
        Id_categoria:id_c,
        Estatus:false
        
      };
      let poste = sub.postEst(item);
        poste.then((response)=>{
            $("#modal").modal('show');
            $("#modal .modal-title").html("")
            $("#modal .modal-body").html(`<div class="text-center"><h3 class="text-center header"><i class="fas fa-redo" style="color: red; font-size: 85px;text-align: center; display: block;"></i>Dado de baja correctamente</h3></div>`);

        })
    })
    $(".btnReactivar").click(function(){
       var valores = this.id;
      var valor = valores.split(",");
      var Id= valor[0];
      let i = parseInt(Id,10);
      var nombre = valor[1];
      var idc = valor[2];
      let id_c = parseInt(idc,10);
      const item={
        Id:i,
        Nombre:nombre,
        Id_categoria:id_c,
        Estatus:true
        
      };
      let poste = sub.postEst(item);
      poste.then((response)=>{
          $("#modal").modal('show');
          $("#modal .modal-title").html("")
          $("#modal .modal-body").html(`<div class="text-center"><h3 class="text-center header"><i class="fas fa-redo" style="color: blue; font-size: 85px;text-align: center; display: block;"></i>Dado de baja correctamente</h3></div>`);

      })
    })
}
let select=function(data){
    data.forEach(item => {
        document.getElementById("categoria").innerHTML += `<option value=` + item.id + `>` + item.nombre + `</option>`;

    });
}
$("#btnNuevo").click(function(){
    $("#modal").modal('show');
    $("#modal .modal-title").html("Captura de datos");
      $("#modal .modal-body").html(`<div class="col-lg-12">
        <form action="#" id="formCat">
        <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Categoría</label>
                <div class="col-sm-10">
                 <select id="categoria" name="categoria" class="form-control">                                 

                </select>
                </div>
              </div>
           <div class="form-group row">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="nombre" style="text-transform:uppercase;" onkeyup="javascript:this.value=this.value.toUpperCase(); placeholder="NOMBRE">
                </div>
              </div>
            </form>
        </div>`);
    $('#modal .modal-footer').html(`<div class="col-lg-3 offset-10"><button type="button" class="btn btn-success btn-block align-items-center btnGuardar" id="btnGuardar">  Guardar <i class=" fas fa-save" font-size: 30px;></i></button></div>`);
    let subc =  sub.getselect();
    subc.then((response)=>{
     select(response)
    })
    $("#btnGuardar").click(function(){
    let nombre =$("#nombre").val();
    let name= nombre.toUpperCase();
    let id_cat=$("#categoria").val();
    let id=parseInt(id_cat);
    const item={
      Nombre:name,
      Id_categoria:id,
      Estatus:true     
    };
    let subc =  sub.postsub(item);
    subc.then((response)=>{
        $("#modal").modal('show');
        $("#modal .modal-title").html("")
        $("#modal .modal-footer").html("")
        $("#modal .modal-body").html(`<div class="text-center"><div class="text-center"><h3><i class="far fa-check-circle" style="color: green; font-size: 85px;text-align: center; display: block;"></i> Guardado correctamente</h3></i>`);
      })        
     });
})
table()