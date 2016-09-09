import stringHash from 'string-hash';

function planetOptionsWithDefaultOptions({ name, size, water, rotation }) {
  return {
    name: name || '',
    size: size|| '250', // in pixels
    water: water || '45', // 0-100
    rotation: rotation || '0', // 0-360
  };
}

export function getPlanet(inputOptions) {
  const options = planetOptionsWithDefaultOptions(inputOptions)
  const { name, water, rotation, size } = options;
  const seed = stringHash(name);

  const queryParams = [
    `palette=Atlas`,
    `iter=5000`,
    `cmd=Create`,
    `name=${name}`,
    `pct_ice=0`,
    `height=${size}`,
    `seed=${seed}`,
    `rotate=${rotation}`,
    `projection=Spherical`,
    `pct_water=${water}`,
    `motif=SciFi`,
  ];

  // return getBackupUrl(options);
  const url = `http://worldgen.bin.sh/worldgen.cgi?${queryParams.join('&')}`
  return {
    url,
  }
}

function getBackupUrl(options) {
  const { size } = options;
  const rest = { ...options };
  delete rest['size'];
  delete rest['rotation'];

  const seed = stringHash(JSON.stringify(rest));
  return {
    url: `https://robohash.org/${seed}?size=${size}x${size}`,
  };
}
