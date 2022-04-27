using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FINAL.Models
{
    public class SubCategoryMaster
    { 
        [Key]
        public int subCatId { get; set; }
        public int catId { get; set; }
        public string subCatName { get; set; }
        public bool isActive { get; set; }
        public bool isDelete { get; set; }
    }
}
