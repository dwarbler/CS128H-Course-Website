import Collapsible from "./Collapsible"

import data from "../assets/staff/staff.json"

export default function StaffComponent(): JSX.Element {

    return (
        <>
            <div className="staffComponent">
                {
                    data.map(staff => (
                        <>
                            <div className="staff">
                                <img key={staff.id} src={`/src/assets/staff/${staff.image}`} alt="Derek Staff Image"/>
                                <Collapsible
                                    title={`${staff.name}`}
                                    BodyComponent={<p>${staff.description}</p>}
                                />
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}