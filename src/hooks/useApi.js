import React, { useEffect, useState } from 'react';
import { apiBuilder, apiLanguage, apiQuality } from '../apiConfig';
import { randomIndex } from '../Utils/Utils';

const useApi = (entity, lang = apiLanguage.spanish, pagination = 1) => {

const [values, setValues] = useState([])
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
const [page, setPage] = useState(pagination);

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


const [randomValue, setRandomValue] = useState([])
const [randomImg, setRandomImg] = useState([]);

const getRandomValue = async () => {
    if (values.length === 0) {
        }else{
            const selectedValue = values[randomIndex(0, values.length -1)];
            setRandomValue(selectedValue)
    const backgroundImage = apiBuilder.tryGetImg(
        selectedValue.backdrop_path,
        apiQuality.backdropw1280
    );
    setRandomImg(backgroundImage);
    };
};


useEffect(() => {
    getRandomValue();
}, [values]);

return [values, isLoading, error, randomValue, randomImg];

};

export default useApi;