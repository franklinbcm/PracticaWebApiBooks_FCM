var LangSpanish = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún registro disponible!",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
};
var divLoading = '<div class="loading2" > </div> ';
var divImageLoaging = '<div id="loading2Image" class="Loading" style="display:none; z-index:9999999" <iframe src="about:blank"  style="border:none; top:0; left:0; height:100%; width:100%; z-index:-1; position:absolute;" /></div>  ';
var BeginRequestHandler = function (sender, args) {
    $("body").append(divLoading);
    $("body").append(divImageLoaging);
    $("#loading2Image").css("display", "block");
};
var EndRequestHandler = function (sender, args) {
    $("#loading2Image , .loading2").remove();
};
var ShowLoading = function () {
    BeginRequestHandler();
};
var HideLoading = function () {
    EndRequestHandler();
};


var CallAjax = function (vUrl, vParameter, vDataType, vSucess, RequestType, isAsync) {
    $.ajax({
        type: RequestType,
        url: vUrl,
        data: vParameter !== undefined ? vParameter : {},
        contentType: "application/json; charset=utf-8",
        dataType: vDataType,
        success: vSucess,
        async: isAsync !== undefined ? isAsync : true,
        beforeSend: function () {
            ShowLoading();
        },
        error: function (data) {
            if (data.status === 0) {
                alert("Se ha perdido la conexión con el servidor");
                return false;
            }
            if (data.status !== 200) {
                console.log("Url:" + vUrl);
                console.log((vParameter !== undefined ? "Param:" + vParameter : {}));
                if (data !== undefined && data.responseXML !== undefined)
                    alert("<span>" + vUrl + "</span>" + data.responseXML);
                else
                    alert("<span>" + vUrl + "</span>" + data.responseText);
            }
        }
    }).always(function () {
        HideLoading();
    });
};
var GetPartialView = function (vUrl, vParameter, vSucess, isAsync) {
    CallAjax(vUrl, vParameter, "html", vSucess, "POST", (isAsync === undefined ? true : isAsync));
};



var ShowPopUpBTS = function (content, title, fnCallBackBtn, IsCentered) {
    IsCentered = (IsCentered === undefined ? false : IsCentered);
    $("#myModal").on("hidden.bs.modal", function () {
        $body.html('');
        if (fnCallBackBtn !== undefined)
            fnCallBackBtn();
    });
    var $myModal = $("#myModal");
    var $myModalLabel = $myModal.find("#myModalLabel");
    var $myModalHeader = $myModal.find(".modal-header");
    $myModalHeader.removeClass();
    $myModalLabel.text(" " + title);
    $myModalHeader.addClass('modal-header ' + ObjtitleType().Primary);
    if (title.indexOf('Eliminar') > 0)
        $myModalLabel.attr('style', 'color:red');
    var $body = $myModal.find(".modal-body");
    var $Content = $myModal.find(".modal-content");
    if (IsCentered)
        $Content.addClass("modal-dialog-centered");
    else
        $Content.removeClass("modal-dialog-centered");
    $body.html(content);
    $(".btn btn-primary").off("click");
    $(".btn btn-primary").click(function () {
        $myModal.modal('hide');
        $body.html('');
        if (fnCallBackBtn !== undefined)
            fnCallBackBtn();
    });
    $myModal.modal({ backdrop: "static", keyboard: false });
    $myModal.modal("show");
};

