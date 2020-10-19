import { Dispatch } from 'redux'
import axios from 'axios'
import { IRequestFinish, IResponseFinish } from '../../model/api'

type FetchProfileAction = {
  type: 'SUITABILITY_FINISH'
  finish: IResponseFinish
}

export interface IResponseValues {
  finish?: IResponseFinish
}

export const finishReducer = (
  state: IResponseValues = {},
  action: FetchProfileAction
): IResponseValues => {
  switch (action.type) {
    case 'SUITABILITY_FINISH': {
      return { ...state, finish: action.finish }
    }
    default:
      return { ...state }
  }
}

export const suitabilityFinish = (data: IRequestFinish) => (
  dispatch: Dispatch<FetchProfileAction>
): void => {
  axios
    .post('https://api.dev.oiwarren.com/api/v2/suitability/finish', data)
    .then((res) => {
      dispatch({
        type: 'SUITABILITY_FINISH',
        finish: res.data
      })
    })
    .catch((err) => {
      console.error('erro', err)
    })
}
