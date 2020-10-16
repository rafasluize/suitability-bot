import { Dispatch } from 'redux'
import axios from 'axios'
import { IRequest, IResponse } from '../../model/api'

type FetchProfileAction = {
  type: 'FETCH_PROFILE'
  response: IResponse
}

export interface IResponseValues {
  response?: IResponse
}

export const profileReducer = (
  state: IResponseValues = {},
  action: FetchProfileAction
): IResponseValues => {
  switch (action.type) {
    case 'FETCH_PROFILE': {
      return { ...state, response: action.response }
    }
    default:
      return { ...state }
  }
}

export const fetchProfile = (data: IRequest) => (dispatch: Dispatch<FetchProfileAction>): void => {
  axios
    .post('https://api.dev.oiwarren.com/api/v2/conversation/message', data)
    .then((res) => {
      dispatch({
        type: 'FETCH_PROFILE',
        response: res.data
      })
    })
    .catch((err) => {
      console.error('erro', err)
    })
}
