import React from 'react'
import { useGetPlayersApi } from '../../features/home/hooks/use-get-player'
import Column from '../toolkit/column'
import Flex from '../toolkit/flex'

export interface StaticsScreenProps {}
const StaticsScreen: React.FC<StaticsScreenProps> = () => {
  const { data, isLoading } = useGetPlayersApi()
  return (
    <div className="p-4">
      <h1>Gols</h1>
      <Flex className="justify-between">
        <p>Jogador</p>
        <p>Gols</p>
      </Flex>
      {isLoading ? (
        <>Carregando</>
      ) : (
        data?.map((player, index) => (
          <Flex className="gap-4">
            <Flex>
              <p className='self-center'>{index}</p>
            </Flex>
            <img className="w-6" src={player.time.escudo}></img>
            <Column className="grow">
              <p>{player.atleta.nome_popular}</p>
              <Flex>
                <img className="w-3" src={player.time.escudo}></img>
                <p>{player.time.nome_popular}</p>
              </Flex>
            </Column>
            <Flex className="">
              <p className='self-center'>{player.gols}</p>
            </Flex>
          </Flex>
        ))
      )}
    </div>
  )
}

export default StaticsScreen
