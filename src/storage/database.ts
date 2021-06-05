import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import {schema} from './schema';

// import Post from './Post' // ⬅️ You'll import your Models here
import {Status} from './User/Status';
import {Type} from './User/Type';
import {User} from './User/User';
import {Person} from './Person/Person';

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({schema});

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [
    // Post, // ⬅️ You'll add Models to Watermelon here
    Status,
    Type,
    User,
    Person,
  ],
  actionsEnabled: true,
});
