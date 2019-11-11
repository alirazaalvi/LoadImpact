export interface Character {
  name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
  homeworld: string;
  homeworldDetails?: HomeworldDetails;
	films: string[];
  species: string[];
  speciesDetails?: SpeciesDetails;
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
}

export interface SpeciesDetails{
	name: string;
	classification: string;
	designation: string;
	average_height: string;
	skin_colors: string;
	hair_colors: string;
	eye_colors: string;
	average_lifespan: string;
	homeworld: string;
	language: string;
	people: string[],
	films: string[],
	created: string;
	edited: string;
	url: string;
}

export interface HomeworldDetails {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: string[];
	films: string[];
	created: string;
	edited: string;
	url: string;
}

export interface Movie {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: string[],
	planets: string[],
	starships: string[],
	vehicles: string[],
	species: string[],
	created: string;
	edited: string;
	url: string;
}

export interface SearchInput {
  searchText: string;
}

export interface Message {
  [key: string]: string
}