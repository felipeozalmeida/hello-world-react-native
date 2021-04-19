import {Model} from '@nozbe/watermelondb';
import {children, date, readonly, text} from '@nozbe/watermelondb/decorators';
import {tables} from '../tables';
import {columns} from '../columns';
import type {Query} from '@nozbe/watermelondb';
import type {Associations} from '@nozbe/watermelondb/Model';
import type {User} from './User';

const ownColumns = columns.status;

export class Status extends Model {
  static table = tables.status;
  static associations: Associations = {
    [tables.user]: {type: 'has_many', foreignKey: 'status_id'},
  };
  @text(ownColumns.name) name!: string;
  @children(tables.user) users!: Query<User>;
  @readonly @date(ownColumns.createdAt) createdAt!: Date;
  @readonly @date(ownColumns.updatedAt) updatedAt!: Date;
}
