import data from "../assets/staff/staff.json"

export default function StaffComponent(): JSX.Element {

    return (
        <>
            <div className="staffComponent">
                {
                    data.map(staff => (
                        <>
                            <div className="staff">
                                <img key={staff.id} src={`/src/assets/staff/${staff.image}`} alt={`${staff.name} image`} className="staffPicture" />
                                <p className="staffDescription">{staff.description}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}