import { useEffect, useState } from 'react';


export default function Categories(props) {
    //Get All categories
    const [categories, setCategories] = useState([]);
    // const [selCount, setSelCount] = useState(null);
    const setSelCategory = props.onChange;

    useEffect(() => {
        let getCategories = async () => {
            let url = 'http://localhost:8080/categories'
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) {
                let event = {
                    target: {
                        name: props.name,
                        value: result.response[0]._id
                    }
                }
                setCategories(result.response);
                setSelCategory(event);
            }
        }
        getCategories();
    }, [])

    let handleChange = (e) => {
        let event = {
            target: {
                name: props.name,
                value: e.target.value
            }
        }
        setSelCategory(event)
    }

    return (
        <div>

            {/* <form onSubmit={Submit}> */}
            <select
                class="form-control form-control-lg"
                onChange={handleChange}
                value={props.value}
            >
                {categories.map((category) => (
                    <option
                        // selected={props.id === country._id}
                        key={category._id}
                        value={category._id}
                    >
                        {category.category_name}
                    </option>
                ))}
            </select>
        </div>
    )
}

