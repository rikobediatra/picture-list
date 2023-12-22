import ImagesShow from "./ImagesShow";
import '../css/ImagesList.css';

// eslint-disable-next-line react/prop-types
function ImagesList({ images }) {
    // eslint-disable-next-line react/prop-types
    const imagesRendered = images.map((image) => {
        return (
            <ImagesShow image={image} key={image.id}/>
        );
    });

    return(
        <div className="images-list">
            {imagesRendered}
        </div>
    );
}

export default ImagesList;