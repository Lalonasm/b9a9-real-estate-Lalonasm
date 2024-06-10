import { useLoaderData, useParams } from "react-router-dom";


const PropertyDetails = () => {
    const properties = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    console.log(intId)
    const property = properties.find(property => property.id === intId)
    const { image, area, button, description, price, facilities, location } = property;
    // const { title } = property
    return (
        <div>
            <h2>{price}</h2>
        </div>
    );
};

export default PropertyDetails;