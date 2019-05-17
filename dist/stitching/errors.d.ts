import { GraphQLResolveInfo, ExecutionResult, GraphQLError } from 'graphql';
export declare let ERROR_SYMBOL: any;
export declare function annotateWithChildrenErrors(object: any, childrenErrors: ReadonlyArray<GraphQLError>): any;
export declare function getErrorsFromParent(object: any, fieldName: string): {
    kind: 'OWN';
    error: any;
} | {
    kind: 'CHILDREN';
    errors?: Array<GraphQLError>;
};
export declare function checkResultAndHandleErrors(result: ExecutionResult, info: GraphQLResolveInfo, responseKey?: string): any;
