import { useState } from "react";

import SearchBar from "./components/SearchBar.component";
import SearchImages from "./api";
import ImageList from "./components/ImageList.component";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};
export default App;
