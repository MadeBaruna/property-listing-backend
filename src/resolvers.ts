import { prisma } from '../generated/prisma-client';

export const resolvers = {
  Query: {
    facilities: async () => {
      const facilities = await prisma.facilities({
        orderBy: 'name_ASC'
      });

      return facilities;
    },

    places: async (parent, { first, last, after, before, search, facilites, type }) => {
      const places = await prisma.places({
        first,
        last,
        after,
        before,
        where: {
          name_contains: search,
          type,
          facilities_some: {
            id_in: facilites,
          }
        }
      });

      return places;
    },

    place: async (parent, { id }) => {
      return await prisma.place({ id });
    }
  },

  Place: {
    address(parent) {
      return prisma.place({ id: parent.id }).address();
    },
    facilities(parent) {
      return prisma.place({ id: parent.id }).facilities();
    },
    images(parent) {
      return prisma.place({ id: parent.id }).images();
    }
  }
};
