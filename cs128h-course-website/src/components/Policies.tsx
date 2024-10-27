export default function Policies(): JSX.Element {
    return (
        <>
            <h4>Grading Procedure</h4>
            <table>
                <tr>
                    <td>Category</td>
                    <td>Description</td>
                    <td>Weight</td>
                </tr>

                <tr>
                    <td>HW</td>
                    <td>Performance on homework assignments</td>
                    <td>20%</td>
                </tr>

                <tr>
                    <td>Machine Problems</td>
                    <td>Performance on Machine Problems (MPs)</td>
                    <td>50%</td>
                </tr>

                <tr>
                    <td>Final Project</td>
                    <td>Project performance is graded on functionality, code style and use of Rust topics (like parallelism, ownership, etc.) when needed</td>
                    <td>30%</td>
                </tr>

                <tr>
                    <td>Extra Credit</td>
                    <td>Many different opportunities</td>
                    <td>10% (capped)</td>
                </tr>
            </table>

            <h4>Extension Policy</h4>

            <p>
                Homework and MP solution videos will be released the Wednesday after assignments are due. Students can submit assignments after the deadline for 70% credit up until a week after the original deadline.
            </p>

            <p>
            Late assignments will not be accepted outside of extreme circumstances. If students cannot complete a mandatory course obligation, they should notify Minh Phan (minhnp2@illinois.edu) or Quan Hao Ng (qhng2@illinois.edu) with a reason why. We generally accept excuses with evidence as provided by the <a href="https://studentcode.illinois.edu/article1/part5/1-501/">Student Code</a>.
            </p>

            <h4> Academic Integrity </h4>

            <p>
                We follow the same policy as most CS courses. High-level discussion is accepted (and encouraged), but all code must be the work of individual students. If you find yourself looking at someone else’s screen or typing on their keyboard, you are probably violating the academic integrity policy.
            </p>

            <blockquote>
                <p>
                    Rule of Thumb: If at any point you submit an assignment that does not reflect your understanding of the material, then you have probably cheated.
                </p>
                <cite>-CS 341</cite>
            </blockquote>
            
            <p>
                For your final project, cite all external code that you use.
            </p>
        </>
    )
}