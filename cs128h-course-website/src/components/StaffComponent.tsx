import { useEffect, useState } from "react"

export default function StaffComponent(): JSX.Element {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("../assets/staff/staff.json")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Failed to retrieve staff data: ", error))
    }, [])

    if (!data) {
        return ( 
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
        </>
    )
}