import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SectionMovie from '../common/components/sections/movies/SectionMovie'
import MyListView from '../common/components/sections/MyList/MyListView'
import Novedades from '../common/components/sections/Novedades/Novedades'
import Search from '../common/components/sections/Seach/Search'
// import Search from '../common/components/sections/Seach/Search'
import SearchView from '../common/components/sections/Seach/SearchView'
import SectionSeries from '../common/components/sections/Series/SectionSeries'
import Login from '../features/login/Login'
import MovieView from '../features/movies/views/MovieView'
 
import SerieView from '../features/movies/views/SerieView'
import SelectUser from '../features/selectUser/SelectUser'
import Layout from '../Layout/Layout'
import ProtectedRoutes from './ProtectedRoutes'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<ProtectedRoutes>
                <Routes>
                    <Route path="/principal" element={<Layout />}  />
                    <Route path="/selectUser" element={<SelectUser />} />
                    <Route path="/sectionMovie" element={<SectionMovie />} />
                    <Route path='/sectionSeries' element={<SectionSeries />}/> 
                    <Route path='/novedades' element={<Novedades />} />
                    <Route path='/movie/:id' element={<MovieView />}/>
                    <Route path='/serie/:id' element={<SerieView />}/>
                    <Route path='/myList' element={<MyListView />}/>
                    <Route path='/search/:keyword' element={<SearchView />}/>

                </Routes>
            </ProtectedRoutes>} />
            <Route path='/login' element={<Login />} />

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes