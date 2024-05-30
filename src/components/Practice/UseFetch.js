import { useEffect, useState } from "react"

const useFetch =(URL)=>{
    const [data,setData]=useState(null);

    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[URL])
    return data;
}

export default useEffect;