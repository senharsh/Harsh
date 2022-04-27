using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FINAL.Models
{
    public class ContactPersonPost
    {
        [Key]
        public int postId { get; set; }
        public string postName { get; set; }
    }
}
