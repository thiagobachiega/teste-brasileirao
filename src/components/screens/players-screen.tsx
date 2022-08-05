import React from 'react'
import { useGetPlayersApi } from '../../features/home/hooks/use-get-player'
import Column from '../toolkit/column'
import Flex from '../toolkit/flex'

export interface PlayersScreenProps {}
const PlayersScreen: React.FC<PlayersScreenProps> = () => {
  const { data, isLoading } = useGetPlayersApi()

  return (
    <Flex className="gap-4 p-4 justify-center">
      {isLoading ? (
        <div>Caregando...</div>
      ) : (
        data?.map((player) => (
          <Column className="w-1/6 bg-white rounded-lg">
            <div className="h-24">
              <img src="#"></img>
            </div>
            <Column>
              {player.atleta.nome_popular}
              <p className="text-sm text-gray-400">Atacante</p>
              <Flex>
                <img className="w-3" src={player.time.escudo}></img>
                <div>
                  <p className="text-sm text-gray-400">
                    {player.time.nome_popular}
                  </p>
                </div>
              </Flex>
            </Column>
          </Column>
        ))
      )}
    </Flex>
  )
}
export default PlayersScreen
