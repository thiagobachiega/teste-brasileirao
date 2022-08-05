import React from 'react'
import { useGetApi } from '../../features/home/hooks/use-get-api'
import Column from '../toolkit/column'
import Flex from '../toolkit/flex'

export interface GamesScreenProps {}
const GamesScreen = () => {
  const { data, isLoading } = useGetApi()

  return (
    <div>
      <div className="grid grid-cols-2 bg-gray-100 gap-[2px] border-2">
        {isLoading ? (
          <div>Carregando</div>
        ) : (
          data?.partidas?.map((partida) => (
            <Flex
              className="p-2 bg-white hover:bg-gray-200 cursor-pointer"
            >
              <Column className="pr-2 py-8 border-r-2 border-gray-100">
                <Flex className="gap-4">
                  <img className="w-5" src={partida.time_mandante.escudo}></img>
                  <Flex className="w-40 justify-between">
                    <p>{partida.time_mandante.nome_popular}</p>
                    <p>{partida.placar_mandante}</p>
                  </Flex>
                </Flex>
                <Flex className="gap-4">
                  <img
                    className="w-5"
                    src={partida.time_visitante.escudo}
                  ></img>
                  <Flex className="w-40 justify-between">
                    <p>{partida.time_visitante.nome_popular}</p>
                    <p>{partida.placar_visitante}</p>
                  </Flex>
                </Flex>
              </Column>
              <Column className="text-center justify-center grow">
                <p>{partida.status}</p>
                <p>{partida.data_realizacao}</p>
              </Column>
            </Flex>
          ))
        )}
      </div>
    </div>
  )
}

export default GamesScreen
