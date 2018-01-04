import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

//import schema from './graphql';

const app = express();


mongoose.connect('mongodb://admin:admin@ds237967.mlab.com:37967/graphqlapi');
const db = mongoose.connection;
db.on('error', () => console.log('Failed to connect database'))
	.once('open', () => console.log('Connected to DB'))

app.get('/', (req, res) => {
	res.send('Hello world, this is graphQL api');
});


//GraphQL API endpoint
/*
app.use('/graphql', graphqlHTTP(() => ({
	schema,
	graphiql: true,
	pretty: true
})));
*/
app.listen(3000, () =>{
	console.log('Graphql API Runing on port 3000');
});



