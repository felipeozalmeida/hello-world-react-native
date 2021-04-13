import {Model} from '@nozbe/watermelondb';
import {children, date, readonly, text} from '@nozbe/watermelondb/decorators';
import type {Query} from '@nozbe/watermelondb';
import type {Associations} from '@nozbe/watermelondb/Model';
import type {User} from './User';

export class Status extends Model {
  static table = 'statuses';
  static associations: Associations = {
    users: {type: 'has_many', foreignKey: 'status_id'},
  };
  @text('name') name!: string;
  @children('users') users!: Query<User>;
  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
}
