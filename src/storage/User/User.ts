import {Model} from '@nozbe/watermelondb';
import {
  date,
  field,
  readonly,
  relation,
  text,
} from '@nozbe/watermelondb/decorators';
import type {Relation} from '@nozbe/watermelondb';
import type {Associations} from '@nozbe/watermelondb/Model';
import type {Type} from './Type';
import type {Status} from './Status';

export class User extends Model {
  static table = 'Users';
  static associations: Associations = {
    types: {type: 'belongs_to', key: 'type_id'},
    statuses: {type: 'belongs_to', key: 'status_id'},
  };
  @text('email') email!: string;
  @field('password') password!: string;
  @relation('types', 'type_id') type!: Relation<Type>;
  @relation('statuses', 'status_id') status!: Relation<Status>;
  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
}
