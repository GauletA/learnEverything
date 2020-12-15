import { useDispatch } from "react-redux";
import { setOpenWord } from "../../../actions/wordTranslation";

export const useWhatWord = () => {
  const dispatch = useDispatch();

  return [(index) => dispatch(setOpenWord(index))];
};
