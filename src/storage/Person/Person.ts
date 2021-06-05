import {Model} from '@nozbe/watermelondb';
import {date, readonly, text, children} from '@nozbe/watermelondb/decorators';
import {tables} from '../tables';
import {columns} from '../columns';
import type {Query} from '@nozbe/watermelondb';
import type {Associations} from '@nozbe/watermelondb/Model';
import type {User} from '../User';

const ownColumns = columns.person;

export class Person extends Model {
  static table = tables.person;
  static associations: Associations = {
    [tables.user]: {type: 'has_many', foreignKey: 'person_id'},
  };
  @text(ownColumns.name) name!: string;
  @text(ownColumns.birthday) birthday!: string;
  @children(tables.user) users!: Query<User>;
  @readonly @date(ownColumns.createdAt) createdAt!: Date;
  @readonly @date(ownColumns.updatedAt) updatedAt!: Date;
}
