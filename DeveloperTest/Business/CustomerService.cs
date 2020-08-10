using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeveloperTest.Business.Interfaces;
using DeveloperTest.Database;
using DeveloperTest.Database.Models;
using DeveloperTest.Models;

namespace DeveloperTest.Business
{
    public class CustomerService : ICustomerService
    {

        private readonly ApplicationDbContext context;

        public CustomerService(ApplicationDbContext context)
        {
            this.context = context;
        }
        
        public CustomerType[] GetCustomerTypes()
        {
            return context.CustomerTypes.Select(c => new CustomerType
            {
                Id = c.Id,
                Name = c.Name
            }).ToArray();
        }

        public void SaveCustomer(CustomerModel customer)
        {
            context.Customer.Add(new Customer
            {
                Name = customer.Name,
                CustomerTypeId = customer.CustomerTypeId
            });

            context.SaveChanges();
        }

        public CustomerModel[] GetCustomers()
        {
            var query = CustomerModelsQuery();

            return query.ToArray();
        }

        private IQueryable<CustomerModel> CustomerModelsQuery()
        {
            var query = from cust in context.Set<Customer>()
                join custType in context.Set<CustomerType>()
                    on cust.CustomerTypeId equals custType.Id
                select new CustomerModel
                {
                    Name = cust.Name,
                    Id = cust.Id,
                    CustomerType = custType.Name
                };
            return query;
        }

        public CustomerModel GetCustomerById(int id)
        {
            return CustomerModelsQuery().FirstOrDefault(o => o.Id == id);
        }
    }
}
