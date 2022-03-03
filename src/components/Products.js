import React, {useState, useEffect} from 'react'
import Categories from './Categories';
const Products = ({category, handleCategory}) => {
    const [products,setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const getProducts = async () => {
        const response = await fetch('https://demo7303877.mockable.io/');
        const products = await response.json();
        return products ;
    }
    useEffect(() => {
        getProducts()
        .then(products => {
            //console.log(products);
            setProducts(products.products);
        })
    }, []);
  return (
    <React.Fragment>
        <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={(e) => {setSearch(e.target.value)}} placeholder="Search" />
            <button className="btn btn-info" type="submit">Search</button>
        </div>
        {
            products && products.filter((val) =>{
                if(search == ""){
                    return val;
                }else if(val.productName.toLowerCase().includes(search.toLowerCase())){
                    return val;
                }
            }).map((item,index) => {
                return (
                    <React.Fragment>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src={item.searchImage} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.additionalInfo}</h5>
                                    <p className="card-text" onChange={handleCategory}>{item.productName}</p>
                                    <a href="#" className="btn btn-primary">Rs. {item.price}</a>
                                </div>
                            </div>  
                        </div>
                    </React.Fragment>
                )
            })
        }
    </React.Fragment>
   
  )
}

export default Products