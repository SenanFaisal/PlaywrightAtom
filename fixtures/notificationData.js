const URL = 'https://comtrak.qa.be.dmclinical.com'
const notificationData = {

    GetAll: `${URL}/api/v1/Notification/GetAll`,
    GetID: `${URL}/api/v1/Notification/Get/:id`,
    GetUserbyEmail: `${URL}/api/v1/Notification/GetByUserEmail`,
    GetCountUserEmail: `${URL}/api/v1/Notification/GetByUserEmail`
}
module.exports = notificationData;