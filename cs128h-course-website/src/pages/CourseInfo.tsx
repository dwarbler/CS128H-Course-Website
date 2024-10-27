import Navbar from "../components/Navbar"
import Collapsible from "../components/Collapsible"
import Syllabus from "../components/Syllabus"
import Policies from "../components/Policies"

export default function CourseInfo(): JSX.Element {
    return (
        <>
            <Navbar />
            <Collapsible
                title={"Syllabus"}
                BodyComponent={<Syllabus />} 
            />
            <Collapsible
                title={"Course Policies"}
                BodyComponent={<Policies />}
            />
        </>
    )
}