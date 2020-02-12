using System.IO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class SpaFallback : Controller
    {
        [Authorize]
        public IActionResult Index()
        {
            return PhysicalFile(Path.Combine(
                Directory.GetCurrentDirectory(), "wwwroot", "index.html"),
                "text/HTML"
            );
        }
    }
}