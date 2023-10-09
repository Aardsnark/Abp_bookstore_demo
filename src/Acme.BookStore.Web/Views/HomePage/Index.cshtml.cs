using System.Threading.Tasks;
using Acme.BookStore.Web.Pages;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;

namespace Acme.BookStore.Web.Views.HomePage;


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
