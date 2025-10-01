export interface IBlogPost {
  image: string
  title: string
  description: string
  href: string
  category: string
  meta: {
    title?: string
    value?: string
  }[]
}
