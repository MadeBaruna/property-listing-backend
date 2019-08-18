import { prisma, Facility } from './generated/prisma-client';

async function main() {
  const facilites: Facility[] = [];
  facilites[0] = await prisma.createFacility({
    name: "Swimming Pool"
  });
  facilites[1] = await prisma.createFacility({
    name: "Restaurant"
  });
  facilites[2] = await prisma.createFacility({
    name: "Jogging Track"
  });
  facilites[3] = await prisma.createFacility({
    name: "Laundry"
  });
  facilites[4] = await prisma.createFacility({
    name: "Super Market"
  });
  facilites[5] = await prisma.createFacility({
    name: "Mini Market"
  });
  facilites[6] = await prisma.createFacility({
    name: "Gym"
  });
  facilites[7] = await prisma.createFacility({
    name: "Atm Center"
  });
  facilites[8] = await prisma.createFacility({
    name: "Laundry"
  });

  await prisma.createPlace({
    name: "Mediterania Garden Residence 2",
    description: "Mediterania Garden Residence 2 berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Mediterania Garden Residence 2 memiliki 6 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Basketball Court, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market, Swimming Pool dan Tennis Court.",
    type: "APARTMENT",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Barat",
        street: "Podomoro City Jl. Letjen S.Parman Kav.28",
        latitude: -6.1766995,
        longitude: 106.7895952,
      }
    },
    facilities: {
      connect: [
        { id: facilites[0].id },
        { id: facilites[1].id },
        { id: facilites[2].id },
      ]
    },
    images: {
      create: {
        thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=1",
        url: "https://loremflickr.com/1280/720/apartment,office?lock=1"
      }
    }
  });

  await prisma.createPlace({
    name: "Central Park Residence",
    description: "Central Park Residence berlokasi di Podomoro City Jl. Letjen S.Parman Kav.28. Apartemen ini dikembangkan oleh PT Agung Podomoro Land , Tbk,Central Park Residence memiliki 3 tower. Dalam kompleks ini tersedia beragam fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana dan fasilitas yang menjamin kenyamanan hunian Anda, seperti: Access Card, Atm Center, Bbq Pit, Drug Store, Function Hall, Gym, Jogging Track, Laundry, Mini Market, Movie Theater, Playground, Restaurant, Salon, Super Market dan Swimming Pool.",
    type: "APARTMENT",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Barat",
        street: "Podomoro City Jl. Letjen S.Parman Kav.28",
        latitude: -6.1766995,
        longitude: 106.7895952,
      }
    },
    facilities: {
      connect: [
        { id: facilites[0].id },
        { id: facilites[2].id },
        { id: facilites[3].id },
      ]
    },
    images: {
      create: {
        thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=2",
        url: "https://loremflickr.com/1280/720/apartment,office?lock=2"
      }
    }
  });
}

main().catch(e => console.error(e))
