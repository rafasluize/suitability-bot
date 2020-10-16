import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import SVGIcon from '../../components/SVGIcon'
import Typing from '../../components/Typing'
import { IResponse } from '../../model/api'
import { RootState } from '../../redux'
import { fetchProfile } from '../../redux/ducks/profile'
import { HomeStyled, ContentJustifyStyled, MessageStyled } from './styles'
import InputText from '../../components/InputText'
import ButtonSubmit from '../../components/ButtonSubmit'

const Home: React.FC = () => {
  const [typing, setTyping] = useState(false)
  const [messageList, setMessageList] = useState([] as any)
  const [answers, setAnswers] = useState({})
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const response = useSelector<RootState, IResponse | undefined>((state) => {
    return state.profileReducer.response
  })

  function start(): void {
    setTyping(true)
    setTimeout(() => {
      dispatch(fetchProfile({ id: null, answers: {}, context: 'suitability' }))
    }, 1000)
  }

  function onSend(e: FormEvent<HTMLInputElement | HTMLFormElement>): void {
    e.preventDefault()
    if (value) {
      const messages: Message[] = messageList
      messages.push({ message: value, type: 'sent' })
      setMessageList(messages)
      if (response) {
        setAnswers({ ...answers, [response.id]: value })
      }
    }
  }
  function handleChange(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    const target = e.target as HTMLTextAreaElement | HTMLInputElement
    setValue(target.value)
  }

  type Message = {
    message: string
    type: string
  }
  useEffect(() => {
    if (response) {
      const messages: Message[] = [...messageList]
      response.messages?.forEach((item) => messages.push({ message: item.value, type: 'receive' }))
      setMessageList(messages)
    }
    setTyping(false)
  }, [response])

  useEffect(() => {
    if (response) {
      dispatch(
        fetchProfile({
          id: response!.id,
          answers,
          context: 'suitability'
        })
      )
      setTyping(true)
      setValue('')
    }
  }, [answers])

  return (
    <HomeStyled>
      <div>
        <SVGIcon name="logo" width="230px" />
      </div>
      <div>
        {!response ? (
          <ContentJustifyStyled>
            {!typing ? (
              <>
                <h2>Comece a investir agora</h2>
                <p>Primeiro vamos mapear o seu perfil de investidor :)</p>
                <Button text="Vamos lá!" onClick={start} type="primary" />
              </>
            ) : (
              <Typing />
            )}
          </ContentJustifyStyled>
        ) : (
          <div className="chat">
            {messageList.map((item: Message) => (
              <MessageStyled type={item.type} key={item.message}>
                <p>{item.message}</p>
              </MessageStyled>
            ))}

            {typing && <Typing />}

            <div className="response">
              <form onSubmit={onSend}>
                {response.inputs && response.inputs?.length > 0 && (
                  <InputText name={response.id} onChange={(e) => handleChange(e)} value={value} />
                )}
                <ButtonSubmit text="Continuar" type="primary" disabled={!value} />
              </form>
            </div>
          </div>
        )}
      </div>
    </HomeStyled>
  )
}

export default Home
