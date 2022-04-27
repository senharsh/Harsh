using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FINAL.Models
{
    public class DistrictMaster
    {
        [Key]
        public int distId { get; set; }
        public int stateID { get; set; }
        public string distName { get; set; }
        public int distCode { get; set; }
        public bool isActive { get; set; }
        public bool isDelete { get; set; }
    }
}
