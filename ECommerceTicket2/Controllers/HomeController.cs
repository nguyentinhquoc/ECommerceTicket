using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ECommerceTicket2.Models;
namespace ECommerceTicket2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            
            return View();
        }

        public ActionResult Flight()
        {
            return View();
        }
        public ActionResult FlightList()
        {

            return View();
        }
        public ActionResult FlightPayment()
        {

            return View();
        }
        public ActionResult FlightPayment1()
        {

            return View();
        }
    }
}