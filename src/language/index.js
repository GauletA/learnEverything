import { split, map, splitAt, pipe, reduce, prop, length, curry } from "ramda";

const randomChangeArray = (array) => { 
  const tab = [...array]
  return function rec(tab) {
    return (!tab.length) ? []
    : [...tab.splice(Math.floor(Math.random() * Math.floor(tab.length)), 1), ...rec([...tab])]
  }(tab)
}

const propTab = prop("tab");
export const propIndex = prop("index");

const wordsDouble = (value) => (value.length === 1 ? value[0] : value);
export const splitString = (valSplit) => pipe(split(valSplit), wordsDouble);

const mapSplit = (valSplit, tab) => [
  map(splitString(valSplit), tab[0]),
  ...tab[1],
];
const curriedMapSplit = curry(mapSplit);

const splitMyWords = (valSplit, tab) => [[...tab[0]], split(valSplit, tab[1])];
const curriedSplitMyWords = curry(splitMyWords);

export const reducerNumber = (acc, val) =>
  typeof val === "string"
    ? acc
    : acc + length(val) + reduce(reducerNumber, 0, val) - 1;

const reducer = (acc, value) =>
  typeof value === "string"
    ? {
        index: propIndex(acc) + 1,
        tab: [...propTab(acc), { word: value, index: propIndex(acc) }],
      }
    : {
        index: propIndex(acc) + reducerNumber(1, value),
        tab: [
          ...propTab(acc),
          propTab(reduce(reducer, { index: propIndex(acc), tab: [] }, value)),
        ],
      };

const splitOrNot = (tab) =>
  tab.length >= 3 ? splitAt(3, tab) : splitAt(1, tab);

const curriedsplitOrNot = curry(splitOrNot);

const formatString = pipe(
  split("*"),
  curriedsplitOrNot,
  curriedMapSplit(" / "),
  curriedSplitMyWords(" / "),
  reduce(reducer, { index: 0, tab: [] }),
  propTab
);

const fillNewTab = (acc, val) => [...acc, formatString(val)];

export const newTabWorlds = pipe(split("\n"), reduce(fillNewTab, []), randomChangeArray);
