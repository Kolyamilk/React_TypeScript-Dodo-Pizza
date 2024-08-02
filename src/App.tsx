

import './App.css'
import Catalog from './components/Catalog/Catalog'
import Header from './components/Header/Header'
import PopularList from './components/PopularList/PopularList'
import StoriesList from './components/StoriesList/StoriesList'

function App() {
  return (
    <div className='app'>
      <Header />
      <StoriesList />
      <PopularList />
      <Catalog>Пиццы</Catalog>

    </div>
  )
}
export default App
