

import './App.css'
import Catalog from './components/Catalog/Catalog'
import Header from './components/Header/Header'
import PopularList from './components/PopularList/PopularList'
import StoriesList from './components/StoriesList/StoriesList'

function App() {
  return (
    <>
      <Header />
      <StoriesList />
      <PopularList />
      <Catalog>Пиццы</Catalog>

    </>
  )
}
export default App
