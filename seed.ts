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

  await prisma.createPlace({
    name: "Apartemen Casablanca",
    description: "Apartemen Casablanca berlokasi di Jl. Casablanca No.Kav. 12, RT.14/RW.5, Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870",
    type: "APARTMENT",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Selatan",
        street: "Jl. Casablanca No.Kav. 12, RT.14/RW.5, Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870",
        latitude: -6.2229424,
        longitude: 106.8452811,
      }
    },
    facilities: {
      connect: [
        { id: facilites[0].id },
        { id: facilites[1].id },
        { id: facilites[2].id },
        { id: facilites[3].id },
        { id: facilites[4].id },
        { id: facilites[5].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=10",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=10"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=10",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=10"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=10",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=10"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=10",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=10"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=10",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=10"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "Hampton's Park Apartment",
    description: "Hampton's Park Apartment berlokasi di Podomoro City Jl. Terogong Raya No.18, RT.10/RW.10, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430",
    type: "APARTMENT",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Selatan",
        street: "Jl. Terogong Raya No.18, RT.10/RW.10, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430",
        latitude: -6.281984,
        longitude: 106.7906928,
      }
    },
    facilities: {
      connect: [
        { id: facilites[0].id },
        { id: facilites[2].id },
        { id: facilites[3].id },
        { id: facilites[6].id },
        { id: facilites[7].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=11",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=11"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=11",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=11"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=11",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=11"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=11",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=11"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=11",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=11"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=11",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=11"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "Belmont Residence Tower Mont Blanc",
    description: "Belmont Residence Tower Mont Blanc berlokasi di Jl. Lapangan Bola, Jl. Meruya Ilir Raya, RT.8/RW.7, Srengseng, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630",
    type: "APARTMENT",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Barat",
        street: "Jl. Lapangan Bola, Jl. Meruya Ilir Raya, RT.8/RW.7, Srengseng, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630",
        latitude: -6.2007575,
        longitude: 106.7627764,
      }
    },
    facilities: {
      connect: [
        { id: facilites[1].id },
        { id: facilites[2].id },
        { id: facilites[3].id },
        { id: facilites[4].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=13",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=13"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=13",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=13"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=13",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=13"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=13",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=13"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "The Summit",
    description: "The Summit berlokasi di Jl. Boulevard Sentra, Kelapa Gading, Timur, RT.13/RW.18, RT.13/RW.18, Klp. Gading Tim., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
    type: "APARTMENT",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Utara",
        street: "Jl. Boulevard Sentra, Kelapa Gading, Timur, RT.13/RW.18, RT.13/RW.18, Klp. Gading Tim., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
        latitude: -6.1587102,
        longitude: 106.9088173,
      }
    },
    facilities: {
      connect: [
        { id: facilites[5].id },
        { id: facilites[6].id },
        { id: facilites[7].id },
        { id: facilites[8].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=12",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=12"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=12",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=12"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=12",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=12"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=12",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=12"
        },
      ]
    }
  });
  
  await prisma.createPlace({
    name: "Regus - Jakarta, Beltway Office Park",
    description: "Regus - Jakarta, Beltway Office Park berlokasi di Beltway Office Park Tower B 5th floor, RT.7/RW.2, Ragunan, Pasar Minggu, Jakarta, 12550",
    type: "OFFICE",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Selatan",
        street: "Beltway Office Park Tower B 5th floor, RT.7/RW.2, Ragunan, Pasar Minggu, Jakarta, 12550",
        latitude: -6.2914326,
        longitude: 106.8185449,
      }
    },
    facilities: {
      connect: [
        { id: facilites[1].id },
        { id: facilites[2].id },
        { id: facilites[3].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=20",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=20"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=20",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=20"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=20",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=20"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=20",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=20"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "Wisma Korindo",
    description: "Wisma Korindo office building",
    type: "OFFICE",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Selatan",
        street: "MT Haryono Street No.Kav 62, RT.2/RW.2, Pancoran, South Jakarta City, Jakarta 12780",
        latitude: -6.2439533,
        longitude: 106.8440366,
      }
    },
    facilities: {
      connect: [
        { id: facilites[1].id },
        { id: facilites[2].id },
        { id: facilites[3].id },
        { id: facilites[4].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=21",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=21"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=21",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=21"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=21",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=21"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=21",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=21"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "SewaKantorCBD",
    description: "SewaKantorCBD space rental agency",
    type: "OFFICE",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Timur",
        street: "Graha MIR lt. No., Jl. Pemuda Asli 4 No.9, RT.9/RW.3, Rawamangun, Pulo Gadung, East Jakarta City, Jakarta 13220",
        latitude: -6.1924806,
        longitude: 106.8806219,
      }
    },
    facilities: {
      connect: [
        { id: facilites[1].id },
        { id: facilites[2].id },
        { id: facilites[3].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=22",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=22"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=22",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=22"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=22",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=22"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=22",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=22"
        },
      ]
    }
  });

  await prisma.createPlace({
    name: "MARQUEE - Pondok Indah Office ",
    description: "MARQUEE - Pondok Indah Office berlokasi di V, Pd. Indah Office Tower 3, Jl. Sultan Iskandar Muda No.RT.5, RT.4/RW.3, Pd. Pinang, Jakarta, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310",
    type: "OFFICE",
    address: {
      create: {
        country: "Indonesia",
        city: "Jakarta Selatan",
        street: "V, Pd. Indah Office Tower 3, Jl. Sultan Iskandar Muda No.RT.5, RT.4/RW.3, Pd. Pinang, Jakarta, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310",
        latitude: -6.262937,
        longitude: 106.7818737,
      }
    },
    facilities: {
      connect: [
        { id: facilites[2].id },
        { id: facilites[3].id },
        { id: facilites[4].id },
        { id: facilites[5].id },
      ]
    },
    images: {
      create: [
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=24",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=24"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=24",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=24"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=24",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=24"
        },
        {
          thumbnailUrl: "https://loremflickr.com/320/240/apartment,office?lock=24",
          url: "https://loremflickr.com/1280/720/apartment,office?lock=24"
        },
      ]
    }
  });
}

main().catch(e => console.error(e))
