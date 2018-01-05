import {
	GraphQLList
} from 'graphql';

import { userType } from '../../types';
import UserModel from '../../../models/user';

export default {
	type: new GraphQLList(userType),
	resolve() {
		const users = UserModel.find().exec();
		if(!users){
			throw new Error('Error while fetching users..');
		}
		return users;
	}
}