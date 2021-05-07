import { useEffect } from 'react';

function UseFetch(url, setState, limit) {
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setState(limit ? data.slice(0, limit) : data));
    }, []);
}

export { UseFetch };