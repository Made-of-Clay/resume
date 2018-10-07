/**
 * Base class for services (blog, portfolio, ...)
 */
class BaseRequestService {
    constructor() {
        this.baseUrl = 'http://api.adamleis.com/wp-json/wp/v2/';
    }

    request(url) {
        return fetch(url).then(response => response.json())
            .then(json => {
                if (json.data.status < 400) {
                    throw new Error(`(${json.code}) ${json.message}`);
                } else {
                    return json;
                }
            });
    }
}