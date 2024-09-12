const { test } = require('@playwright/test');
const auth_token = require('../../../auth-session.json')
const recruiter = require('../../../fixtures/recruiterData');
const bearerToken = auth_token;

test(' Recruiter list GET API', async ({ request }) => {
    await Promise.all([
        request.get(recruiter.RecruiterIndex, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(recruiter.RecruitersCallList, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(recruiter.PrescreenerList, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
    ]);
});