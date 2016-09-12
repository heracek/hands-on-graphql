import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

import { getPlanetById } from './mockdata';

const __NODE_TYPE_KEY__ = '__NODE_TYPE_KEY__';

function addNodeType(node, nodeType) {
  if (!node) {
    return node;
  }

  return {
    ...node,
    [__NODE_TYPE_KEY__]: nodeType,
  }
}

function getNodeAndType(nodeWithType) {
  const {
    [__NODE_TYPE_KEY__]: nodeType,
    node,
  } = nodeWithType;

  return { nodeType, node };
}

function resolveNodeData(globalId) {
  const { PLANET_TYPE_NAME } = require('./types/planet.js');

  const getNodeByIdFunctions = {
    [PLANET_TYPE_NAME]: getPlanetById,
  };

  const {
    type: nodeType,
    id: nodeLocalId,
  } = fromGlobalId(globalId);

  const getNodeById = getNodeByIdFunctions[nodeType] || (() => null);
  return addNodeType(
    getNodeById(nodeLocalId),
    nodeType,
  );
}

function resolveNodeType(nodeWithType) {
  const { Planet, PLANET_TYPE_NAME } = require('./types/planet');

  const { nodeType, node } = getNodeAndType(nodeWithType);

  return {
    [PLANET_TYPE_NAME]: Planet,
  }[nodeType];
}

const {
  nodeInterface,
  nodeField,
} = nodeDefinitions(resolveNodeData, resolveNodeType);

export { nodeInterface, nodeField };
