import { object } from 'prop-types'

export interface IRequest {
  id: string | null
  answers: object
  messages?: [
    {
      type: string
      value: string
    }
  ]
  context: string
}
