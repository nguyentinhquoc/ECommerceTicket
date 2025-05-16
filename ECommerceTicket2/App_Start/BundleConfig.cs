using System.Web;
using System.Web.Optimization;

namespace ECommerceTicket2
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));
            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                "~/Content/assets/js/main.js"
                //"~/Content/js/filghtAddNew.js",
                //"~/Content/js/flight-list-2.js",
                //"~/Content/js/Flight-Payment1.js",
                //"~/Content/js/Flight-Payment2.js",
                //"~/Content/js/flight.js"
                //"~/Content/js/FlightLists.js",
                //"~/Content/js/LowestFlightSalesPlan1.js",
                //"~/Content/js/LowestFlightSalesPlan2.js", // sửa luôn lỗi 2 dấu chấm
                //"~/Content/js/LowestFlightManageSalePlan.js",
                //"~/Content/js/test.js"
            ));
           // bundles.Add(new ScriptBundle("~/bundles/jsFlight").Include(
           //    "~/Content/js/flight.js"
          
           //));
            bundles.Add(new StyleBundle("~/Content/cssMain").Include(
                "~/Content/assets/css/app.css"
                //"~/Content/assets/css/main.css",
                //"~/Content/assets/css/responsit.css"
                //"~/Content/assets/css/filghtAddNew.css",
                //"~/Content/assets/css/flight-list-2.css",
                //"~/Content/assets/css/Flight-Payment1.css",
                //"~/Content/assets/css/Flight-Payment2.css",
                //"~/Content/assets/css/flight.css"
                //"~/Content/assets/css/FlightLists.css",
                //"~/Content/assets/css/LowestFlightManageSalePlan.css",
                //"~/Content/assets/css/LowestFlightSalesPlan1.css",
                //"~/Content/assets/css/LowestFlightSalesPlan2.css",
                //"~/Content/assets/css/test.css"
            ));


        }
    }
}
