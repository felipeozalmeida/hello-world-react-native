import {Model} from '@nozbe/watermelondb';
import {
  date,
  field,
  readonly,
  relation,
  text,
} from '@nozbe/watermelondb/decorators';
import {Tables, Columns} from '../schema';
import type {Relation} from '@nozbe/watermelondb';
import type {Associations} from '@nozbe/watermelondb/Model';
import type {Type} from './Type';
import type {Status} from './Status';

const OwnColumns = Columns.User;

export class User extends Model {
  static table = Tables.User;
  static associations: Associations = {
    [Tables.Type]: {type: 'belongs_to', key: OwnColumns.typeId},
    [Tables.Status]: {type: 'belongs_to', key: OwnColumns.statusId},
  };
  @text(OwnColumns.email) email!: string;
  @field(OwnColumns.password) password!: string;
  @relation(Tables.Type, OwnColumns.typeId) type!: Relation<Type>;
  @relation(Tables.Status, OwnColumns.statusId) status!: Relation<Status>;
  @readonly @date(OwnColumns.createdAt) createdAt!: Date;
  @readonly @date(OwnColumns.updatedAt) updatedAt!: Date;
}
