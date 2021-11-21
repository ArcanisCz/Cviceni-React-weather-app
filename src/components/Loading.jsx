import React from "react";
import gif from '../assets/loading.gif';

const Loading = () => {
    return (
        <>
        <h5 className="loading-text">Loading data</h5>
        <img src={gif} alt="loading_data_gif" />
        </>
    )
}

export default Loading;