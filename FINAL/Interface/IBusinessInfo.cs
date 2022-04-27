using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FINAL.Models;

namespace FINAL.Interface
{
    public interface IBusinessInfo
    {
        Task<IEnumerable<BussinessInfo>> GetAllBussinessInfo();
        Task<IEnumerable<object>> GetAllBussinssInfobyid(int subCatId);
        Task<IEnumerable<CategoryMaster>> GetAllCategory();
        Task<IEnumerable<CityMaster>> GetAllCity();
       Task<IEnumerable<DistrictMaster>> GetAllDistrict();
        Task<IEnumerable<ContactPersonPost>> GetAllPost();
       Task<IEnumerable<StateMaster>> GetAllState();
        Task<IEnumerable<SubCategoryMaster>> GetAllSubCategory(int id);
    }
}
