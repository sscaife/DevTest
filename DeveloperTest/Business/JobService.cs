using System.Linq;
using System.Runtime.InteropServices;
using DeveloperTest.Business.Interfaces;
using DeveloperTest.Database;
using DeveloperTest.Database.Models;
using DeveloperTest.Models;

namespace DeveloperTest.Business
{
    public class JobService : IJobService
    {
        private readonly ApplicationDbContext context;

        public JobService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public JobModel[] GetJobs()
        {
            return JobModels().ToArray();
        }

        public JobModel GetJob(int jobId)
        {
            var query = JobModels();

            return query.SingleOrDefault(o => o.JobId == jobId);
        }

        private IQueryable<JobModel> JobModels()
        {
            var query = from job in context.Set<Job>()
                join cust in context.Set<Customer>()
                    on job.CustomerId equals cust.Id into custs
                from c in custs.DefaultIfEmpty()
                join custType in context.Set<CustomerType>()
                    on c.CustomerTypeId equals custType.Id into custTypes
                from ct in custTypes.DefaultIfEmpty()
                select new JobModel
                {
                    JobId = job.JobId,
                    Engineer = job.Engineer,
                    When = job.When,
                    Customer = new CustomerModel
                    {
                        Id = c.Id,
                        Name = c.Name,
                        CustomerType = ct.Name
                    }
                };
            return query;
        }

        public JobModel CreateJob(BaseJobModel model)
        {
            var addedJob = context.Jobs.Add(new Job
            {
                Engineer = model.Engineer,
                When = model.When,
                CustomerId = model.CustomerId
            });

            context.SaveChanges();

            return new JobModel
            {
                JobId = addedJob.Entity.JobId,
                Engineer = addedJob.Entity.Engineer,
                When = addedJob.Entity.When
            };
        }
    }
}
