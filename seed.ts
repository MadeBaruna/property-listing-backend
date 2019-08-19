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
        latitude: -6.1765987,
        longitude: 106.7880092,
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
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=1",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=1"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=1",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=1"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=1",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=1"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=1",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=1"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=1",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=1"
        },
      ]
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
        latitude: -6.1784556,
        longitude: 106.7895395,
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
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=2",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=2"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=2",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=2"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=2",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=2"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=2",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=2"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=2",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=2"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=2",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=2"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "Mediterania Palace Residences",
    description: "Mediterania Palace Residences berlokasi di Jalan Landas Pacu Utara Selatan Blok A1 No.2, RT.13/RW.6, Kb. Kosong, Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10630",
    type: "APARTMENT",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Pusat",
        street: "Jalan Landas Pacu Utara Selatan Blok A1 No.2, RT.13/RW.6, Kb. Kosong, Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10630",
        latitude: -6.1982065,
        longitude: 106.8084106,
      }
    },
    facilities: {
      connect: [
        { id: facilites[0].id },
        { id: facilites[4].id },
        { id: facilites[5].id },
        { id: facilites[6].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=3",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=3"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=3",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=3"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=3",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=3"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=3",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=3"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "OYO 268 cinere resort apartement",
    description: "OYO 268 cinere resort apartement berlokasi di Jl. Raya Gandul, Gandul, Kec. Cinere, Kota Depok, Jawa Barat 16512",
    type: "APARTMENT",
    address: {
      create: {
        country: "Indonesia",
        city: "Depok",
        street: "Jl. Raya Gandul, Gandul, Kec. Cinere, Kota Depok, Jawa Barat 16512",
        latitude: -6.3430299,
        longitude: 106.7982036,
      }
    },
    facilities: {
      connect: [
        { id: facilites[2].id },
        { id: facilites[4].id },
        { id: facilites[5].id },
        { id: facilites[8].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=9",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=9"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=9",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=9"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=9",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=9"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=9",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=9"
        },
      ]
    }
  });
  
  await prisma.createPlace({
    name: "J-Office Building",
    description: "J-Office Building Office berlokasi di Pasar Minggu, South Jakarta City, Jakarta",
    type: "OFFICE",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Selatan",
        street: "Jl. Raya Pasar Minggu No.10, RT.6/RW.1, Pejaten Tim., Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510",
        latitude: -6.2692358,
        longitude: 106.8465109,
      }
    },
    facilities: {
      connect: [
        { id: facilites[5].id },
        { id: facilites[6].id },
        { id: facilites[7].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=5",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=5"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=5",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=5"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=5",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=5"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=5",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=5"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "Building Maspion Plaza",
    description: "Building Maspion Plaza Office space rental agency",
    type: "OFFICE",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Utara",
        street: "Jl. Gunung Sahari Kav. 18, RT.4/RW.1, Pademangan Bar., Kec. Pademangan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14420",
        latitude: -6.1413868,
        longitude: 106.8340158,
      }
    },
    facilities: {
      connect: [
        { id: facilites[5].id },
        { id: facilites[6].id },
        { id: facilites[7].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=6",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=6"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=6",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=6"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=6",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=6"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=6",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=6"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "Mega Plaza Building Management",
    description: "Mega Plaza Building Management space rental agency",
    type: "OFFICE",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Selatan",
        street: "Mega Plaza, Jl. H. R. Rasuna Said No.Kav.3, RW.1, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940",
        latitude: -6.2131513,
        longitude: 106.8310976,
      }
    },
    facilities: {
      connect: [
        { id: facilites[5].id },
        { id: facilites[6].id },
        { id: facilites[7].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=7",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=7"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=7",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=7"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=7",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=7"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=7",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=7"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "Office Building Marga Guna Grand - MGG",
    description: "Office Building Marga Guna Grand - MGG space rental agency",
    type: "OFFICE",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Selatan",
        street: "Jl. Margaguna Raya No. 9, Pondok Indah,, Kebayoran Baru, RT.1/RW.1, Gandaria Sel., Jakarta Selatan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12420",
        latitude: -6.2632569,
        longitude: 106.7858005,
      }
    },
    facilities: {
      connect: [
        { id: facilites[5].id },
        { id: facilites[6].id },
        { id: facilites[7].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=8",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=8"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=8",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=8"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=8",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=8"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=8",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=8"
        },
      ]
    }
  });
}

main().catch(e => console.error(e))
