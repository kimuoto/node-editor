import { Stack, StackItem } from "@fluentui/react"
import { Children } from "react"
import EdgeProperties from "../EdgeProperties/EdgeProperties"
import NodeProperties from "../NodeProperties/NodeProperties"
import "./PropertiesStack.css"

type PropertiesStackProps = {}

const PropertiesStack = ({ children }: React.PropsWithChildren<PropertiesStackProps>) => {

    return (
        <Stack tokens={{ childrenGap: 15 }} className="my-4 pr-3 h-full overflow-y-scroll">
            <NodeProperties />
            <EdgeProperties />
            {Children.map(children, c => (<>{c}</>))}
        </Stack>
    )
}

export default PropertiesStack;