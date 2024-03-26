import { useEffect, useState } from "react"

export default function useFetch(url) {

    const [data, setData] = useState();

    const getData = async () => {
        const promise = await fetch(url);
        const json = await promise.json();
        setData(json);
    }

    useEffect(
        () => {
            getData();
        }, []
    );

    return data;
}