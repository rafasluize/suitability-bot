import { Dispatch } from 'redux'
import axios from 'axios'
import { IRequest } from '../../model/request'

type FetchProfileAction = {
  type: 'FETCH_PROFILE'
  request: IRequest
}

export interface IRequestValues {
  request?: IRequest
}

export const profileReducer = (
  state: IRequestValues = {},
  action: FetchProfileAction
): IRequestValues => {
  switch (action.type) {
    case 'FETCH_PROFILE': {
      return { ...state, request: action.request }
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
        request: res.data
      })
    })
    .catch((err) => {
      console.error('erro', err)
    })
}
