import {Line} from "./text";


export type BookType = "poetry" | "prose" | "drama"

export interface PartialBook {
  title: string
  author: string
  language: string
  category?: string
  id?: string
  type?: BookType
  genre?: string[]
}

export interface PartialBookSection {
  id?: number
  uid?: number
  title: string
  type?: string
}

export type TextSection = PartialBookSection & {
  textContent: string
  first?: boolean
  last?: boolean
}

export type SplitTextSection = PartialBookSection & {
  lines: Line[]
}

export type ContainerSection = PartialBookSection & {
  children: Array<TextSection | ContainerSection>
}

export type BookSection = TextSection | ContainerSection

export type Book = PartialBook & {
  content: TextSection[]
}

export type DeepBook = PartialBook & {
  content: BookSection[]
}

export type BookDescription = PartialBook

export type ContentTableSection = BookSection & {
  path?: number[],
  depth?: number
}
