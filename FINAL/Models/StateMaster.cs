using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FINAL.Models
{
    public class StateMaster
    {
        [Key]
        public int stateID { get; set; }
        public string stateName { get; set; }
        public string narmalizedName { get; set; }
        public int stateCode { get; set; }
        public bool isActive { get; set; }
        public bool isDelete { get; set; }
    }
}
