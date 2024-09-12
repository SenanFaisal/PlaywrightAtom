const { test } = require('@playwright/test');
const auth_token = require('../../../auth-session.json')
const trackerData = require('../../../fixtures/trackerData');
const bearerToken = auth_token;

// //*****************    Trackers API      */
test(' Trackers API', async ({ request }) => {
    await Promise.all([
        request.get(trackerData.TrackerData, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(trackerData.FormsAndSites, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(trackerData.OperationReport, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
    ]);
});