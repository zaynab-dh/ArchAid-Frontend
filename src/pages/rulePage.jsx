import { useEffect, useState } from 'react';

let [country, setCountry] = useState({});
useEffect(()=>{
    fetch('http://localhost:8000/countries')
        .then( res=>{
        return res.json();
        })
        .then( data=>{
            setCountry(data);
            });
console.log(data);
},[])
const zonerules = () => {
    return ( 
        <div>

        </div>
     );
}
 
export default zonerules;