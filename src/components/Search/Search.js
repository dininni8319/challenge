import List from './../../components/List/List';
import SearchedUsersList from './../../components/SearchedUsersList/SearchedUsersList';

const Search = ({ firstElementArray, handleSearchedItem, autoCompleteList, handleSearchedItemOverd, handleDelete, searchedItemList }) => {

    return (
        <form action="" className='form-search'>
              <div className="section-search-input">
                <input type="search" placeholder="Search for a person/cast" className='input-search' onChange={handleSearchedItem}/>
                  
              </div>
              <div className='section-cards'>
                <List
                    autoCompleteList={autoCompleteList} 
                    handleSearchedItemOverd={handleSearchedItemOverd}
                /> 
              </div>
              <div>
                <SearchedUsersList 
                    searchedItemList={searchedItemList}
                    handleDelete={handleDelete}
                    firstElementArray={firstElementArray}
                />
              </div>
        </form> 
    )
}

export default Search;