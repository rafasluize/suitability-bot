import { string } from 'prop-types'

export interface IRequest {
  id: string | null
  answers: object
  context: string
}

export interface IRequestFinish {
  answers: object
}

export interface IResponse {
  id: string
  answers: object
  messages?: [
    {
      type: string
      value: string
    }
  ]
  inputs?: [
    {
      type: string
      mask: string
    }
  ]
  buttons?: [
    {
      value: string
      label: {
        title: string
      }
    }
  ]

  context: string
}

export interface IResponseFinish {
  user: {
    name: string
    investmentProfile: {
      riskToleranceProfile: string
    }
  }
}
