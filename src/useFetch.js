import { useState, useEffect } from 'react';

const useFetch = (url) => { 

    const [data, setData] = useState (null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect (() => {
        const getData = async () => {
        const abortCont = new AbortController();

        await fetch(url, { signal: abortCont.signal })
        .then(res => {

            if(!res.ok) {
                throw Error('Nie udało się pobrać danych');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setIsPending(false);
                setError(err.message);   
            }
        })

        return () => abortCont.abort();
    }
    getData();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;