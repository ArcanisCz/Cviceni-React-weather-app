import React from 'react';
 import gif from '../../assets/loader.gif';

 const Loading = () => {
     return (
         <>
         <h5 className='loading-text'>Loading data</h5>
         <img src={gif} alt='loading gif'/>
         </>
     )
 }

 export default Loading;