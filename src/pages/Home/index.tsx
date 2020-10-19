import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatToBRL } from 'brazilian-values'
import Button from '../../components/Button'
import SVGIcon from '../../components/SVGIcon'
import Typing from '../../components/Typing'
import { IResponse, IResponseFinish } from '../../model/api'
import { RootState } from '../../redux'
import { fetchProfile } from '../../redux/ducks/profile'
import { HomeStyled, ContentJustifyStyled, MessageStyled } from './styles'
import InputText from '../../components/InputText'
import ButtonSubmit from '../../components/ButtonSubmit'
import { suitabilityFinish } from '../../redux/ducks/finish'

const Home: React.FC = () => {
  const [typing, setTyping] = useState(false)
  const [messageList, setMessageList] = useState([] as any)
  const [answers, setAnswers] = useState({})
  const [value, setValue] = useState('')
  const [labelButton, setLabelButton] = useState('')
  const dispatch = useDispatch()

  const response = useSelector<RootState, IResponse | undefined>((state) => {
    return state.profileReducer.response
  })

  const finish = useSelector<RootState, IResponseFinish | undefined>((state) => {
    return state.finishReducer.finish
  })

  type Message = {
    message: string
    type: string
  }
  type Button = {
    value: string
    label: {
      title: string
    }
  }

  function start(): void {
    setTyping(true)
    setTimeout(() => {
      dispatch(fetchProfile({ id: null, answers: {}, context: 'suitability' }))
    }, 1000)
  }

  function onSend(e?: FormEvent<HTMLInputElement | HTMLFormElement | undefined>): void {
    if (e) {
      e.preventDefault()
    }
    if (labelButton && value) {
      const messages: Message[] = messageList
      messages.push({ message: labelButton, type: 'sent' })
      setMessageList(messages)
      if (response) {
        setAnswers({ ...answers, [response.id]: value })
      }
    } else {
      const messages: Message[] = messageList
      if (response?.inputs && response?.inputs[0].mask === 'currency') {
        messages.push({ message: formatToBRL(value), type: 'sent' })
      } else {
        messages.push({ message: value, type: 'sent' })
      }
      setMessageList(messages)
      if (response) {
        setAnswers({ ...answers, [response.id]: value })
      }
    }
  }

  function handleChange(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    const target = e.target as HTMLTextAreaElement | HTMLInputElement
    if (response?.inputs && response?.inputs[0].type === 'number') {
      if (/^\d*$/.test(target.value)) {
        setValue(target.value)
      }
    } else {
      setValue(target.value)
    }
  }

  function onChangeButton(val: string, label: string): void {
    setLabelButton(label)
    setValue(val)
  }

  useEffect(() => {
    if (response) {
      const messages: Message[] = [...messageList]
      response.messages?.forEach((item) => messages.push({ message: item.value, type: 'receive' }))
      setMessageList(messages)
      if (response.id === 'final') {
        dispatch(
          suitabilityFinish({
            answers
          })
        )
        setTyping(true)
      } else {
        setTyping(false)
      }
    }
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
      setLabelButton('')
    }
  }, [answers])

  useEffect(() => {
    if (labelButton) {
      onSend()
    }
  }, [labelButton])

  useEffect(() => {
    if (finish) {
      const messages: Message[] = [...messageList]
      messages.push({
        message: finish.user.investmentProfile.riskToleranceProfile,
        type: 'receive'
      })
      messages.push({
        message: `Legal, ${finish.user.name}! Agora que já sabemos seu perfil, corre lá no seu email e a gente continua de lá :)`,
        type: 'receive'
      })
      setMessageList(messages)
      setTyping(false)
    }
  }, [finish])

  useEffect(() => {
    if (response && messageList) {
      setTimeout(() => {
        const objDiv: any = document.querySelector('.messages')
        objDiv.scrollTop = objDiv.scrollHeight
      }, 300)
    }
  }, [messageList])

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
            <div className="messages">
              {messageList.map((item: Message, index: number) => (
                <MessageStyled type={item.type} key={item.message + index}>
                  <p>{item.message}</p>
                </MessageStyled>
              ))}
            </div>

            {typing && <Typing />}

            <div className="response">
              {response.inputs && response.inputs?.length > 0 && (
                <form onSubmit={onSend}>
                  <InputText
                    name={response.id}
                    onChange={(e) => handleChange(e)}
                    value={value}
                    autoFocus
                    maxLength={100}
                    type={response.inputs && response.inputs[0].mask === 'email' ? 'email' : 'text'}
                  />
                  <ButtonSubmit text="Continuar" type="primary" disabled={!value} />
                </form>
              )}
              {response.buttons && response.buttons?.length > 0 && (
                <div className="buttons">
                  {response.buttons.map((item: Button) => (
                    <Button
                      key={item.value}
                      text={item.label.title}
                      type="primary"
                      onClick={() => onChangeButton(item.value, item.label.title)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </HomeStyled>
  )
}

export default Home
