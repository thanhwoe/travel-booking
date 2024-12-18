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
}
