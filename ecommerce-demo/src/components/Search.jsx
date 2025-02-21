import './Search.css'
import { products } from '../mocks/products.json'
import { useState } from 'react'
export const Search = () => {
    const [search, setSearch] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])

    const handleFilter = () => {
        if (search === '') {
            setFilteredProducts([])
            return
        }
        const filtered = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        setFilteredProducts(filtered)

    }

    return (
        <div className="search">
            <input className="search-input" type="text" placeholder="Search..." value={ search } onChange={ e => setSearch(e.target.value) } />
            <button onClick={ handleFilter } className="search-button">Search</button>
            <ul className={ `search-results ${filteredProducts.length === 0 ? 'hidden' : ''}` }>
                {
                    filteredProducts.map(product => (
                        <li key={ product.id }>
                            <img className='search-images' src={ product.thumbnail } alt={ product.title } />
                            { product.title }
                        </li>
                    ))
                }
            </ul>
        </div>
    )


}