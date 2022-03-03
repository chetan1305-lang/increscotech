import React, {useState, useEffect} from 'react'

const Filters = () => {
    const [filters,setFilters] = useState([]);

    const getFilters = async () => {
        const response = await fetch('https://demo7303877.mockable.io/');
        const filters = await response.json();
        return filters ;
    }
    useEffect(() => {
        getFilters()
        .then(filters => {
            //console.log(filters.filters.inlineFilters[0].filterValues);
            setFilters(filters.filters.inlineFilters[0].filterValues);
        })
    }, []);
  return (
    <React.Fragment>
        <h6 className="text-left text-info">Filters</h6>
        {
            filters && filters.map((item,index) => {
                return(
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="men"  />
                        <label className="form-check-label" htmlFor="men"><h6>{item.id}</h6></label>
                    </div>
                )
            })
        }
    </React.Fragment>
  )
}

export default Filters