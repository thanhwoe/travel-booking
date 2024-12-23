export enum RoomType {
  HOTEL = 'hotel',
  APARTMENT = 'apartment',
  BEACH = 'beach',
  MOUNTAIN = 'mountain',
  CAMPING = 'camping',
}

export interface IRoom {
  id: string;
  name: string;
  description: string;
  imageUrl: string[];
  variants: string[];
  amenities: string[];
  star: number;
  price: number;
  review: number;
  type: string;
  descriptionImage: string;
  location: string;
  isFavorite?: boolean;
}

export interface IFavorites {
  id: number;
  userId: string;
  favorites: string[];
}
