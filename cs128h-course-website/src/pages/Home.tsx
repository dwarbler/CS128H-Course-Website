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
            <Card className="flex-1 rounded-xl bg-muted/50 h-2/3">
            </Card>
            <div className="grid auto-rows-full gap-4 md:grid-cols-3 h-1/3">
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