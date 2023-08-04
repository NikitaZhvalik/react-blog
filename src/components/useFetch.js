import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
        .then((response) => {
            if (response.ok != true) {
                throw Error('Не могу получить данные из этого ресурса!')
            }
            return response.json()
        })
        .then((data) => {
            setData(data)
            setLoading(false)
            setError(null)
        })
        .catch((error) => {
            if (error.name === 'AbortError') {
                alert('запрос был остановлен!');
            } else {
                setError(error.message)
                setLoading(false)
            }
        })

        return () => {
            abortCont.abort()
        }
    }, [])

    return {data, isLoading, error}
}

export default useFetch;