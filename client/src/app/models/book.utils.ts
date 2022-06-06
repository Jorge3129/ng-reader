import {ContentTableSection} from "./books";
import {isTextSection} from "./typeGuards";

export const formatStructure = (structure: ContentTableSection[], depth = 0, path: number[] = []): ContentTableSection[] => {
  return structure
    .map((s, i) => ({...s, path: [...path, i], depth}))
    .map(s => isTextSection(s) ? s :
      {...s, children: formatStructure(s.children, depth + 1, s.path)}
    )
}
