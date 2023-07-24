//fetching the data using async await
export const fetchDataByBound = async(type,ne,sw) => {
    let url='';
    if(type==='attractions'){
        url = `https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary?tr_longitude=${ne.lng}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&bl_latitude=${sw.lat}&currency=USD&lunit=km&lang=en_US`;
    } else if(type==='hotels'){
        url = `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary?bl_latitude=${sw.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&tr_latitude=${ne.lat}&limit=100&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`
    }
    else{
        url = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=100&currency=USD&open_now=false&lunit=km&lang=en_US`;
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9a5be94e2amshc408cd81dc453bdp1dea35jsna36981614af4',
		    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
