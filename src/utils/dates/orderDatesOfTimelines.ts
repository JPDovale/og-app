import { ITimeEvent } from '@hooks/useTimeLine/types/ITimeLine'
import lodash from 'lodash'

export function orderDatesOfTimelines(elements: ITimeEvent[]): ITimeEvent[] {
  const elementsOrd = lodash.sortBy(elements, (object) => {
    return object.happened.timestamp
  })

  return elementsOrd === undefined ? [] : elementsOrd
}
