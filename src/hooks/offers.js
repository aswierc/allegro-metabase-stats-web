import { useState, useEffect } from 'react';

const url = process.env.REACT_APP_API_URL
const useOffers = () => {
    const offerUrl = url+'/offers'
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url+'/offers')
            .then(response => response.json())
            .then(data => setData(data))
    }, [offerUrl])

    return data
}

export default useOffers
