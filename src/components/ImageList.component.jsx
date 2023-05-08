import ImageShow from "./ImageShow.component";
import "./image-list.css";

const ImageList = ({ images }) => {
  const renderedImage = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return <div className="image-list"> {renderedImage} </div>;
};
export default ImageList;
