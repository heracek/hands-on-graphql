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
  const { PlanetType } = require('./types/planet.js');

  const getNodeByIdFunctions = {
    [PlanetType.name]: getPlanetById,
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
  const { PlanetType } = require('./types/planet');

  const { nodeType, node } = getNodeAndType(nodeWithType);

  return {
    [PlanetType.name]: PlanetType,
  }[nodeType];
}

const {
  nodeInterface,
  nodeField,
} = nodeDefinitions(resolveNodeData, resolveNodeType);

export { nodeInterface, nodeField };
