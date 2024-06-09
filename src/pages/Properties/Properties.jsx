import { useEffect, useState } from 'react';
import SingleProperty from '../SingleProperty/SingleProperty';

const Properties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => {
                setProperties(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='text-center container mb-8'>
            <h2 className='text-5xl font-bold mb-10'>One Click Single Property</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    properties.map(property => <SingleProperty key={property.id} property={property} ></SingleProperty>)
                }
            </div>
        </div>
    );
};

export default Properties;