import { useState, useEffect } from 'react';
import style from './SearchedUsersList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import avatarImg from './../assests/smile-img.png'

const SearchedUsersList = ({ firstElementArray, searchedItemList, handleDelete }) => {
    
    const api_key = process.env.REACT_APP_MOVIES_SECRET;
    const [ person, setPerson ] = useState([])
    const [ detail, setDetail ] = useState(null)
    const [ cardVisible, setVisibleCard ] = useState(false)
    
    const handleDetail = (id) => {
        setDetail(id)
        setVisibleCard(!cardVisible)
    }

    return (
        <> 
            {
              searchedItemList?.map(el => {
                  return (

                      <section key={el.id}  className='section-searched-list'>
                         <section className='section-icon-chevron'>
                            { 
                            firstElementArray.id !== el.id && <FontAwesomeIcon icon={!cardVisible ? faChevronDown : faChevronUp } className={`fa-1x ${ cardVisible && detail === el.id ? "icon-color-1" : "icon-color-2"}`} onClick={() => handleDetail(el.id)}/>
                            
                            }   
                        </section>  
                        
                            {
                                detail === el.id && cardVisible || firstElementArray.id === el.id ? (
                                    <section className='section-searched-card-list'>
                                        <div className='section-img'>
                                            <img src={el.profile_path ? `https://image.tmdb.org/t/p/w500/${el.profile_path}` : avatarImg}
                                                alt={el.name} 
                                                className='searche-users-img' 
                                            />
                                        </div>
                                        <div className="section-user-detail">
                                            <h3>{el.name}</h3>
                                            <p>Profession: {el.known_for_department}</p>
                                            <p>Popularity: {el.popularity}</p>

                                             <FontAwesomeIcon icon={faTrashCan} className={`fa-1x icon-color-red`} onClick={() => handleDelete(el.id)}/>
                                        </div>
                                    </section>
                                ) : null
                            }
                        </section>
                  )
              })  
            }
        </>
    );
}

export default SearchedUsersList;

