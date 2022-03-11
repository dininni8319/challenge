import { useState, useEffect } from 'react';
import style from './SearchedUsersList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowDown , faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

const SearchedUsersList = ({ searchedItemList, handleDelete }) => {

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
                             
                          <FontAwesomeIcon icon={!cardVisible ? faCircleArrowDown : faCircleArrowUp } className={`fa-1x`} onClick={() => handleDetail(el.id)}/>
                           
                            {
                                detail === el.id && cardVisible && (
                                    <section className='section-searched-card-list'>
                                        <div className='section-img'>
                                            <img src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                                                alt={el.name} 
                                                className='searche-users-img' 
                                            />
                                        </div>
                                        <div className="section-user-detail">
                                            <h3>{el.name}</h3>
                                            <p>{el.known_for_department} <span>{el.popularity}</span></p>
                                             <button onClick={() => handleDelete(el.id)} className='btn-delete'>
                                             Delete</button> 
                                        </div>
                                    </section>
                                )
                            }
                      </section>
                  )
              })  
            }
        </>
    );
}

export default SearchedUsersList;

