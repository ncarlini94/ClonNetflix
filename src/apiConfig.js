import axios from 'axios';

    export const apiMovies = {
        url: "https://api.themoviedb.org/3",
        apiKey: "?api_key=1c2f7680691e10d54b24248f220cccce",
        imageUrl: "https://image.tmdb.org/t/p",
        pagination: "&page=",
        latest: "latest",
        entity: {
          topRatedMovies: "/movie/top_rated",
          topRatedTv: "/tv/top_rated",
          popularMovies: "/movie/popular",
          popularTv: "/tv/popular",
          movieById: "/movie/",
          tvById: "/tv/",
        },
        language: {
          en: "&language=en-US",
          es: "&language=es-ES"
        },
        quality: {
          original: "/original",
          backdropw300: "/w300",
          backdropw500: "/w500",
          backdropw780: "/w780",
          backdropw1280: "/w1280",
          posterw300: "/w300",
          posterw500: "/w500",
          posterw780: "/w780",
          posterw1280: "/w1280",
        },
      }

    export const apiEntity= {
      popularMovies: "popularMovies",
      popularTv: "popularTv",
      topRatedMovies: "topRatedMovies",
      topRatedTv: "topRatedTv",
      movieById: "movieById",
      tvById: "tvById",
    };

    export const apiLanguage = {
      english: "en",
      spanish: "es",
    };

    export const apiQuality = {
        original: "original",
        backdropw300: "backdropw300",
        backdropw500: "backdropw500",
        backdropw780: "backdropw780",
        backdropw1280: "backdropw1280",
        posterw300: "posterw300",
        posterw500: "posterw500",
        posterw780: "posterw780",
        posterw1280: "posterw1280",
    };


/*
      export const tryGetPopularMovies = async (entity, page = 1) =>{
        try {
        const res = await axios(`${apiMovies.url}${apiMovies.entity[entity]}${apiMovies.apiKey}${apiMovies.pagination}${page}`)
        return res.data.results;
        } catch (error) {
        console.log(error)
      }
    }
    */


    export const apiBuilder= {
      tryGet: async (entity, lang = 'es', page = 1) => {
        const url = `${apiMovies.url}${apiMovies.entity[entity]}${apiMovies.apiKey}${apiMovies.language[lang]}${apiMovies.pagination}${page}`;
        try {
          const res = await axios(url)
          return res.data.results;
        } catch (error) {
          return []
        }
      },
      tryGetById: async (entity, id, lang = 'es') => {
        const url = `${apiMovies.url}${apiMovies.entity[entity]}/${id}${apiMovies.apiKey}${apiMovies.language[lang]}`;
        try {
          const res = await axios(url)
          return res.data.results;
        } catch (error) {
          return []
        }
      },
      tryGetImg: (path, quality = apiQuality.posterw500) => {
        return `${apiMovies.imageUrl}${apiMovies.quality[quality]}${path}`;
      },
    };