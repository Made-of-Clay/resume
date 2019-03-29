/**
 * Base class for services (blog, portfolio, ...)
 */
export default class BaseRequestService {
    constructor() {
        this.baseUrl = 'http://api.adamleis.com/wp-json/wp/v2';
    }

    request(url) {
        return fetch(url).then(response => {
            let json = response.json();
            if (response.status >= 400) {
                throw new Error(`(${json.code}) ${json.message}`);
            } else {
                return json;
            }
        });
    }
}