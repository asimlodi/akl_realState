 import axios from "axios";

 export const baseUrl = 'https://bayut.p.rapidapi.com'


 export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
            headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': '1c646660a0mshf9b8e4210aa9f4fp1657a1jsn41dbc3040653'
            }
        });
          return data;
     }