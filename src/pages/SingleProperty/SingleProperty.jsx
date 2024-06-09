


const SingleProperty = ({ property }) => {
    const { image, title, area, button, description, price, facilities, location } = property;

    return (
        <div >

            <div className="card card-side  bg-base-100 shadow-2xl p-2 flex-grow">
                <figure><img className="w-32" src={image} alt="Movie" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl" >{title}</h2>
                    <p className="text-sm ">{description}</p>
                    <div className="flex text-xs font-bold">
                        <p className="border p-2 rounded-lg">{price}</p>
                        <p>{location}</p>
                    </div>
                    <div className=" flex  items-center justify-end">
                        <p className="text-xs font-bold ">{area}</p>
                        <button className="btn  bg-[#ADEAF2]">{button}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProperty;