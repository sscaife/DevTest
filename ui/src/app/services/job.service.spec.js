"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var job_service_1 = require("./job.service");
describe('JobService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(job_service_1.JobService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=job.service.spec.js.map