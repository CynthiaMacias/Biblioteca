var modal = () => {
    $("#md").html(`<div class="modal fade" tabindex="-1" role="dialog" id="modal" data-backdrop="static" data-keyboard="false">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title"></h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" id="cerrar">&times;</span></button>                                    
                                </div>
                                <div class="modal-body">                      
                                </div>
                                <div class="modal-footer">                               
                                </div>
                            </div>
                        </div>
                    </div>`);
};
modal();