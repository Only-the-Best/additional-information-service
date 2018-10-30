import House from './database/House.js';

const resolvers = {
  Query: {
    async allHouses() {
      return await House.find();
    },
  },
};

export default resolvers;