import { FILMS, PLANETS } from '../mockdata.js';
import {
  cachedFetchJSONFromSWAPIAllResults,
  fetchObjectFromSWAPIById,
} from './swapi.js';

export { swapiURLtoId } from './swapi.js';

export const getAllFilms = () => FILMS;
export const getAllPlanets = () => PLANETS;
export const getAllPlanetsPromise = () => cachedFetchJSONFromSWAPIAllResults('/planets');
export const getPlanetById = (id) => fetchObjectFromSWAPIById('/planets', id);
export const getFilmById = (id) => findObejctById(FILMS, id);

export function mapPlanetIdsToObjects(planetIds) {
  if (!planetIds) { return null; }
  return (planetIds || []).map(id => getPlanetById(id));
};

export function mapFilmIdsToObjects(filmIds) {
  if (!filmIds) { return null; }
  return filmIds.map(id => getFilmById(id));
};

function findObejctById(array, objectId) {
  return array.find(object => object.id == objectId);
};
