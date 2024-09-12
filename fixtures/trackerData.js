const URL = 'https://comtrak.qa.be.dmclinical.com'
const trackerData = {
    TrackerData: `${URL}/api/v1/Trackers/GetTrackersData`,
    FormsAndSites: `${URL}/api/v1/Trackers/GetFormsAndSites`,
    OperationReport: `${URL}/api/v1/OperationReport`,
}
module.exports = trackerData;