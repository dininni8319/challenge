import style from './List.css';
import avatarImg from './../assests/smile-img.png'

const List = ({ autoCompleteList, handleSearchedItemOverd }) => {
    
  return (
       <section className='suggestions-cards-section'>
          {
            autoCompleteList?.slice(0,6).map(el => {

                return (
                  <section className='suggestions-card' onClick={() => handleSearchedItemOverd(el.id)} key={el.id} className='suggestions-cards'> 
                    <div>
                          <img src={el.profile_path ? `https://image.tmdb.org/t/p/w500/${el.profile_path}` : avatarImg}
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
       </section>
    );
}

export default List;