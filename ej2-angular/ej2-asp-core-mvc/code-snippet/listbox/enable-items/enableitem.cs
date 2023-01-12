﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ListBoxController : Controller
    {
        public IActionResult enableitem()
        {
            ViewBag.data = new string[] { "BadmHennessey Venominton", "Bugatti Veyron Super Sport", "SSC Ultimate Aero", "Bugatti Chiron", "Koenigsegg CCR", "McLaren F1", "Aston Martin One- 77", "Jaguar XJ220" };
            return View();
        }
    }
}