using AutoMapper;
using FINAL.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using WebApi.Entities;
using FINAL.Data;
//using WebApi.Interface;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BusinessInfoController : Controller
    {
        private IBusinessInfo _BussinessMaster;
        public BusinessInfoController(IBusinessInfo BussinessService)
        {
            _BussinessMaster = BussinessService;
        }
        [HttpGet]
        [Route("GetAllBussinessInfo")]
        public IActionResult GetAllBussinessInfo()
        {
            var bussinessInfo = _BussinessMaster.GetAllBussinessInfo();
            return Ok(bussinessInfo);
        }
        [HttpGet]
        [Route("GetAllCategory")]
        public IActionResult GetAllCategory()
        {
            var category = _BussinessMaster.GetAllCategory();
            return Ok(category);
        }
        [HttpGet]
        [Route("GetAllState")]
        public IActionResult GetAllState()
        {
            var state = _BussinessMaster.GetAllState();
            return Ok(state);
        }
        [HttpGet]
        [Route("GetAllSubCategory")]
        public IActionResult GetAllSubCategroy(int id)
        {
            var subCat = _BussinessMaster.GetAllSubCategory(id);
            return Ok(subCat);
        }
        [HttpGet]
        [Route("GetAllDistrict")]
        public IActionResult GetAllDistrict()
        {
            var district = _BussinessMaster.GetAllDistrict();
            return Ok(district);
        }
        [HttpGet]
        [Route("GetAllCity")]
        public IActionResult GetAllCity()
        {
            var city = _BussinessMaster.GetAllCity();
            return Ok(city);
        }
        [HttpGet]
        [Route("GetAllPost")]
        public IActionResult GetAllPost()
        {
            var city = _BussinessMaster.GetAllPost();
            return Ok(city);
        }

        [HttpGet]
        [Route("GetAllDataByid")]
        public IActionResult GetAllBussinessInfoById(int subCatId)
        {
            var bussinessInfo = _BussinessMaster.GetAllBussinssInfobyid(subCatId);
            return Ok(bussinessInfo);
        }
    }
}
