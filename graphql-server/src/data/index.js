import { FILMS, PLANETS } from '../mockdata.js';
import {
  cachedFetchAllResultsFromSWAPIByURLArray,
  cachedFetchJSONFromSWAPIAllResults,
  cachedFetchObjectFromSWAPIById,
} from './swapi.js';
export { swapiURLtoId } from './swapi.js';

export const getAllFilmsPromise = () => cachedFetchJSONFromSWAPIAllResults('/films');
export const getAllPlanetsPromise = () => cachedFetchJSONFromSWAPIAllResults('/planets');
export const getPlanetPormiseById = (id) => cachedFetchObjectFromSWAPIById('/planets', id);
export const getFilmPromiseById = (id) => cachedFetchObjectFromSWAPIById('/films', id);
// export const getAllFilms = () => FILMS;
// export const getAllPlanets = () => PLANETS;
// export const getFilmById = (id) => findObejctById(FILMS, id);
// export const getPlanetById = (id) => findObejctById(PLANETS, id);

export function mapIdsToObjectsPromise(ids) {
  if (!ids) { return null; }
  return cachedFetchAllResultsFromSWAPIByURLArray(ids);
};

// function mapPlanetIdsToObjects(ids) {
//   return (ids || []).map(getPlanetById);
// };

// function mapFilmIdsToObjects(ids) {
//   return (ids || []).map(getFilmById);
// };

// function findObejctById(array, objectId) {
//   return array.find(({ id }) =>
//     id == objectId
//   );
// };
