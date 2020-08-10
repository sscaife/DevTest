using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeveloperTest.Database.Models;
using DeveloperTest.Models;

namespace DeveloperTest.Business.Interfaces
{
    public interface ICustomerService
    {
        CustomerType[] GetCustomerTypes();

        void SaveCustomer(CustomerModel customer);

        CustomerModel[] GetCustomers();

        CustomerModel GetCustomerById(int id);
    }
}
