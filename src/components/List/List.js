import style from './List.css';

const List = ({ autoCompleteList, handleSearchedItemOverd }) => {
    return (
       <>
          {
            autoCompleteList?.slice(0,6).map(el => {
              
                return (
                  <section className='suggestions-card' onClick={() => handleSearchedItemOverd(el.id)} key={el.id} className='suggestions-cards'> 
                    <div>
                          <img src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                            alt={el.name} 
                            className='suggestion-users-img' 
                            />
                    </div>  
                    <div>
                      <h3 className='suggestions-card-title'>{el.name}</h3>
      
                    </div>
                  </section>
                )
            })
          }
       </>
    );
}

export default List;