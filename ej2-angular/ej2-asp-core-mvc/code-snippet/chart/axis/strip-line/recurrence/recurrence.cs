public ActionResult Index()
        {
            List<StripLineChartData> chartData = new List<StripLineChartData>
            {
               new StripLineChartData { x = 1, y = 28 },
               new StripLineChartData { x = 2, y = 27 },
               new StripLineChartData { x = 3, y = 33 },
               new StripLineChartData { x = 4, y = 36 },
               new StripLineChartData { x = 5, y = 28 },
               new StripLineChartData { x = 6, y = 30 },
               new StripLineChartData { x = 7, y = 31 }
            };

            List<ChartStripLine> yaxisstriplines = new List<ChartStripLine>();
            ChartStripLine stripy = new ChartStripLine();
            stripy.Start = 1;
            stripy.Size = 1;
            stripy.IsRepeat = true;
            stripy.RepeatEvery = 2;
            stripy.Color = "rgba(167,169,171, 0.3)";
            stripy.Visible = true;
            yaxisstriplines.Add(stripy);

            ViewBag.yAxis = yaxisstriplines;
            ViewBag.dataSource = chartData;
            return View();
        }


        public class StripLineChartData
        {
            public double x;
            public double y;
        }