import React, {useContext} from 'react';
import france from '../../images/france.png';
import austria from '../../images/austria.png';
import canada from '../../images/canada.png';
import india  from '../../images/india.png';
import italy from '../../images/italy.png';
import peru from '../../images/peru.png';
import japan from '../../images/japan.png';
import jordan from '../../images/jordan.png';
import './featured.css'
import locImage from '../../images/location.svg';
import {useNavigate} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext";


const Featured = () => {
    const featuredCountries=[
        {displayName:'France', image: france},
        {displayName:'Austria', image: austria},
        {displayName:'Canada', image: canada},
        {displayName:'Italy', image: italy},
        {displayName:'Japan', image: japan},
        {displayName:'Peru', image: peru},
        {displayName:'Turkey', image: india},
        {displayName:'Jordan', image: jordan},
    ];
    const navigate = useNavigate();
    const { dispatch } = useContext(SearchContext);

    const handleRedirect = (region) => {
        dispatch({ type: "RESET_SEARCH" });
        dispatch({ type: "UPDATE_SEARCH", payload: { region } });
        navigate("/hotels", { state: { region } });
    };
    return (
        <div className='featuredContainer'>
            {
                featuredCountries.map((el, ind)=>{
                 return  ( <div className="gridItem" onClick={()=>handleRedirect(el.displayName)} key={el.displayName}>
                        <img src={el.image} className='gridImage'/>
                        <span className='gridItemText'><img src={locImage} className='locIcon'/>{el.displayName}</span>
                    </div>)
                })
            }
        </div>
    );
};

export default Featured;
