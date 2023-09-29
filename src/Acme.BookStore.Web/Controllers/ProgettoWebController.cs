using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace ProgettoIndustriale.Web.Controllers
{

    public class ProgettoWebController: Controller
    {
		private readonly IConfiguration _configuration;
		private readonly ILogger<ProgettoWebController> _logger;
		public ProgettoWebController(IConfiguration configuration, ILogger<ProgettoWebController> logger)
		{
			_configuration = configuration;
			_logger = logger;
		}
		public IActionResult Home()
        {
            return View();
        }
        public IActionResult Books()
        {
            return View();
        }
        public IActionResult Authors()
        {
            return View();
        }
        
    }
}