var ObjtitleType = function () {
    return { Default: "", Primary: "bg-primary", Success: "bg-success", Info: "bg-info", Warning: "bg-warning", Danger: "bg-danger" }
};
var IconbyObjtitleType = function (vObjtitleType) {

    let $Ctrol = $(".modal-title");
    $Ctrol.removeClass();
    $Ctrol.addClass("modal-title");

    switch (vObjtitleType) {
        case 'bg-primary':
            $Ctrol.attr('style', 'color:white');
            break;
        case 'bg-success':
            $Ctrol.addClass("fa fa-thumbs-o-up faa-flash animated").attr('style', 'color:darkgreen');
            break;
        case 'bg-info':
            $Ctrol.addClass("fa fa-info-circle faa-flash animated").attr('style', 'color:green');
            break;
        case 'bg-warning':
            $Ctrol.addClass("fa fa-warning faa-flash animated").attr('style', 'color:#ff7c00');
            break;
        case 'bg-danger':
            $Ctrol.addClass("fa fa-minus-circle faa-flash animated").attr('style', 'color:red');
            break;
        default:
            $Ctrol.addClass("");
            break;
    }


};
var ShowMessageBTS = function (message, title, titleType, fnCallBackBtn, IsCentered) {
    IsCentered = (IsCentered === undefined ? false : IsCentered);
    $("#myModalSmall").on("hidden.bs.modal", function () {
        $body.html('');
        if (fnCallBackBtn !== undefined)
            fnCallBackBtn();
    });
    var $myModal = $("#myModalSmall");
    var $body = $myModal.find(".modal-body");
    var $myModalLabel = $myModal.find("#myModalLabel");
    var $myModalHeader = $myModal.find(".modal-header");
    $myModalHeader.removeClass();
    $myModalLabel.text(" " + title);
    titleType = (titleType === undefined || titleType === null ? ObjtitleType().Primary : titleType);
    $myModalHeader.addClass('modal-header ' + titleType);
    var $Content = $myModal.find(".modal-content");
    if (IsCentered)
        $Content.addClass("modal-dialog-centered");
    else
        $Content.removeClass("modal-dialog-centered");
    $body.html(message);
    $(".btn btn-primary").off("click");
    $(".btn btn-primary").click(function () {
        $myModal.modal('hide');
        $body.html('');
        if (fnCallBackBtn !== undefined)
            fnCallBackBtn();
    });
    $myModal.modal({ backdrop: "static", keyboard: false });
    $myModal.modal("show");
};
var ConfirmMessageBTS = function (message, fnCallBackBtn, IsCentered) {
    IsCentered = (IsCentered === undefined ? false : IsCentered);
    $("#myModalSmall").on("hidden.bs.modal", function () {
        $body.html('');
    });
    var $myModal = $("#ConfirmModal");
    var $body = $myModal.find(".modal-body");
    $body.html(message);
    var $myModalLabel = $myModal.find("#myModalLabel");
    var $myModalHeader = $myModal.find(".modal-headerConfirm");
    $myModalHeader.removeClass();
    var titleType = ObjtitleType().Primary;
    $myModalHeader.addClass('modal-header ' + titleType);
    var $Content = $myModal.find(".modal-content");
    if (IsCentered)
        $Content.addClass("modal-dialog-centered");
    else
        $Content.removeClass("modal-dialog-centered");
    var $Yes = $myModal.find("#modal-btn-si");
    var $No = $myModal.find("#modal-btn-no");
    $Yes.off("click");
    $Yes.on("click", function () {
        fnCallBackBtn(true);
        $myModal.modal('hide');
    });
    $No.off("click");
    $No.on("click", function () {
        fnCallBackBtn(false);
        $myModal.modal('hide');
    });
    $myModal.modal({ backdrop: "static", keyboard: false });
    $myModal.modal("show");
};

var FillDrops = function (vControl, data, defaultValue) {
    try {
        if (data) {
            CleanDropsOptions(vControl);
            if (defaultValue || defaultValue !== undefined) {
                $(vControl).append($('<option>', { value: '0', text: '--Seleccione--' }));
            }
            $.each(data, function (index, item) {
                $(vControl).append($('<option>', {
                    value: item.Value,
                    text: item.Text
                }));
            });
        }
        ;
    }
    catch (e) {
        console.warn(e);
    }
};

var CleanDropsOptions = function (vControl) {
    $(vControl).find('option').remove();
};