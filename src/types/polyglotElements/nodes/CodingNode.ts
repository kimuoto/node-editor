import { CodingNodeProperties } from "../../../components/NodeProperties";
import { ReactFlowCodingNode } from "../../../components/ReactFlowNode";
import { polyglotNodeComponentMapping } from "../elementMapping";
import { NodeData, PolyglotNode } from "./Node";

export type CodingNodeData = NodeData & {
}

export type CodingNode = PolyglotNode & {
    type: "codingNode";
    data: CodingNodeData;
}

polyglotNodeComponentMapping.registerMapping("codingNode", "Coding", CodingNodeProperties, ReactFlowCodingNode);