export interface ProductDto {
  id: number
  title: string
  price: number
  category: string
  image:string
  rating: RatingDto
}

export interface RatingDto {
  rate: number
  count: number
}
