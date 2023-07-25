using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SupplyandDemand_API.Models;

namespace SupplyandDemand_API.Repository
{
    public interface SupplyDataInterface
    {
        

        Task<IEnumerable<AllDemandDatum>> GetAllData();
    }
}