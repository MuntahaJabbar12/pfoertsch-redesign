import jordanCover from "../assets/images/jordan-edition.png";
import moroccoCover from "../assets/images/morocco-edition.png";
import myanmarCover from "../assets/images/myanmar-edition.png";
import qatarCover from "../assets/images/qatar-edition.png";
import tunisiaCover from "../assets/images/tunisia-edition.png";

export function getLocalCoverImage(title) {
  if (!title) return null;

  const lower = title.toLowerCase();

  if (lower.includes("jordan")) return jordanCover;
  if (lower.includes("morocco")) return moroccoCover;
  if (lower.includes("myanmar")) return myanmarCover;
  if (lower.includes("qatar")) return qatarCover;
  if (lower.includes("tunisia")) return tunisiaCover;

  return null;
}