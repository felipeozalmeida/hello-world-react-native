import {Model} from '@nozbe/watermelondb';
import {children, date, readonly, text} from '@nozbe/watermelondb/decorators';
import {Tables, Columns} from '../schema';
import type {Query} from '@nozbe/watermelondb';
import type {Associations} from '@nozbe/watermelondb/Model';
import type {User} from './User';

const OwnColumns = Columns.Type;

export class Type extends Model {
  static table = Tables.Type;
  static associations: Associations = {
    [Tables.User]: {type: 'has_many', foreignKey: Columns.User.typeId},
  };
  @text(OwnColumns.name) name!: string;
  @children(Tables.User) users!: Query<User>;
  @readonly @date(OwnColumns.createdAt) createdAt!: Date;
  @readonly @date(OwnColumns.updatedAt) updatedAt!: Date;
}
