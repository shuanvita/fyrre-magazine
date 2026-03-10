export interface ArticleCardProps {
  title: string
  description?: string
  image?: string
  variant?: 'hero' | 'list' | 'grid'
  meta?: {
    name: string
    value: string
  }[]
  label?: string
}
