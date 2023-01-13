using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Syncfusion.EJ2.Chart;

namespace EJ2MVCSampleBrowser.Controllers.Chart
{
    public partial class ChartController : Controller
    {
        // GET: MultiLevelLabels
        public ActionResult MultiLevelLabels()
        {
            List<MultiLevelLabelsData> chartData = new List<MultiLevelLabelsData>
            {
                new MultiLevelLabelsData { x = "Grapes",  y = 28 },
                new MultiLevelLabelsData { x = "Apples",  y = 87 },
                new MultiLevelLabelsData { x = "Pears",   y = 42 },
                new MultiLevelLabelsData { x = "Grapes",  y = 13 },
                new MultiLevelLabelsData { x = "Apples",  y = 13 },
                new MultiLevelLabelsData { x = "Pears",   y = 10 },
                new MultiLevelLabelsData { x = "Tomato",  y = 31 },
                new MultiLevelLabelsData { x = "Potato",  y = 96 },
                new MultiLevelLabelsData { x = "Cucumber",y = 41 },
                new MultiLevelLabelsData { x = "Onion",   y = 59 }
             };
            ViewBag.dataSource = chartData;                   
            return View();
        }
        public class MultiLevelLabelsData
        {
            public string x;
            public double y;
        }
    }
}