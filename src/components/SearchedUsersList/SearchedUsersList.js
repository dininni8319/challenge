import { useState, useEffect } from 'react';
import style from './SearchedUsersList.css';

const SearchedUsersList = ({ searchedItemList, handleDelete }) => {

    const api_key = process.env.REACT_APP_MOVIES_SECRET;
    const [ person, setPerson ] = useState([])
    const [ detail, setDetail ] = useState(false)
    
    const handledetail = (id) => {
        setDetail(true)
    }
    return (
        <> 
            {
              searchedItemList?.map(el => {
                  return (

                      <section key={el.id} onClick={() => handleDelete(el.id)} className='section-searched-list'>
                            {
                                detail &&  (
                                    <>
                                        <div className='section-img'>
                                            <img src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                                                alt={el.name} 
                                                className='searche-users-img' 
                                            />
                                        </div>
                                        <div className="section-user-detail">
                                            <h3>{el.name}</h3>
                                            <p>{el.known_for_department} <span>{el.popularity}</span></p>
                                            
                                        </div>
                                    </>
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

