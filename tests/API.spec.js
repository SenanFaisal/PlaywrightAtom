const { test, expect } = require('@playwright/test');

test.describe('Leads Comtrak GET API', () => {
    require('../modules/leads/get/leadsApi')
    require('../modules/notification/get/notificationApi')
    require('../modules/trackers/get/trackerApi')
    require('../modules/recruiterList/get/recruiterApi')
});






