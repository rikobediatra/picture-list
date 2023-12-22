import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID LrmZmSSKW5OuwFQ465fWX9C5p6bzrV6Dqjf3lc-30lg',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
}

export default searchImages;