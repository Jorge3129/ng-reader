import {LatinDictEntry, DictEntry} from "../../models/words";

// const LATIN_API = "https://www.latin-is-simple.com/api/"
//
// export const buildQuery = (word: string) => {
//   return LATIN_API + `/vocabulary/search/?query=${word}&forms_only=true`
// }

export const BOOK_SERVER_PORT = 9000;
export const BOOK_SERVER_URL = `http://localhost:${BOOK_SERVER_PORT}`

export const buildQuery = (word: string) => {
  return BOOK_SERVER_URL + `/lang/word/${word}`
}

export const convertFromLatin = (word: LatinDictEntry): DictEntry => {
  return {
    type: word.type.name,
    name: word.short_name,
    full: word.full_name,
    translation: word.translations_unstructured['en'] || '',
    id: word.id
  }
}
