import React from 'react';
import Favor from '../FavoiteCity/Favor.jsx'
import PropTypes from 'prop-types'

import starFavor from './img/star.png'
import starBlank from './img/star_black.png'
import list from './img/noteList.png'
import seach from './img/seach.png'

import style from './Header.css'

const Header = ({time, day, weekDay, town, country, getInfo, inputChange, input, pushTownToFavourite, favorList, showFavorList, listVisible, showWeaterOnFavourite, removeCity, fetchError, valid, cities, citiesListFunc}) => {

    function getStar() {
        return favorList.includes(town) ? starFavor : starBlank
    }

    // console.log(input.length)

    return (
        <div className={style.Header}>
        <div className={style.wrapInput}>
             <form className={style.Form} onSubmit={getInfo}> 
                <p className={fetchError || !valid ? `${style.error} ${style.vis}`: `${style.error}`}>
                 {fetchError && input ? `You can chose city on map` : !valid  && input ? 'Use english, please' : null} </p>
                <label className={style.formInputs}>
                   <input type="text" placeholder="Enter city or click on map" autoFocus={true} value={input} onChange={inputChange}/> 
                   <div className={style.seach}> 
                      <img src={seach} alt="seach" onClick={getInfo}/> 
                   </div>     
                </label>  
                <ul className={style.citiesList}> 
                    {cities.length !== undefined && cities.length < 20 ? cities.map(el => input.length === 0 && el.city === '%s' ? null : <li key={el.city+el.id} className={style.item} onClick={() => citiesListFunc(el.lat, el.lon)}>{el.city === '%s' ? 'Seaching...' : el.city === '' ?  'No city found, try to find city on map.' : el.city}</li>) : null}   
                </ul> 
            </form>
            <div className={`${style.modal} ${style.wrap}`}> 
                <div className={style.favorListHoverShow}> 
                    <img src={list} alt="favourite" className={style.Favourite} onClick={showFavorList}/>
                    <p className={`${style.showFavor}`} onClick={showFavorList}>{listVisible ? 'Hide Favourites' : 'Show Favourites'}</p>
                </div>
                <ul className={listVisible ? `${style.favorList} ${style.visible}` : `${style.favorList}`}>
                    { favorList.length === 0 ? <li className={style.emptyList}> No Favourite City Yet. </li> :       
                    favorList.map(el => <Favor name={el} key={el+el} func={showWeaterOnFavourite} remove={removeCity}/>)}
                </ul>
            </div>
        </div>
           
            <div className={style.Date}>
                <div className={style.wrap}>
                    <h2 className={style.Town}>{town ? town : 'Somewhere'}, {country ? country : 'Earth'}</h2>
                    <div className={`${style.modal} ${style.hoverShow} ${style.titleShow}`}>    
                        <p className={`${style.imgTitle}`}>{ favorList.includes(town) ? 'Already in Favourite!' : 'Add to Favourite!'}</p>
                        <img src={getStar()} alt="favourite" className={style.Favourite} onClick={pushTownToFavourite}/>
                    </div>
                </div>      
                <p className={style.Day}>{day}, {weekDay}</p>
                <p className={style.Time}> Local time: <span>{time}</span></p>
            </div>
        </div>
    );
};

export default Header;

Header.propTypes = {
    time: PropTypes.string.isRequired, 
    day: PropTypes.string.isRequired, 
    weekDay: PropTypes.string.isRequired,  
    town: PropTypes.string.isRequired, 
    country: PropTypes.string.isRequired,  
    getInfo: PropTypes.func.isRequired,
    inputChange: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    pushTownToFavourite: PropTypes.func.isRequired, 
    favorList: PropTypes.arrayOf(PropTypes.string).isRequired, 
    showFavorList: PropTypes.func.isRequired, 
    listVisible: PropTypes.bool.isRequired, 
    showWeaterOnFavourite: PropTypes.func.isRequired, 
    removeCity: PropTypes.func.isRequired, 
    fetchError: PropTypes.bool.isRequired, 
    valid: PropTypes.bool.isRequired,
    // cities:  PropTypes.number, // я не понимаю, что писать. Изначально это число, но после получения результата запроса это массив с объектами, в объектах значения - строки и числа.   
    citiesListFunc: PropTypes.func.isRequired,
}


// cities: PropTypes.arrayOf(PropTypes.shape({
//     city: PropTypes.string,  
//     lon: PropTypes.number,  
//     lat: PropTypes.number,  
// })) 