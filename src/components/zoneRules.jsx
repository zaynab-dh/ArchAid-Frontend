import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { IntNavigation } from "./intNavigation";

export default function ZoneRules(props) {
    // Get zonerules

    const { id: zoneId } = useParams();
    const [zoneRules, setZoneRules] = useState([]);
    console.log(zoneRules);

    useEffect(() => {
        let getZoneRules = async () => {
            let url = `http://localhost:8080/zonerules/getByZoneId/${zoneId}`;
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) setZoneRules(result.response);
        }
        getZoneRules();
    }, [])

    return (
        <>
      <IntNavigation />
        <div>
            <div className='col-md-10 col-md-offset-1 section-title section-title1'>
               <center><h2> <p>{zoneRules[0] && zoneRules[0].zone.code}</p></h2></center>
            </div>
            <table className="table table-striped table-hover">
            {/* <table style={{ width: '100%', textAlign: 'center', direction: 'rtl' }}> */}
                <thead>
                    <tr>
                        {zoneRules.map(zoneRule => (
                            <th key={zoneRule._id}>
                                {zoneRule.rule.category.category_name}
                            </th>
                        ))}
                    </tr>
                    <tr>
                        {zoneRules.map(zoneRule => (
                            <th key={zoneRule._id}>
                                {zoneRule.rule.rule_name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {zoneRules.map(zoneRule => (
                            <td key={zoneRule._id}>
                                {zoneRule.value}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <div class="mt-3">
                <center><Link to={"/"}><button type="submit" class="btn btn-block btn-width btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Back">Back</button></Link></center>
            </div>
        </div>
        </>

    )
}
