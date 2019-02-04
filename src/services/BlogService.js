import BaseRequestService from './BaseRequestService';

const baseUrl = 'http://api.adamleis.com/wp-json/wp/v2';
const logError = (msg, thrown) => console.error(msg, thrown);

export default class BlogService extends BaseRequestService {
    constructor() {
        super();
        this.postsUrl = `${baseUrl}/posts/`;
    }

    getPosts() { // limits 10 most recent by default
        return this.request(this.postsUrl)
            .catch(thrown => logError('Error fetching posts', thrown));
    }

    getWelcomePost() {
        return this.request(`${this.postsUrl}/7`)
            .catch(thrown => logError('Error fetching Welcome Post', thrown));
    }
}