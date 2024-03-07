class Prato {
  description: string
  image: string
  infos: string[]
  title: string
  note: number
  id: number
  star: string

  constructor(
    description: string,
    image: string,
    infos: string[],
    title: string,
    note: number,
    star: string,
    id: number
  ) {
    this.description = description
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.note = note
    this.star = star
  }
}

export default Prato
