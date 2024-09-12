const { test } = require('@playwright/test');
const auth_token = require('../../../auth-session.json')
const notificationData = require('../../../fixtures/notificationData');
const bearerToken = auth_token;


test('Notification API', async ({ request }) => {
    await Promise.all([
        request.get(notificationData.GetAll, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(notificationData.GetID, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(notificationData.GetCountUserEmail, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(notificationData.GetUserbyEmail, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
    ]);
});