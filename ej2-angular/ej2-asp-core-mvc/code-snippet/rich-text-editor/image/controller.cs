public class HomeController : Controller
{
    public ActionResult Index()
    {
        ViewBag.items = new[] { "Image" };
        return View();
    }
}
