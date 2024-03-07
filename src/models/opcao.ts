class Opcao {
  description: string
  image: string
  title: string
  id: number

  constructor(description: string, image: string, title: string, id: number) {
    this.description = description
    this.id = id
    this.image = image
    this.title = title
  }
}

export default Opcao
