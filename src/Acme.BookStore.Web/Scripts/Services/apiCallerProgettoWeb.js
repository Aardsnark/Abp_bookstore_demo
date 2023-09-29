export default class ApiCallerProgettoWeb
{

    constructor(helper)
    {
        this.apiCallerHelper = helper;
    }

    
    getAllBooks() {
        
        const url = `${commonModule.webApiBaseUrl}/app/book`;
        // return this.apiCallerHelper.callGetWithBearer(url);
        return this.apiCallerHelper.callGetWithoutBearerForTest(url);
    }

    getAllAuthors() {

        const url = `${commonModule.webApiBaseUrl}//app/author`;
        // return this.apiCallerHelper.callGetWithBearer(url);
        return this.apiCallerHelper.callGetWithoutBearerForTest(url);
    }
    
}