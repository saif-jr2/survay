import axios from 'axios'; 

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.adsurveysd.com/MobileApi.asmx/sa_result?S_A_UniqueID={1D211C4A-4EE7-474A-87E4-136F456EF954}';
export const fetchData = async ()=>{
    try{
        const fetchData = await axios.get(proxyurl+url);
        const data = fetchData.data.response
        return data;
    }catch(error){
        
    }
}