let vlib = new ver();
var table = function(){
    $("#tb-vlibros").html();
    let data = vlib.getLibros();
    data.then(item=>{
      datatable(item);
    })
}
let datatable=function(data){
  $.each(data,function(i,it){
    $("#myDiv").append(`
    <div class="bs-example">
    <div class="card" style="max-width: 600px;">
        <div class="row no-gutters">
            <div class="col-md-6" style="background: #868e96;">
                <img src="/images/book.png" class="card-img-top h-100" alt="...">
            </div>
            <div class="col-md-4">
                <div class="card-body">
                    <h5 class="card-title">${it.nombre}</h5>
                    <p class="card-text">${it.archivo}</p>
                    <a href="#" id=${it.archivo} class="btn btn-primary btnVer">Ver libro</a>
                </div>
            </div>
        </div>
    </div>
</div>`); 
    });
    $(".btnVer").click(function () {
    let id = this.id;
    var iframe = "<iframe width='100%' height='650' src=http://localhost:4545//files//" + id + "></iframe>";
    $("#modal").modal('show');
    $("#modal .modal-body").html(`
        <div style="display:flex; justify-content:center;">
             ${iframe}
        </div>
    `);
})
}
table();

