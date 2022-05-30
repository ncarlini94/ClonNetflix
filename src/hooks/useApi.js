import React, { useEffect, useState } from 'react';
import { apiBuilder, apiLanguage, apiQuality } from '../apiConfig';

const useApi = (entity, lang = apiLanguage.spanish, pagination = 1) => {

const [values, setValues] = useState([])
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
const [page, setPage] = useState(pagination);
const [randomVaule, setRandomValue] = useState([])
const [randomImg, setRandomImg] = useState(null);

const getData = async () => {
    setIsLoading(true);
    setError(null);
    const res = await apiBuilder.tryGet(entity, lang, page);
    if (res instanceof Error) {
        console.log(res.messange)
        }else{
    setValues(res)
    };
    setIsLoading(false);
}

useEffect(() => {
    getData()
}, [page]);



const getRandomValue = async () => {
    setIsLoading(true);
    setError(null);
    const res = await apiBuilder.tryGetRandomValue(lang, page);
    if (res instanceof Error) {
        console.log(res.messange)
        }else{
    setRandomValue(res)
    const resimg = await apiBuilder.tryGetImg(apiQuality);
    setRandomImg(resimg)
    };
    setIsLoading(false);
};




useEffect(() => {
    getRandomValue();
}, []);

return [values, isLoading, error, randomVaule, randomImg];

};

export default useApi;