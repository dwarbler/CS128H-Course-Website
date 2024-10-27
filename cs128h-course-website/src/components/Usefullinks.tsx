export default function Usefullinks(): JSX.Element {
    /**
     * Returns the JSX for the Useful Links section of the
     * Course Info page
     * 
     * @returns The section JSX
     */
    return (
        <>
            <h4>Class Links</h4>

            <h5><a href="https://us.prairielearn.com/pl/course_instance/158024">Prarielearn</a></h5>

            <h5><a href="https://discord.gg/PfjMKK3F9X">Discord</a></h5>

            <h5><a href="https://www.youtube.com/channel/UCRA18QWPzB7FYVyg0WFKC6g">Youtube Channel</a></h5>

            <h4>Extra Resources</h4>

            <h5><a href="https://doc.rust-lang.org/book/">The Book</a></h5>

            <p>
                The "book" (also known as <i>The Rust Programming Language</i>) is part of the official documentation and gives a deep dive into essential rust concepts.
            </p>

            <h5><a href="https://doc.rust-lang.org/rust-by-example/">Rust By Example</a></h5>

            <p>
                <i>Rust By Example</i> is like "The Book" but is much less wordy and more application focused.
            </p>

            <h5><a href="https://github.com/rust-lang/rustlings">Rustlings</a></h5>

            <p>
                <i>Rustlings</i> is a set of exercises to practice your rust knowledge, intended to be done alongside The Book or <i>Rust By Example</i> 
            </p>
        </>
    )
}