import React, {useState, useEffect} from 'react'

const Categories = () => {
    const [categories,setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    //const [categoriesMap, setCategoriesMap] = useState(new Map());
    let categoriesMap = new Map();
    const getCategories = async () => {
        const response = await fetch('https://demo7303877.mockable.io/');
        const categories = await response.json();
        return categories ;
    }
    useEffect(() => {
        getCategories()
        .then(categories => {
            //let categoriesMap = new Map();
            categories.products.forEach(c => {
                if(categoriesMap.has(c.category)){
                    let count = categoriesMap.get(c.category).count;
                    count++;
                    categoriesMap.set(c.category,{...categoriesMap.get(c.category),count:count});
                }else {
                    categoriesMap.set(c.category,{category:c.category,count:1});
                }
            })
            let keys = [];
            for (let key of categoriesMap)
                keys.push(key);
            //console.log(categories);
            setCategories(keys);
            //setCategoriesMap(categoriesMap);
        })
    }, []);
    
    // const filterProducts = (catItem) => {
    //     const category = categories.filter((curCat) => {
    //         return curCat.category === catItem;
    //     });
    //     setCategories(category);
    // }
    const handleCategory = (e) => {
        const currCategoryChecked = e.target.value;
        console.log(currCategoryChecked);
        const allCategoriesChecked = [...categoryIds];
        const indexFound = allCategoriesChecked.indexOf(currCategoryChecked);
        let updatedCategoryIds;
        if(indexFound == -1) {
            //add
            updatedCategoryIds = [...categoryIds, currCategoryChecked];
            setCategoryIds(updatedCategoryIds);
        } else {
            //remove
            updatedCategoryIds = [...categoryIds];
            updatedCategoryIds.splice(indexFound, 1);
            setCategoryIds(updatedCategoryIds);
        }
        console.log(updatedCategoryIds);
    }
 
  return (
    <React.Fragment>
        <h6 className="text-left text-info">Categories</h6>
        {
            
            categories && categories.map((item,index) => {
                //console.log("item",index+1);
                return(
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="category" value={index+1} onChange={handleCategory} />
                        <label className="form-check-label" htmlFor={item[1].category}>{item[1].category}({item[1].count})</label>
                    </div>
                )
            })
        }
    
    </React.Fragment>
  )
}

export default Categories