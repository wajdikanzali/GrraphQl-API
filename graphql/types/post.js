import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList
} from 'graphql';

export const postType = new GraphQLInputObjectType({
	name: 'Post',
	description: 'User api',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body: {
			type: GraphQLString
		}
	})
});

export const postInputType: new GraphQLInputObjectType({
	name: 'PostInput',
	description: 'Insert Post'
	fields: () => ({
		uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body: {
			type: GraphQLString
		}
	})
})