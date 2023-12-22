/* eslint-disable react/prop-types */
function ImagesShow({ image }) {
    return <div>
        <img src={image.urls.small} alt={image.alt_description}/>
    </div>;
}

export default ImagesShow;