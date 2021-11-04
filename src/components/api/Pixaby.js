import axios from 'axios'



console.dir(axios)


export class PixabyFetch {
    constructor() {
        // this.base_url = base_url;
        // this.api_key = api_key;
        this._searchQuery = '';
        this._page = 1
    }

    get searchQuery() {
    return this._searchQuery;
    }
    set searchQuery(value) {
        return this._searchQuery = value
    }

    get page() {
    return this._page;
    }
    set page(value) {
        return this._page += value
    }

    searchPhotos() {
        // axios.defaults.baseURL = this.base_url;
        // axios.defaults.headers.common.key = this.api_key

        let url = `https://pixabay.com/api/?key=23260269-a14f68c41e91863ff9df952e6&q=${this.searchQuery}&page=${this.page}&per_page=12`
        
 


        return axios
            .get(url)
            .then((result) => {
                return result.data
            })
            .then((data) => {
            // console.log(data.hits)
            return data.hits
            
            })
            .catch((err) => {
                console.log(err)
                return err
            })
       
    }
    
    
}