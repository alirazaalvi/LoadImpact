import { Character, Movie } from './../features/starwars/types';

export const characters: Character[] = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "homeworldDetails": {
      "name": "Yavin IV",
      "rotation_period": "24",
      "orbital_period": "4818",
      "diameter": "10200",
      "climate": "temperate, tropical",
      "gravity": "1 standard",
      "terrain": "jungle, rainforests",
      "surface_water": "8",
      "population": "1000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T11:37:19.144000Z",
      "edited": "2014-12-20T20:58:18.421000Z",
      "url": "https://swapi.co/api/planets/3/"
    },
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "speciesDetails": {
      "name": "Wookiee",
      "classification": "mammal",
      "designation": "sentient",
      "average_height": "210",
      "skin_colors": "gray",
      "hair_colors": "black, brown",
      "eye_colors": "blue, green, yellow, brown, golden, red",
      "average_lifespan": "400",
      "homeworld": "https://swapi.co/api/planets/14/",
      "language": "Shyriiwook",
      "people": [
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/80/"
      ],
      "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/7/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T16:44:31.486000Z",
      "edited": "2015-01-30T21:23:03.074598Z",
      "url": "https://swapi.co/api/species/3/"
    },
    "vehicles": [
      "https://swapi.co/api/vehicles/14/",
      "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [
      "https://swapi.co/api/starships/12/",
      "https://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
  },
  {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    "species": [
      "https://swapi.co/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:10:51.357000Z",
    "edited": "2014-12-20T21:17:50.309000Z",
    "url": "https://swapi.co/api/people/2/"
  },
  {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.co/api/planets/8/",
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    "species": [
      "https://swapi.co/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:11:50.376000Z",
    "edited": "2014-12-20T21:17:50.311000Z",
    "url": "https://swapi.co/api/people/3/"
  },
  {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "vehicles": [],
    "starships": [
      "https://swapi.co/api/starships/13/"
    ],
    "created": "2014-12-10T15:18:20.704000Z",
    "edited": "2014-12-20T21:17:50.313000Z",
    "url": "https://swapi.co/api/people/4/"
  },
  {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
    "homeworld": "https://swapi.co/api/planets/2/",
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
      "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [],
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z",
    "url": "https://swapi.co/api/people/5/"
  },
  {
    "name": "Owen Lars",
    "height": "178",
    "mass": "120",
    "hair_color": "brown, grey",
    "skin_color": "light",
    "eye_color": "blue",
    "birth_year": "52BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/1/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:52:14.024000Z",
    "edited": "2014-12-20T21:17:50.317000Z",
    "url": "https://swapi.co/api/people/6/"
  },
  {
    "name": "Beru Whitesun lars",
    "height": "165",
    "mass": "75",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "blue",
    "birth_year": "47BBY",
    "gender": "female",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/1/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:53:41.121000Z",
    "edited": "2014-12-20T21:17:50.319000Z",
    "url": "https://swapi.co/api/people/7/"
  },
  {
    "name": "R5-D4",
    "height": "97",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, red",
    "eye_color": "red",
    "birth_year": "unknown",
    "gender": "n/a",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
      "https://swapi.co/api/films/1/"
    ],
    "species": [
      "https://swapi.co/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:57:50.959000Z",
    "edited": "2014-12-20T21:17:50.321000Z",
    "url": "https://swapi.co/api/people/8/"
  },
  {
    "name": "Biggs Darklighter",
    "height": "183",
    "mass": "84",
    "hair_color": "black",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "24BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
      "https://swapi.co/api/films/1/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "vehicles": [],
    "starships": [
      "https://swapi.co/api/starships/12/"
    ],
    "created": "2014-12-10T15:59:50.509000Z",
    "edited": "2014-12-20T21:17:50.323000Z",
    "url": "https://swapi.co/api/people/9/"
  },
  {
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/20/",
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
      "https://swapi.co/api/vehicles/38/"
    ],
    "starships": [
      "https://swapi.co/api/starships/48/",
      "https://swapi.co/api/starships/59/",
      "https://swapi.co/api/starships/64/",
      "https://swapi.co/api/starships/65/",
      "https://swapi.co/api/starships/74/"
    ],
    "created": "2014-12-10T16:16:29.192000Z",
    "edited": "2014-12-20T21:17:50.325000Z",
    "url": "https://swapi.co/api/people/10/"
  }
];

export const movies: Movie[] = [
  {
    "title": "A New Hope",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    "director": "George Lucas",
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25",
    "characters": [
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/2/",
      "https://swapi.co/api/people/3/",
      "https://swapi.co/api/people/4/",
      "https://swapi.co/api/people/5/",
      "https://swapi.co/api/people/6/",
      "https://swapi.co/api/people/7/",
      "https://swapi.co/api/people/8/",
      "https://swapi.co/api/people/9/",
      "https://swapi.co/api/people/10/",
      "https://swapi.co/api/people/12/",
      "https://swapi.co/api/people/13/",
      "https://swapi.co/api/people/14/",
      "https://swapi.co/api/people/15/",
      "https://swapi.co/api/people/16/",
      "https://swapi.co/api/people/18/",
      "https://swapi.co/api/people/19/",
      "https://swapi.co/api/people/81/"
    ],
    "planets": [
      "https://swapi.co/api/planets/2/",
      "https://swapi.co/api/planets/3/",
      "https://swapi.co/api/planets/1/"
    ],
    "starships": [
      "https://swapi.co/api/starships/2/",
      "https://swapi.co/api/starships/3/",
      "https://swapi.co/api/starships/5/",
      "https://swapi.co/api/starships/9/",
      "https://swapi.co/api/starships/10/",
      "https://swapi.co/api/starships/11/",
      "https://swapi.co/api/starships/12/",
      "https://swapi.co/api/starships/13/"
    ],
    "vehicles": [
      "https://swapi.co/api/vehicles/4/",
      "https://swapi.co/api/vehicles/6/",
      "https://swapi.co/api/vehicles/7/",
      "https://swapi.co/api/vehicles/8/"
    ],
    "species": [
      "https://swapi.co/api/species/5/",
      "https://swapi.co/api/species/3/",
      "https://swapi.co/api/species/2/",
      "https://swapi.co/api/species/1/",
      "https://swapi.co/api/species/4/"
    ],
    "created": "2014-12-10T14:23:31.880000Z",
    "edited": "2015-04-11T09:46:52.774897Z",
    "url": "https://swapi.co/api/films/1/"
  }
]