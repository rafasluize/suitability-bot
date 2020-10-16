export interface IRequest {
  id: string | null
  answers: object
  context: string
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

  context: string
}
