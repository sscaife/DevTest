using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperTest.Database.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CustomerTypeId { get; set; }
        
        public CustomerType CustomerType { get; set; }

        public ICollection<Job> Jobs { get; set; }
    }
}
