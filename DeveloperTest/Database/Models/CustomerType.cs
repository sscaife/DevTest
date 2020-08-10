using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperTest.Database.Models
{
    public class CustomerType
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Customer> Customers { get; set; }
    }
}
