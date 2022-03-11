import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search';

const App = () => {

  const [ searched, setSearched] = useState('');

  const [ autoCompleteList, setAutoCompleteList ] = useState([]);
  const [ searchedItemList, setSearchedItemList ] = useState([]);
   
  let firstElementArray = searchedItemList[0]
  
  const api_url = process.env.REACT_APP_MOVIES_API_URL_CURRENT;
  const api_key = process.env.REACT_APP_MOVIES_SECRET;
  
  const handleSearchedItemOverd = (id) => {
    let searchedItem = autoCompleteList.filter(el => el.id === id)
    
    let unique = searchedItemList.some(el => el.id === id)
    if (!unique) {
      setSearchedItemList(searchedItem?.concat(searchedItemList))
      setAutoCompleteList([])
    }
  }

  const handleDelete = (id) => {
    let deleteItem = searchedItemList.filter(el => el.id !== id)
      setSearchedItemList(deleteItem)
  } 

  const handleSearchedItem = (e) => {
    e.preventDefault()
    setSearched(e.target.value)
  }
  
  useEffect(() => {
    fetch(`${api_url}${api_key}&query=${searched}`)
      .then(response => response.json())
      .then(data => setAutoCompleteList(data.results))
  },[searched])

  return (
    <div className="container-search-form">
        <div className="row-search-form">
            <Search 
              handleSearchedItem={handleSearchedItem}
              autoCompleteList={autoCompleteList}
              handleSearchedItemOverd={handleSearchedItemOverd}
              searchedItemList={searchedItemList}
              handleDelete={handleDelete}
              firstElementArray={firstElementArray}
            />
          
        </div>
    </div>
  );
}

export default App;
