import type {Database} from '@nozbe/watermelondb';

type SeederFn = () => void;

type Seeds = {
  version: number;
  seeders: SeederFn[];
};

export const seedDatabase = async (
  database: Database,
  seeds: Seeds,
  key: string = 'seed_version',
): Promise<void> => {
  // Get local seed version
  const localSeedVersion = await database.adapter.getLocal(key);

  // If the device doesn't have a seed version
  if (!localSeedVersion) {
    // Run seeders from all versions
    seeds.seeders.forEach((seeder) => seeder());
    // Set local seed version
    await database.adapter.setLocal(key, String(seeds.version));
  }

  // Else, if the local seed version is lesser than the current seed version
  else if (Number(localSeedVersion) < seeds.version) {
    // Run seeders from all versions that are greater than the local version
    seeds.seeders.slice(Number(localSeedVersion)).forEach((seeder) => seeder());
    // Update local token with the current version
    await database.adapter.setLocal(key, String(seeds.version));
  }
};
