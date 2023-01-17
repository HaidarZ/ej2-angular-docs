public class HomeController : Controller
{
    public ActionResult Index()
    {
        var tools = new
        {
            tooltipText = "Insert Symbol",
            template = "<button class='e-tbar-btn e-btn' tabindex='-1' id='custom_tbar'  style='width:100%'><div class='e-tbar-btn-text rtecustomtool' style='font-weight: 500;'> &#937;</div></button>"
        };
        ViewBag.items = new object[] { "Bold", "Italic", "Underline", "|", "Formats", "Alignments", "OrderedList",
        "UnorderedList", "|", "CreateLink", "Image", "CreateTable", "|", "SourceCode", tools
        , "|", "Undo", "Redo"
            };
        ViewBag.button = new
        {
            content = "Insert",
            isPrimary = true
        };
        ViewBag.button1 = new
        {
            content = "Cancel"
        };

        return View();
    }
}
