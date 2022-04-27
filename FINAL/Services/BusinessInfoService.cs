using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FINAL.Models;
using FINAL.Data;
using FINAL.Interface;

namespace WebApi.Services
{
    public class BusinessInfoService : IBusinessInfo
    {
        private ApplicationDbContext _context;

        public BusinessInfoService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<BussinessInfo>> GetAllBussinessInfo()
        {
            return _context.BussinessInfo;
        }
        public async Task<IEnumerable<CategoryMaster>> GetAllCategory()
        {
            return _context.CategoryMaster;
        }
        public async Task<IEnumerable<SubCategoryMaster>> GetAllSubCategory(int id)
        {
            return _context.SubCategoryMaster.Where(o =>o.catId == id).ToList();
        }
        public async Task<IEnumerable<StateMaster>> GetAllState()
        {
            return _context.StateMaster;
        }
        public async Task<IEnumerable<CityMaster>> GetAllCity()
        {
            return _context.CityMaster;
        }
        public async Task<IEnumerable<DistrictMaster>> GetAllDistrict()
        {
            return _context.DistrictMaster;
        }
        public async Task<IEnumerable<ContactPersonPost>> GetAllPost()
        {
            return _context.contactPersonPost;
        }

        // GEt Info By ID
        public async Task<IEnumerable<object>> GetAllBussinssInfobyid(int subCatId)
            {
            try
            {  //List<BussinessInfo> Data = _context.BussinessInfo.Where(o => o.bussid == subCatId).ToList();
                var Data = from B in _context.BussinessInfo.Where(o => o.bussid == subCatId)
                           join c in _context.CategoryMaster on B.catId equals c.catId
                           join s in _context.SubCategoryMaster on B.subCatId equals s.subCatId
                           join p in _context.contactPersonPost on B.postId equals p.postId
                           join Ci in _context.CityMaster on B.cityId equals Ci.cityId
                           select new
                           {
                               BusinessId = B.bussid,
                               BussinessTitle = B.bussTitle,
                               OwnerContact = B.ownerContact,
                               OwnerName = B.ownerName,
                               ContactPerson = B.contactPerson,
                               BusinessContactNo = B.bussContactNo,
                               Address = B.Address,
                               City = Ci.cityName,
                               Category = c.catName,
                               SubCategory = s.subCatName,
                               Post = p.postName,
                           };
                return Data;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

    }
}
