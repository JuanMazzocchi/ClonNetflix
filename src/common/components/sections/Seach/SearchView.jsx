
import Nav from '../../Nav/Nav'
import Search from './Search'

const SearchView = ({children}) => {
  return (<>
    <Nav />
    {children}
  </>)
}

export default SearchView