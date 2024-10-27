import Navbar from "../components/Navbar"
import Collapsible from "../components/Collapsible"
import Syllabus from "../components/Syllabus"

export default function CourseInfo(): JSX.Element {
    return (
        <>
            <Navbar />
            <Collapsible
                title={"Syllabus"}
                BodyComponent={<Syllabus />} 
            />
        </>
    )
}