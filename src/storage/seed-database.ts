import {database} from './database';
import {seeds} from './seeds';

(async () => {
  // Use the following during development
  await database.action(async () => {
    // Erase locale database
    await database.unsafeResetDatabase();

    // Clear local seed version
    await database.adapter.removeLocal('seed_version');
  });

  // Get local seed version
  const localSeedVersion = await database.adapter.getLocal('seed_version');

  // If the device doesn't have a seed version
  if (!localSeedVersion) {
    // Run seeders from all versions
    seeds.seeders.forEach((seeder) => seeder());

    // Set local seed version
    await database.adapter.setLocal('seed_version', String(seeds.version));
  }

  // Else, if the local seed version is lesser than the current seed version
  else if (Number(localSeedVersion) < seeds.version) {
    // Run seeders from all versions that are greater than the local version
    seeds.seeders.slice(Number(localSeedVersion)).forEach((seeder) => seeder());

    // Update local token with the current version
    await database.adapter.setLocal('seed_version', String(seeds.version));
  }
})();
