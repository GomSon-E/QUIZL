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
                        <div class="toast-body" style="padding: 20px; font-size: 17px">
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