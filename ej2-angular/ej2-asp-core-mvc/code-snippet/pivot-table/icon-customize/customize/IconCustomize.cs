public IActionResult Index()
{
    var data = GetPivotData();
    ViewBag.DataSource = data;
    return View();
}

public List<PivotData> GetPivotData()
{
    List<PivotData> pivotData = new List<PivotData>();
    pivotData.Add(new PivotData { Sold = 31, Amount = 52824, Country = "France", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 51, Amount = 86904, Country = "France", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 90, Amount = 153360, Country = "France", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 25, Amount = 42600, Country = "France", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 27, Amount = 46008, Country = "France", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 49, Amount = 83496, Country = "France", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 95, Amount = 161880, Country = "France", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 67, Amount = 114168, Country = "France", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 75, Amount = 127800, Country = "France", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 67, Amount = 114168, Country = "France", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 69, Amount = 117576, Country = "France", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 90, Amount = 153360, Country = "France", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 16, Amount = 27264, Country = "France", Products = "Mountain Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 83, Amount = 124422, Country = "France", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 57, Amount = 85448, Country = "France", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 20, Amount = 29985, Country = "France", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 93, Amount = 139412, Country = "France", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 35, Amount = 52470, Country = "France", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 28, Amount = 41977, Country = "France", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 48, Amount = 71957, Country = "France", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 36, Amount = 53969, Country = "France", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 25, Amount = 37480, Country = "France", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 69, Amount = 103436, Country = "France", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 16, Amount = 23989, Country = "France", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 28, Amount = 41977, Country = "France", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 19, Amount = 28486, Country = "France", Products = "Road Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 89, Amount = 141999.5, Country = "France", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 91, Amount = 145190.5, Country = "France", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 24, Amount = 38292, Country = "France", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 75, Amount = 119662.5, Country = "France", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 100, Amount = 159550, Country = "France", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 30, Amount = 47865, Country = "France", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 69, Amount = 110089.5, Country = "France", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 25, Amount = 39887.5, Country = "France", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 42, Amount = 67011, Country = "France", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 94, Amount = 149977, Country = "France", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 76, Amount = 121258, Country = "France", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 52, Amount = 82966, Country = "France", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 33, Amount = 52651.5, Country = "France", Products = "Touring Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 16, Amount = 23989, Country = "Germany", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 21, Amount = 33505.5, Country = "Germany", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 74, Amount = 126096, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 99, Amount = 148406, Country = "Germany", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 31, Amount = 49460.5, Country = "Germany", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 57, Amount = 97128, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 41, Amount = 61464, Country = "Germany", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 64, Amount = 102112, Country = "Germany", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 85, Amount = 144840, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 76, Amount = 129504, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 33, Amount = 56232, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 71, Amount = 120984, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 81, Amount = 138024, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 65, Amount = 110760, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 39, Amount = 66456, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 91, Amount = 155064, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 16, Amount = 27264, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 59, Amount = 100536, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 36, Amount = 61344, Country = "Germany", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 39, Amount = 58466, Country = "Germany", Products = "Road Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 47, Amount = 70458, Country = "Germany", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 19, Amount = 28486, Country = "Germany", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 34, Amount = 50971, Country = "Germany", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 34, Amount = 50971, Country = "Germany", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 26, Amount = 38979, Country = "Germany", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 15, Amount = 22490, Country = "Germany", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 83, Amount = 124422, Country = "Germany", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 79, Amount = 118426, Country = "Germany", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 14, Amount = 20991, Country = "Germany", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 15, Amount = 23932.5, Country = "Germany", Products = "Touring Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 47, Amount = 74988.5, Country = "Germany", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 93, Amount = 148381.5, Country = "Germany", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 13, Amount = 20741.5, Country = "Germany", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 44, Amount = 70202, Country = "Germany", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 59, Amount = 94134.5, Country = "Germany", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 34, Amount = 54247, Country = "Germany", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 48, Amount = 76584, Country = "Germany", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 35, Amount = 55842.5, Country = "Germany", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 71, Amount = 113280.5, Country = "Germany", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 77, Amount = 131208, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 92, Amount = 156768, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 51, Amount = 86904, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 91, Amount = 155064, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 90, Amount = 153360, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 56, Amount = 95424, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 14, Amount = 23856, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 95, Amount = 161880, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 24, Amount = 40896, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 39, Amount = 66456, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 84, Amount = 143136, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 40, Amount = 68160, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 96, Amount = 163584, Country = "United Kingdom", Products = "Mountain Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 24, Amount = 35981, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 86, Amount = 128919, Country = "United States", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 31, Amount = 46474, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 36, Amount = 53969, Country = "United States", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 40, Amount = 59965, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 69, Amount = 103436, Country = "United States", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 95, Amount = 142410, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 95, Amount = 142410, Country = "United States", Products = "Road Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 30, Amount = 44975, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 11, Amount = 16494, Country = "United States", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 97, Amount = 145408, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 16, Amount = 23989, Country = "United States", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 40, Amount = 59965, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 68, Amount = 101937, Country = "United States", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 11, Amount = 16494, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 27, Amount = 40478, Country = "United States", Products = "Road Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 45, Amount = 67460, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 100, Amount = 149905, Country = "United States", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 70, Amount = 104935, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 83, Amount = 124422, Country = "United States", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 100, Amount = 149905, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 18, Amount = 26987, Country = "United States", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 70, Amount = 104935, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 81, Amount = 121424, Country = "United States", Products = "Road Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 20, Amount = 29985, Country = "United Kingdom", Products = "Road Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 99, Amount = 148406, Country = "United States", Products = "Road Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 43, Amount = 73272, Country = "United States", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 43, Amount = 73272, Country = "United States", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 52, Amount = 88608, Country = "United States", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 91, Amount = 155064, Country = "United States", Products = "Mountain Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 37, Amount = 63048, Country = "United States", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 41, Amount = 69864, Country = "United States", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 49, Amount = 83496, Country = "United States", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 23, Amount = 39192, Country = "United States", Products = "Mountain Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 67, Amount = 114168, Country = "United States", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 85, Amount = 144840, Country = "United States", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 25, Amount = 42600, Country = "United States", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 28, Amount = 47712, Country = "United States", Products = "Mountain Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 53, Amount = 90312, Country = "United States", Products = "Mountain Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 82, Amount = 130831, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 41, Amount = 65415.5, Country = "United States", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 60, Amount = 95730, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 71, Amount = 113280.5, Country = "United States", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 45, Amount = 71797.5, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 21, Amount = 33505.5, Country = "United States", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 94, Amount = 149977, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 34, Amount = 54247, Country = "United States", Products = "Touring Bikes", Year = "FY 2015", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 14, Amount = 22337, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 76, Amount = 121258, Country = "United States", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 50, Amount = 79775, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 75, Amount = 119662.5, Country = "United States", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 49, Amount = 78179.5, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 40, Amount = 63820, Country = "United States", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 94, Amount = 149977, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 17, Amount = 27123.5, Country = "United States", Products = "Touring Bikes", Year = "FY 2016", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 45, Amount = 71797.5, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 56, Amount = 89348, Country = "United States", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 75, Amount = 119662.5, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 11, Amount = 17550.5, Country = "United States", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q2" });
    pivotData.Add(new PivotData { Sold = 54, Amount = 86157, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 14, Amount = 22337, Country = "United States", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q3" });
    pivotData.Add(new PivotData { Sold = 11, Amount = 17550.5, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 76, Amount = 121258, Country = "United States", Products = "Touring Bikes", Year = "FY 2017", Quarter = "Q4" });
    pivotData.Add(new PivotData { Sold = 45, Amount = 71797.5, Country = "United Kingdom", Products = "Touring Bikes", Year = "FY 2018", Quarter = "Q1" });
    pivotData.Add(new PivotData { Sold = 80, Amount = 127640, Country = "United States", Products = "Touring Bikes", Year = "FY 2018", Quarter = "Q1" });
    return pivotData;
}

public class PivotData
{
    public int Sold { get; set; }
    public double Amount { get; set; }
    public string Country { get; set; }
    public string Products { get; set; }
    public string Year { get; set; }
    public string Quarter { get; set; }
}