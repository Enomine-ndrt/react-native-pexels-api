import axios from 'axios';

//key
//563492ad6f9170000100000139ef2659cd3b4f3bbf4ce69a911c6fa2
export const getImages = async (searchTerm = 'programming')=> 
await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`,{
    headers: {
        Authorization:'563492ad6f9170000100000139ef2659cd3b4f3bbf4ce69a911c6fa2'
    }
});