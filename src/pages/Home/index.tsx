import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import SVGIcon from '../../components/SVGIcon'
import Typing from '../../components/Typing'
import { IRequest } from '../../model/request'
import { RootState } from '../../redux'
import { fetchProfile } from '../../redux/ducks/profile'
import { HomeStyled, ContentJustifyStyled, MessageReceivedStyled } from './styles'

const Home: React.FC = () => {
  const [typing, setTyping] = useState(false)
  const dispatch = useDispatch()

  const response1 = useSelector<RootState, IRequest | undefined>((state) => {
    return state.profileReducer.request
  })

  function start(): void {
    setTyping(true)
    setTimeout(() => {
      dispatch(fetchProfile({ id: null, answers: {}, context: 'suitability' }))
    }, 1000)
  }
  return (
    <HomeStyled>
      <div>
        <SVGIcon name="logo" width="230px" />
      </div>
      <div>
        {!response1 ? (
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
            {response1.messages?.map((item) => {
              return (
                <MessageReceivedStyled>
                  <p>{item.value}</p>
                </MessageReceivedStyled>
              )
            })}
          </div>
        )}
      </div>
    </HomeStyled>
  )
}

export default Home
