import {Model} from '@nozbe/watermelondb';
import {
  date,
  field,
  readonly,
  relation,
  text,
} from '@nozbe/watermelondb/decorators';
import {tables} from '../tables';
import {columns} from '../columns';
import type {Relation} from '@nozbe/watermelondb';
import type {Associations} from '@nozbe/watermelondb/Model';
import type {Type} from './Type';
import type {Status} from './Status';
import type {Person} from '../Person';

const ownColumns = columns.user;

export class User extends Model {
  static table = tables.user;
  static associations: Associations = {
    [tables.type]: {type: 'belongs_to', key: ownColumns.typeId},
    [tables.status]: {type: 'belongs_to', key: ownColumns.statusId},
    [tables.person]: {type: 'belongs_to', key: ownColumns.personId},
  };
  @text(ownColumns.email) email!: string;
  @field(ownColumns.password) password!: string;
  @relation(tables.type, ownColumns.typeId) type!: Relation<Type>;
  @relation(tables.status, ownColumns.statusId) status!: Relation<Status>;
  @relation(tables.person, ownColumns.personId) person!: Relation<Person>;
  @readonly @date(ownColumns.createdAt) createdAt!: Date;
  @readonly @date(ownColumns.updatedAt) updatedAt!: Date;
}
