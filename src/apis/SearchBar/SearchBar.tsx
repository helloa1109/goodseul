import axios, { AxiosResponse } from "axios";


const serverUrl = "http://dopeboyzclub.ddns.net:7780"


export const goSearch = (searchTerm:string) : Promise<AxiosResponse> =>{
    return axios({
        method:'get',
        url: `${serverUrl}/api/lv0/review?keyword=${searchTerm}`
    })
}