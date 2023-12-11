import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import "./search.css"


const Search = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("None");

  useEffect(() => {
    Papa.parse("/Karaoke2023.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
      } 
    });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredData = searchTerm ? 
    data.filter(item =>
      item.Title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.Artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Tags.toLowerCase().includes(searchTerm.toLowerCase())
  ) : data;

  const sortedData = [...filteredData].sort((a,b) => {
    switch(sortOrder) {
      case "Title":
        return a.Title.localeCompare(b.Title);
      case "Artist":
        return a.Artist.localeCompare(b.Artist);
      case "Tags":
        return a.Tags.localeCompare(b.Tags);
      default:
        return 0;
    }
  })

  const handleToggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  }

  const handleSelect = (option) => {
    setSelectedOption(option);
    setSortOrder(option);
    setDropdownOpen(false);
  }

  return (
    <section id="search">
    {/* <p className="search__title">...OR FIND YOUR OWN TUNE</p> */}
    <div className="request__song__link">Can't find what you're looking for?&nbsp; <a href="#request" id="request__link">Request a Song!</a></div>
    <div className="search__container">
      <div className="search__and__sort">
        <input 
          type="text"
          placeholder="Search songs"
          value = {searchTerm}
          onChange={handleSearchChange}
          className="search__input"
        />
        <div className="sort__section">
          <p id="sort__by">Sort By:</p>
          <div className="sort__dropdown">
            <div className="selected__sort" onClick={handleToggleDropdown}>
              {selectedOption}
            </div>
            {isDropdownOpen && (
            <div className="dropdown__content">
              <div onClick={() => handleSelect('Title')} className="dropdown__item">Title</div>
              <div onClick={() => handleSelect('Artist')}  className="dropdown__item">Artist</div>
              <div onClick={() => handleSelect('Tags')}  className="dropdown__item">Tags</div>
            </div>)}
          </div>
        </div>
        
      </div>
      <div className="table__container">
        <table>
          <thead>
            <tr>
              <th className="computer__header">Title</th>
              <th className="computer__header">Artist</th>
              <th className="computer__header">Tags</th>
              <th className="computer__header">Difficulty</th>              
            </tr>
          </thead>
          <tbody>
          <div className="phone__container">
              {sortedData.map(item => (
                  <tr key={item.Title + item.Artist}>
                    <div className="test__div"><td className="phone__song">
                        <img src={item.Cover} className="album__cover" alt=""/>
                      <div className="title__artist">
                        <div id="phone__title">{item.Title}</div>
                        <div className="artist__tags">
                          <p id="phone__artist">{item.Artist}</p>
                          <p id="phone__tags">{item.Tags ? <>&nbsp;- {item.Tags}</> : ""}</p>
                        </div>
                      </div>
                    </td>
                    <td className="phone__song difficulty__indicator">
                      {item.Difficulty ? <span className={`difficulty__circle ${item.Difficulty}`}></span> : ''}
                    </td>
                  </div>
                  </tr>
                ))}
          </div>
          
            {sortedData.map(item => (
              <tr key={item.Title + item.Artist}>
                
                <td className="cover__title computer__song" >
                   <img src={item.Cover} className="album__cover" alt=""/>
                   {item.Title}
                 </td>
                <td className="computer__song">{item.Artist}</td>
                <td className="computer__song">{item.Tags}</td>
                <td className="difficulty__indicator">
                  {item.Difficulty ? 
                    <span className={`difficulty__circle computer__song ${item.Difficulty}`}></span> : ''
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </section>
  )
}

export default Search