import { selector } from "recoil"

import { counterState } from "./atoms"

export const differenceToLimitState = selector({
  key: "differenceToLimitState",
  get: ({ get }) => {
    const counter = get(counterState)

    return `${10 - counter} away from limit!`
  }
})
