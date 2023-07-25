using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SupplyandDemand_API.Models;
using Microsoft.EntityFrameworkCore;

namespace SupplyandDemand_API.Repository
{
    public class SupplyDataRepository:SupplyDataInterface
    {
        private AllSupplyDataContext _db;

        public SupplyDataRepository(AllSupplyDataContext userDb)

        {

            _db = userDb;

        }

        #region GetAllEmployeeDetails

        public async Task<IEnumerable<AllDemandDatum>> GetAllData()

        {

            try

            {

                return await _db.AllDemandData.ToListAsync();

            }

            catch (Exception)

            {

                throw;

            }

        }

        #endregion
    }
}