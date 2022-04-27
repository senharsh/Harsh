using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FINAL.Models
{
    public class CityMaster
    {
        [Key]

        public int cityId { get; set; }
        public int distId { get; set; }
        public string cityName { get; set; }
        public bool isActive { get; set; }
        public bool isDelete { get; set; }
    }
}
