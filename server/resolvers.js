import House from './database/House.js';

const resolvers = {
  Query: {
    async allHouses() {
      return await House.find();
    },
    async getSome(dummy, numObj) {
      return await House.find({ _id: { $in: numObj.num } });
    },
  },
};

export default resolvers;
