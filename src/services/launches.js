const API_URL = "https://api.spacexdata.com/v3";

export async function getAllLaunches(){
    try{
        const response = await fetch(`${API_URL}/launches`)
        const data = await response.json();
    return data;
    }   
    catch(err) {
        console.error(err);
    }
}

export async function getLaunchesByFlightNumber(flightnumber){
    try{
        const response = await fetch(`${API_URL}/launches/${flightnumber}`)
        const data = await response.json();
    return data;
    }   
    catch(err) {
        console.error(err);
    }
}