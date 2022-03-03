import React, {useState, useEffect} from 'react'

const Brands = () => {
    const [brands,setBrands] = useState([]);

    let brandsMap = new Map();
    const getBrands = async () => {
        const response = await fetch('https://demo7303877.mockable.io/');
        const brands = await response.json();
        return brands ;
    }
    useEffect(() => {
        getBrands()
        .then(brands => {
            console.log(brands);
            //setBrands(brands.products);
            brands.products.forEach(b => {
                if(brandsMap.has(b.brand)){
                    let count = brandsMap.get(b.brand).count;
                    count++;
                    brandsMap.set(b.brand,{...brandsMap.get(b.brand),count:count});
                }else {
                    brandsMap.set(b.brand,{brand:b.brand,count:1});
                }
            })
            let keys = [];
            for (let key of brandsMap)
                keys.push(key);
            //console.log(categories);
            setBrands(keys);
            //setCategoriesMap(categoriesMap);
        })
    }, []);
  return (
    <React.Fragment>
        <h6 className="text-left text-info">Brands</h6>
        {
            brands && brands.map((item,index) => {
                console.log("item",index+1);
                return(
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={index+1} id="puma"  />
                        <label className="form-check-label" htmlFor={item[1].brand}>{item[1].brand}({item[1].count})</label>
                    </div>
                )
            })
        }
    </React.Fragment>         
  )
}

export default Brands