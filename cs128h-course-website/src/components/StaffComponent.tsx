import data from "../assets/staff/staff.json"

export default function StaffComponent(): JSX.Element {

    return (
        <>
            <div className="staffComponent">
                {
                    data.map(staff => (
                        <>
                            <div className="staff">
                                <img key={staff.id} src={`/src/assets/staff/${staff.image}`} alt="Derek Staff Image" className="staffPicture" />
                                <p>{staff.description}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}