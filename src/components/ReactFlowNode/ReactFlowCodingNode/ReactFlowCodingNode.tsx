import { Handle, Position } from "react-flow-renderer";
import { CodingNode } from "../../../types/polyglotElements";
import Card from "../../Card/Card";
import { ReactFlowNodeProps } from "../ReactFlowNode";
import "./ReactFlowCodingNode.css";

type ReactFlowCodingElementProps = ReactFlowNodeProps & CodingNode;

const ReactFlowCodingNode = ({ data }: ReactFlowCodingElementProps) => {
    return (
        <Card className="Card-react-flow">
            {data.label}
            <Handle
                type={"target"}
                position={Position.Left}>
            </Handle>
        </Card>
    );
}

export default ReactFlowCodingNode;