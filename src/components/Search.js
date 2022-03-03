import React, {useState} from 'react'

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <React.Fragment>
      <div className="input-group mb-3">
      <input type="text" className="form-control" onChange={(e) => {setSearch(e.target.value)}} placeholder="Search" />
      <button className="btn btn-info" type="submit">Search</button>
    </div>
    </React.Fragment>
  )
}

export default Search