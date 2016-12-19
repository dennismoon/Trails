using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Hosting;
using Trails.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Trails.Controllers
{
    [Route("api/[controller]")]
    public class RunnerController : Controller
    {
        IHostingEnvironment _env;

        public RunnerController(IHostingEnvironment env)
        {
            _env = env;
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var runners = GetRunners();

            return Ok(runners);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var basePath = _env.WebRootPath;

            var runner = GetRunners().Where(r => r.Id == id).FirstOrDefault();

            return Ok(runner);
        }

        private IEnumerable<Runner> GetRunners()
        {
            string source = "";

            var filePath = Path.Combine(_env.WebRootPath, "App_Data", "runners.json");

            using (StreamReader sr = System.IO.File.OpenText(filePath))
            {
                source = sr.ReadToEnd();
            }

            var runners = JsonConvert.DeserializeObject<IEnumerable<Runner>>(source);

            return runners;
        }
    }
}
