import React from "react";
import { apiEntity } from "../../apiConfig";
import useApi from "../../hooks/useApi";
import Separator from "../Separator/Separator";
import styles from "./Banner.module.css";

const Banner = () => {
const [movie, loading, error, randomValue, randomImg] = useApi(
    apiEntity.popularMovies,
);


return (
    <div
    className={`${styles.banner_container}`}
    style={
        loading
        ? { backgroundImage: "none" }
        : {
            backgroundImage: `url(${randomImg})`,
            }
    }
    >
    <div className={styles.banner_gradient}>
        <Separator height={"250px"} />

        <div className={styles.banner_title}>
        <h1>{loading ? "Loading..." : randomValue?.title}</h1>
        </div>
        <Separator height={"40px"} />

        <div>
        <h2>{loading ? "Loading..." : randomValue?.overview}</h2>
        </div>
        <div className={styles.banner_buttons}>
        <button
        className={styles.banner_button}
        onClick={() => {
        console.log(movie);
        }}
        >
        MAS INFORMACION
        </button>
        <button className={styles.banner_button}>REPRODUCIR</button>
        </div>
    </div>
    </div>
);
};

export default Banner;