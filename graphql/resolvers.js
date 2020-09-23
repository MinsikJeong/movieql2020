import { getMovies, addMovie, deleteMovie, getById } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    // movies: () => getMovies(),
    // movie: (_, args) => {
    //   return getById(args.id);
    // },
  },
  // Mutation: {
  //   addMovie: (_, { name, score }) => addMovie(name, score),
  //   deleteMovie: (_, { id }) => deleteMovie(id),
  // },
};

export default resolvers;
