// import React, { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import defaultCover from "../../assets/photos/default_cover.jpeg"
// import "./search.css"


// const Search = () => {
//   const [data, setData] = useState([])
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("None");

//   const [isLoading, setLoading] = useState(false);
//  // Fetch album covers and add them to the song items
 
//  const fetchAlbumCovers = async (songs) => {
//   // Set loading to true while fetching
//   setLoading(true);
//   let updatedSongs = songs.map(song => ({ ...song }));
//   // Map each song to a promise that fetches the album cover
//   const fetchPromises = updatedSongs.map(async (song, index) => {
//     try {
//       // const response = await fetch(`/api/search-track?title=${encodeURIComponent(song.Title)}&artist=${encodeURIComponent(song.Artist)}`);     
//       const response = await fetch(`http://localhost:3001/api/search-track?title=${(song.Title)}&artist=${(song.Artist)}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       console.log(response);
//       const data = await response.json();
//       console.log(data);
//       // If an album cover URL is found, add it to the song object

//       if (data.albumCoverUrl) {
//         updatedSongs[index].albumCoverUrl = data.albumCoverUrl;
//       } else {
//         // Set a default image if no album cover is found
//         updatedSongs[index].albumCoverUrl = defaultCover;
//       }
//     } catch (error) {
//       console.error("Failed to fetch album cover:", error);
//       // Optionally, set a default image URL
//       // updatedSongs[index].albumCoverUrl = { defaultCover };
//     }
//   });
//   // Wait for all fetches to complete
//   await Promise.all(fetchPromises);
//   // Update the data state with the new songs array
//   setData(updatedSongs);
//   // Set loading to false after fetching
//   setLoading(false);
// };


//   useEffect(() => {
//     Papa.parse("/Karaoke.csv", {
//       download: true,
//       header: true,
//       complete: (result) => {
//         setData(result.data);
//         fetchAlbumCovers(result.data);
//       } 
//     });
    
//   }, []);


//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   }

//   const filteredData = searchTerm ? 
//     data.filter(item =>
//       item.Title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//       item.Artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.Tags.toLowerCase().includes(searchTerm.toLowerCase())
//   ) : data;

//   // const handleSortChange = (e) => {
//   //   setSortOrder(e.target.value);
//   // }

//   const sortedData = [...filteredData].sort((a,b) => {
//     switch(sortOrder) {
//       case "Title":
//         return a.Title.localeCompare(b.Title);
//       case "Artist":
//         return a.Artist.localeCompare(b.Artist);
//       case "Tags":
//         return a.Tags.localeCompare(b.Tags);
//       default:
//         return 0;
//     }
//   })

//   const handdleToggleDropdown = () => {
//     setDropdownOpen(prevState => !prevState);
//   }

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     setSortOrder(option);
//     setDropdownOpen(false);
//   }


//   return (
//     <section id="search">
//     <div className="search__container">
//       <p className="search__title"><span className="search__span">Search Songs</span></p>
//       <div className="search__and__sort">
//         <input 
//           type="text"
//           placeholder="Find the perfect song"
//           value = {searchTerm}
//           onChange={handleSearchChange}
//           className="search__input"
//         />
//         <div className="sort__section">
//           <p>Sort By:</p>
//           <div className="sort__dropdown">
//             <div className="selected__sort" onClick={handdleToggleDropdown}>
//               {selectedOption}
//             </div>
//             {isDropdownOpen && (
//             <div className="dropdown__content">
//               <div onClick={() => handleSelect('Title')} className="dropdown__item">Title</div>
//               <div onClick={() => handleSelect('Artist')}  className="dropdown__item">Artist</div>
//               <div onClick={() => handleSelect('Tags')}  className="dropdown__item">Tags</div>
//             </div>)}
//           </div>
//         </div>
        
//       </div>
//       <div className="table__container">
//         <table>
//           <thead>
//             <tr>
//               {/* <th>Cover</th> */}
//               <th>Title</th>
//               <th>Artist</th>
//               <th>Tags</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedData.map(item => (
//                <tr key={item.Title + item.Artist}>
//                 {/* <td className="cover__column">
//                   <img src={item.albumCoverUrl} className="album__cover" />
//                 </td> */}
//                 <td className="cover__title">
//                   <img src={item.albumCoverUrl} className="album__cover" loading="lazy"/>
//                   {item.Title}
//                 </td>
//                 <td>{item.Artist}</td>
//                 <td>{item.Tags}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </section>
//   )
// }

// export default Search

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import "./search.css"
// import defaultCover from "../../assets/photos/default_cover.jpeg"


const Search = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("None");

    const [isLoading, setLoading] = useState(false);
 // Fetch album covers and add them to the song items
 
 const fetchAlbumCovers = async (songs) => {
  // Set loading to true while fetching
  setLoading(true);
  let updatedSongs = songs.map(song => ({ ...song }));
  // Map each song to a promise that fetches the album cover
  const fetchPromises = updatedSongs.map(async (song, index) => {
    try {
      // const response = await fetch(`/api/search-track?title=${encodeURIComponent(song.Title)}&artist=${encodeURIComponent(song.Artist)}`);     
      const response = await fetch(`http://localhost:3001/api/search-track?title=${(song.Title)}&artist=${(song.Artist)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      // If an album cover URL is found, add it to the song object

      if (data.albumCoverUrl) {
        updatedSongs[index].albumCoverUrl = data.albumCoverUrl;
      } else {
        // Set a default image if no album cover is found
        // updatedSongs[index].albumCoverUrl = defaultCover;
      }
    } catch (error) {
      console.error("Failed to fetch album cover:", error);
      // Optionally, set a default image URL
      // updatedSongs[index].albumCoverUrl = { defaultCover };
    }
  });
  // Wait for all fetches to complete
  await Promise.all(fetchPromises);
  // Update the data state with the new songs array
  setData(updatedSongs);
  // Set loading to false after fetching
  setLoading(false);
};

  useEffect(() => {
    Papa.parse("/Karaoke 2022.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
        fetchAlbumCovers(result.data);
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

  // const handleSortChange = (e) => {
  //   setSortOrder(e.target.value);
  // }

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

  const handdleToggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  }

  const handleSelect = (option) => {
    setSelectedOption(option);
    setSortOrder(option);
    setDropdownOpen(false);
  }

  return (
    <section id="search">
    <div className="search__container">
      <p className="search__title"><span className="search__span">Search Songs</span></p>
      <div className="search__and__sort">
        <input 
          type="text"
          placeholder="Find the perfect song"
          value = {searchTerm}
          onChange={handleSearchChange}
          className="search__input"
        />
        <div className="sort__section">
          <p>Sort By:</p>
          <div className="sort__dropdown">
            <div className="selected__sort" onClick={handdleToggleDropdown}>
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
              <th>Title</th>
              <th>Artist</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map(item => (
              <tr key={item.Title + item.Artist}>
                <td className="cover__title">
                   <img src={item.albumCoverUrl} className="album__cover" loading="lazy"/>
                   {item.Title}
                 </td>
                <td>{item.Artist}</td>
                <td>{item.Tags}</td>
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