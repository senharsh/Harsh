using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FINAL.Models
{
    public class BussinessInfo
    {
        [Key]
        public int? bussid { get; set; }
        public int? catId { get; set; }
        public int? subCatId { get; set; }
        public int? cityId { get; set; }
        public string bussTitle { get; set; }
        public string ownerName { get; set; }
        public string ownerContact { get; set; }
        public string contactPerson { get; set; }
        public int? postId { get; set; }
        public string bussContactNo { get; set; }
        public string Address { get; set; }
        public string Logo { get; set; }
    }
}
