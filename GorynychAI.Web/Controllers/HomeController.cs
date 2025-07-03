using System.Diagnostics;
using GorynychAI.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace GorynychAI.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult WebDevelopment()
        {
            return View();
        }

        public IActionResult JobProject()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }
    }
}
