import axios from "axios";

const appAPIs = axios.create({baseURL:"https://cs2-scores-fqzme.ondigitalocean.app/api/odds/1"})
const appAPIsMatches = axios.create({baseURL:"https://cs2-scores-fqzme.ondigitalocean.app/api/matches/1"})
const externalApi = axios.create({baseURL:"https://odds.data.bet/affiliates/ErIr2R58xU6f3dYYNv-fJA/json"})

async function getOdds(){
    const response = await appAPIs.get("/")
    return response.data
}

async function getMatches(){
    const response = await appAPIsMatches.get("/")
    return response.data
}


async function getExternalMatchesData(){
    const response = await externalApi.get("/")
    return response.data
}

export{
    getOdds,
    getMatches,
    getExternalMatchesData
}