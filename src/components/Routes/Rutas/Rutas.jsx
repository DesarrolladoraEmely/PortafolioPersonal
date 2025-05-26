import {Routes, Route} from 'react-router-dom'

import {Home} from "../../pages/Home/Home"
import {Historia} from "../../pages/Historia/Historia"
import {Introduccion} from "../../pages/Introduccion/Introduccion"
import {Experiencia} from "../../pages/Experiencia/Experiencia"

import { Menu } from '../../common/Menu/Menu'

export function Rutas(){
    return(

        <>
            <Menu />
            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/inicio' element={<Home/>} ></Route>
                <Route path='/proyectos' element={<Historia/>}></Route>
                <Route path='/emelypacheco' element={<Introduccion/>}></Route>
                <Route path='/experiencia' element={<Experiencia/>}></Route>
            </Routes>
        </>

    )
}  