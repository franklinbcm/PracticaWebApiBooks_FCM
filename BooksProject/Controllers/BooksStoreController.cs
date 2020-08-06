using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using System.Net;
using System.Web.Script.Serialization;

namespace BooksProject.Controllers
{
    public class BooksStoreController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetBookList()
        {
            var Url = "http://localhost:62902/api/Books";
            var json = new WebClient().DownloadString(Url);
            JavaScriptSerializer js = new JavaScriptSerializer();
            var model = js.Deserialize<dynamic>(json);
  
                return Json(new { Result = "Ok", Record = model });
     
            }

        public ActionResult GetAutor(int authorId) {

            var Url = "http://localhost:62902/api/Authors/books/" + authorId;
            var json = new WebClient().DownloadString(Url);
            JavaScriptSerializer js = new JavaScriptSerializer();
            var model = js.Deserialize<dynamic>(json);

            return PartialView("_GetAutor", Json(new { Result = "Ok", Record = model }));

        }




    }

}