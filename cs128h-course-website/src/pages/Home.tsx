import { Page } from "@/components/Page";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const mainBody = (
    <>
        <div className="flex flex-1 flex-col gap-4 p-4">
            <Card className="flex-1 rounded-xl bg-muted/50 h-3/5">
                <CardContent className="size-full p-6 flex flex-1 flex-col justify-center items-center gap-4">
                    <span className="size-fit text-3xl sm:text-5xl md:text-7xl font-mono">CS128 Honors</span>
                    <span className="size-fit text-l sm:text-2xl md:text-4xl text-left font-mono md:pr-12">A class for students, <br />by students.</span>
                </CardContent>
            </Card>
            <div className="grid auto-rows-full gap-4 md:grid-cols-3 h-2/5">
                <Card className="h-full rounded-xl bg-muted/50">
                </Card>
                <Card className="h-full rounded-xl bg-muted/50">
                </Card>
                <Card className="h-full rounded-xl bg-muted/50">
                </Card>
            </div>
        </div>
    </>
)


export default function Home(): JSX.Element {
    return (
        <Page title="Home" body={mainBody} />
    )
}