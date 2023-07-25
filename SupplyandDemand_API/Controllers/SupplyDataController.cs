using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SupplyandDemand_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using SupplyandDemand_API.Repository;
using System.Threading.Tasks;

namespace SupplyandDemand_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SupplyDataController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly SupplyDataInterface _context;

        public SupplyDataController(IConfiguration configuration, SupplyDataInterface context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetSupplyData()
        {
            var supplyData = await _context.GetAllData();
            return Ok(supplyData);
        }
    }
}
