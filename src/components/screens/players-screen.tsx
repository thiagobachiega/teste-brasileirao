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
          <Column className="w-1/6 bg-white rounded-lg justify-between">
            <div>
              <div className="h-24 overflow-hidden">
                <img
                  className="h-24 w-full rounded-lg"
                  src="https://yt3.ggpht.com/qB-nQZG1GLBnnMRmaFBMc_BRM96i9RaDyoxvxs6WRuQE6UHWO1IsqqDTgHivNFv2-Qmp_NCP5A=s900-c-k-c0x00ffffff-no-rj"
                ></img>
              </div>
              <div>
                {player.atleta.nome_popular}
                <p className="text-sm text-gray-400">Atacante</p>
              </div>
            </div>
            <Flex className="h-8 gap-2">
              <img className="w-3" src={player.time.escudo}></img>
              <p className="text-sm text-gray-400 self-center">
                {player.time.nome_popular}
              </p>
            </Flex>
          </Column>
        ))
      )}
    </Flex>
  )
}
export default PlayersScreen
