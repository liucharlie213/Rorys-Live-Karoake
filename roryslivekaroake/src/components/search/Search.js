import React from "react"
import searchIcon from "../../assets/icons/magnifying-glass.png"
import "./search.css"

const Search = () => {
  return (
    <div className="search__section">
      <div className="search__column">
        <div className="search__title">
          <span id="search__songs">Search Songs</span>
        </div>
        <div className="search__and__sort">
          <div className="search__bar">
            <img src={searchIcon} id="search__icon"></img>
            <p>Find the perfect song</p>
          </div>
          <div className="sort__bar">
            <p>Sort By:</p>
            <button>Default</button>
          </div>
        </div>

        <span className="song__background">
          <div className="song__list">
            <div className="song__chart__title"></div>
            <div className="song">
              <></>
            </div>
          </div>
        </span>
      </div>

    </div>
  )
}

export default Search