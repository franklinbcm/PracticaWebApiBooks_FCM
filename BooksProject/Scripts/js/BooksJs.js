/// <reference path="tools.js" />
$(document).ready(function () {

    FillBooksTable();

});

function FillBooksTable() {

        //Fill Grid
    var Url = "http://localhost/api/Books";

    var $View = "<i id='btView' class='fa fa-eye isBtn' title='Mas Información' onclick='ViewInfo($(this));'></i>&nbsp;&nbsp;";
    var $Add = "<i id='btAdd'   class='fa fa-plus-circle isBtn'   title='Crear' onclick='Addnew();'></i>&nbsp;&nbsp;";
    var $edit = "<i id='btEdit'   class='fa fa-pencil-square-o isBtn' style='color: green;' title='Editar' onclick='Addnew();'></i>&nbsp;&nbsp;";
    var $delete = "<i  id='btRemove'   class='fa fa-trash isBtn' style='color: red;' title='Eliminar' onclick='Addnew();'></i>";

    CallAjax("/BooksStore/GetBookList", JSON.stringify({}), "json", function (data) {
        if (data && data.Record)
            var Result = $.parseJSON(data.Record.Record);
                $("#TblBooksList").DataTable({
                    destroy: true,
                    searching: true,
                    language: LangSpanish,
                    lengthMenu: [6, 10, 20, 40, 60, 80, 90, 100, 200, 500, 1000, 2000],
                    "order": [[2, "asc"]],  //Sort By Colum CONTACTNAME
                    data: Result,
                    columns: [
                        {
                            data: null,
                            defaultContent: $View + $Add + $edit + $delete, "width": "10%"
                        },
                        { data: "BookID", "title": "BOOKID", className: "csBookid" },
                        { data: "Name", "title": "T&iacute;tulo"},
                        { data: "Published", "title": "Publicado" },
                        { data: "Version", "title": "Version" }


                    ]


                });

        }, "POST", true);


};
function CleanControl() {
    $('#Tb_Search').val(Limpiar);
    $('#TblBooksList').DataTable().clear().draw();
}


function ViewInfo(id) {

    var Id = $(id).parent().next().html();

    GetPartialView("/BooksStore/GetAutor", JSON.stringify({ "authorId": Id }), function (data) {
        
        ShowPopUpBTS(data, "Información");
        debugger;
        //var ConName = $("#hfContactName").val();
        //$("#hfContactID").val(vContactID);
        //$("#Tb_ContactName").val(ConName);

        $("#btnOk").hide()
 
    }, true);
}

function Addnew() {
    alert("Pendiente de trabajar!");
}