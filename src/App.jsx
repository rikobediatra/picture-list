import SearchBar from "./components/SearchBar";
import ImagesList from "./components/ImagesList";

import searchImages from "./API";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  }
  
  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImagesList images={images}/>
    </div>
  )
}

export default App
