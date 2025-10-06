
import './App.css'
import Form from './components/ContactsForm'
import SearchBox from './components/SearchBox'
import ContactsList from './components/ContactsList'
import { useEffect } from 'react'
import { fetchContacts } from './redux/operations'
import { useDispatch, useSelector } from 'react-redux'
import { LuLoaderCircle } from 'react-icons/lu'

function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LuLoaderCircle className='loader' />}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div className="App">
        <h1 className='title'>Phonebook</h1>
        <div className='main-container'>
          <div className='form-container'>
            <Form />
          </div>
          <div className='contacts-container'>
            <SearchBox />
            <ContactsList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
