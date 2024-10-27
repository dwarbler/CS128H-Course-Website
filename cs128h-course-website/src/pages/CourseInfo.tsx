import Navbar from "../components/Navbar"
import Collapsible from "../components/Collapsible"
import Syllabus from "../components/Syllabus"
import Policies from "../components/Policies"
import Usefullinks from "../components/Usefullinks"

export default function CourseInfo(): JSX.Element {
    /**
     * Returns the JSX Element corresponding to the Course Info page
     * 
     * Utilizes components as props for generalization of the
     * Collapsible component.
     * 
     * Add New Section - Create a new component which returns the JSX
     * to be inside the new section and add new collapsible component
     * below.
     * 
     * @returns The Webpage JSX
     */
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
            <Collapsible
                title={"Useful Links"}
                BodyComponent={<Usefullinks />}
            />
        </>
    )
}