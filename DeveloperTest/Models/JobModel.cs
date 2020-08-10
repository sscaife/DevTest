using System;

namespace DeveloperTest.Models
{
    public class JobModel
    {
        public JobModel()
        {
            Customer = new CustomerModel();
        }

        public int JobId { get; set; }

        public string Engineer { get; set; }

        public DateTime When { get; set; }

        public CustomerModel Customer { get; set; }
    }
}
