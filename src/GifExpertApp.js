import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['One Punch']);
    /* const handleAdd = () => {
        //setCategorias([...categorias, 'Hunter X Hunter']);
        setCategorias(cats => [...cats, 'Hunter X Hunter'])
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCat={setCategorias} />
            <hr />
            {/* <button onClick={handleAdd}> Hunter X Hunter </button> */}
            <ol>
                {
                    categorias.map((categoria, i) => {
                        /* return <li key={categoria}> {categoria} </li> */
                        return <GifGrid key={categoria} category={categoria} />
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;