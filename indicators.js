function myAlert(content) {
    var alert = `<div id="alert" style="position: fixed;">
                    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                        <strong class="me-auto">Alert</strong>
                        <small></small>
                        <button type="button" id="closeBtn" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                        </div>
                        <div class="toast-body" style="padding: 20px; font-size: 18px;">
                        ${content}
                        </div>
                    </div>
                </div>`

    addBlock()
    $("body").append(alert)

    $("#alert #closeBtn").click(function() {
        removeIndicator("alert")
    })
}

function myConfirm(content) {
    var confirm = `<div id="confirm" style="position: fixed;">
                        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" style="width: 450px; height: 200px">
                            <div class="toast-header">
                            <strong class="me-auto">Confirm</strong>
                            <small></small>
                            <button type="button" id="closeBtn" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                            </div>
                            <div class="toast-body" style="padding: 20px; font-size: 18px;">
                            ${content}
                            </div>
                            <button type="button" id="confirmBtn" class="btn btn-primary" style="position: absolute; right : 110px; bottom: 10px">Confirm</button>
                            <button type="button" id="closeBtn" class="btn btn-secondary" style="position: absolute; right : 10px; bottom: 10px" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>`
    
    addBlock()
    $("body").append(confirm)

    $("")

    $("#confirm #confirmBtn").click(function() {
        removeIndicator("confirm")
        return true;
    }) 

    $("#confirm #closeBtn").click(function() {
        removeIndicator("confirm")
        return false;
    })
}

function addBlock() {
    var block = `<div id="block"></div>`

    $("body").append(block)

    $("#block").css({
        "width": "100vw",
        "height" : "100vh",
        "background-color" : "rgba(0,0,0,0.5)",
        "position" : "fixed"
    })
}

function removeIndicator(target) {
    $("#block").remove()
    $("#" + target).remove()
}