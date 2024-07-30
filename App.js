import React, { useEffect, useState } from "react";

const useApiService = (Api_Url) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
       fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(Api_Url);
        const json = await data.json();

        setResInfo(json.data);
    }
    return resInfo;
}
export default useApiService;