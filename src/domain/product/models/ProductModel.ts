import type { ProductDto } from "../dto/ProductDto";

export default class ProductModel {

  static fromDto(dto:ProductDto) {
    return new ProductModel(dto)
  }

  static fromDtos(dtos: ProductDto[]) {
    return dtos.map((dto) => ProductModel.fromDto(dto))
  }

  constructor(private readonly dto: ProductDto) {}

  get id() {
    return this.dto.id
  }

  get title() {
    return this.dto.title
  }

  get price() {
   return this.dto.price
  }

  get category() {
    return this.dto.category
  }

  get image() {
    return this.dto.image
  }

  get ratingRate() {
    return this.dto.rating.rate ?? 0
  }

  get rantingCount() {
    return this.dto.rating?.count ?? 0
  }

  formattedPrice(locale:string = "es-MX", currency:string = "MXN"){
    return new Intl.NumberFormat(locale, {
      style:"currency",
      currency
    }).format(this.price)
  }
}

