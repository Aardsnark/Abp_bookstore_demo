using Microsoft.AspNetCore.Mvc;
namespace Acme.BookStore.Web.Views.Home
{
    public class HomePage : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Books()
        {
            return View();
        }
        public ActionResult Authors()
        {
            return View();
        }
    }
}
