using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EJ2_Core_Application.Models;
using Newtonsoft.Json;
using Syncfusion.EJ2.Charts;

namespace EJ2_Core_Application.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.seatData = GetSeatData();
            return View();
        }
        public object GetSeatData()
        {
            string text = System.IO.File.ReadAllText("./wwwroot/scripts/MapsData/seat.json");
            return JsonConvert.DeserializeObject(text);
        }
    }
}