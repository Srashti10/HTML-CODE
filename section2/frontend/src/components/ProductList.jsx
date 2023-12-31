import React, { useState } from 'react'
import smartphones from './dummyData';
const brands = [ 'Samsung', 'Oneplus', 'Apple', 'Moto']

const ProductList = () => {
    const [productData, setproductData] = useState(smartphones);


    const displayProducts = () => {
        return productData.map((phone) => {
            return <div className='col-md-3 mb-4'>
                <div className='card'>
                    <img style = {{height : '200px', objectfit : 'cover'}} className='card-img-top' src={phone.image} alt="" />
                    <div className='card-body'>
                        <h5>{phone.brand}</h5>
                        <h5>{phone.model}</h5>
                        <h5>{phone.price}</h5>

                    </div>
                </div>
            </div>
        })
    }

    const searchProduct = (e) => {
        const search = e.target.value;
        setproductData(
            smartphones.filter( (phone) => {return phone.model.toLowerCase().includes(search.toLowerCase());})
        );
    };
    const filterBrands = (e)  => {
        const search = e.target.value;
        setproductData(
            smartphones.filter( (phone) => {return phone.brand === search;} )
        );
    };
  return (
    <div className='list-back'>
        <header className='bg-body-secondary'>
            <div className='container py-5'>
                <h1 className='text-center'>Product List Page</h1>
                <input onChange = {searchProduct}type="text" className='form-control form-control-lg' placeholder='Search Product Name...' />

                <select onChange = {filterBrands}>
                    {
                        brands.map((brand) => (
                            <option value={brand}>{brand}</option>
                        ))
                    }
                </select>
                    <input type="range" min={1000} max={50000} />
            </div>
        </header>
        <div className='container'>
            <div className='row'>
                {displayProducts()}
            </div>
        </div>
    </div>
  )
}

export default ProductList;