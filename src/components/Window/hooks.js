import { useSelector, useDispatch } from "react-redux";
import { setNext, setReverseHidden } from "../../actions/wordTranslation";

import { getWordTranslation } from "../../selectors/wordTranslation";

export const useWindow = () => {
  const dispatch = useDispatch();
  const { wordsHidden } = useSelector(getWordTranslation);

  return [
    wordsHidden,
    ["hidden", ""],
    () => dispatch(setNext()),
    () => dispatch(setReverseHidden()),
  ];
};
