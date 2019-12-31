let lib = new Libros();
let dataForm;
let ar;
let archivo;
var table = function(){
    $("#tb-categoria").html();
    let data = lib.getLib();
    data.then(item=>{
      datatable(item);
    })
}
let datatable=function(data){
  $.each(data,function(i,it){
    document.getElementById('tb-libros').innerHTML +=`<tr class='tr-lib'id=${it.id} data-id=` + it.id + ` ">
                                                                        <td>` + it.id + `</td>
                                                                        <td>` + it.nombre + `</td> 
                                                                        <td><button type="submit" id=${it.id}  class="btn btn-warning btnEditart"><i class="far fa-edit"></i> Editar</button></td >
                                                                    </tr>`;
    })
}
table()
let select=function(data){
    data.forEach(item => {
        document.getElementById("categoria").innerHTML += `<option value=` + item.id + `>` + item.nombre + `</option>`;

    });
}
let selectCat=function(data){
    data.forEach(item => {
        document.getElementById("subcategoria").innerHTML += `<option value=` + item.get.id + `>` + item.get.nombre + `</option>`;

    });
}
$("#btnNuevo").click(function(){
    $("#modal").modal('show');
    $("#modal .modal-title").html("Captura de datos");
     $("#modal .modal-body").html(`<form action="#" id="formLib">
        <div class="row">
         <div class="col-lg-6">
            <div class="form-group">
                <label for="">Nombre</label>
                <input type="text" id="nombre" name="nombre" style="text-transform:uppercase;" onkeyup="javascript:this.value=this.value.toUpperCase();" class="form-control">
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label>Categoria</label>
                <select id="categoria" name="categoria" class="form-control">                                 
                    <option>Categoría</option>
                </select>
            </div>
        </div>
       <div class="col-lg-6">
            <div class="form-group">
                <label>Subcategoria</label>
                <select id="subcategoria" name="subcategoria" class="form-control">                                 

                </select>
            </div>
        </div>
          <div class="form-group">
             <label>Archivo</label>
            <input type="file" class="form-control"  name="fileToUpload" id="inputFileServer">
         </div>       
        </div>
        </div>                                          
      </form>`)
    $('#modal .modal-footer').html(`<div class="col-lg-3 offset-10"><button type="button" class="btn btn-success btn-block align-items-center btnGuardar" id="btnGuardar">  Guardar <i class=" fas fa-save" font-size: 30px;></i></button></div>`);
     let lb =  lib.getselectcat();
    lb.then((response)=>{
        select(response)
    })
   
   $('#categoria').on('change', function() {
     let id = this.value;
    let subc =  lib.getselectsub(id);
     subc.then((response)=>{
        selectCat(response)
     })
   })
     $("#btnGuardar").click(function(){
        let nombre=$("#nombre").val();
        let name=nombre.toUpperCase();
        let idcat = $("#categoria").val();
        let subcat=$("#subcategoria").val();
        let idc = parseInt(idcat,10);
        let sub = parseInt(subcat,10);
         archivo = document.getElementById('inputFileServer');
        if(archivo.files && archivo.files[0]){
            console.log("File Seleccionado : ", archivo.files[0]);
        }    
       
       
        dataForm = new FormData();      
        dataForm.append('ArchivoFile', ar);
        const item={
          Nombre:name,
          CategoriaId:idc,
          SubCategoriaId:sub,
          Estatus:true,
          Archivo:"PRUEBA"
         
        };
        let postc = lib.postLib(item);
          postc.then((response)=>{
              $("#modal").modal('show');
              $("#modal .modal-title").html("")
              $("#modal .modal-footer").html("")
              $("#modal .modal-body").html(`<div class="text-center"><div class="text-center"><h3><i class="far fa-check-circle" style="color: green; font-size: 85px;text-align: center; display: block;"></i> Guardado correctamente</h3></i>`);
          })        
    });
})