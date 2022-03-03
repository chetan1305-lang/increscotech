import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Filters from './components/Filters';
import Categories from './components/Categories';
import Brands from './components/Brands';
import Price from './components/Price';
import Products from './components/Products';
import Search from './components/Search';

const App = () => {
  return (
      <div className="container-fliud mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-4">
            <Filters/>
            <Categories/>
            <Brands/>
            <Price/>
          </div>
          <div className="col-md-8">
              <div className="row">
                <Products/>
              </div>
          </div>
        </div>
      </div>
  );
}

export default App;
