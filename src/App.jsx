
import './App.css'
import Form from './components/ContactsForm'
import SearchBox from './components/SearchBox'
import ContactsList from './components/ContactsList'

function App() {

  return (
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
  )
}

export default App
