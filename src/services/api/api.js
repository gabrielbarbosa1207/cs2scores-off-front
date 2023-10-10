import axios from "axios";

const appAPIs = axios.create({baseURL:"http://localhost:1337/api/odds/1"})
const externalApi = axios.create({baseURL:"https://odds.data.bet/affiliates/ErIr2R58xU6f3dYYNv-fJA/json"})

async function getMatchesBySlug(){
    const response = await appAPIs.get("/")
    return response.data
}

async function getExternalMatchesData(){
    const response = await externalApi.get("/")
    return response.data
}

export{
    getMatchesBySlug,
    getExternalMatchesData
}