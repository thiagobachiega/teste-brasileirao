import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'
import { useGetClassificationApi } from '../../features/home/hooks/use-get-classification-api'
import Flex from '../toolkit/flex'

export interface ClassificationScreenProps {}
const ClassificationScreen: React.FC<ClassificationScreenProps> = () => {
  const { data, isLoading } = useGetClassificationApi()

  return (
    <div>
      <div className="py-2 mx-2 px-4 text-sm border-b-2">
        <p>Temporada</p>
        <Flex>
          <button className="flex text-blue-700 font-medium">
            2022
            <ChevronDownIcon className="w-5" />
          </button>
        </Flex>
      </div>
      <div className='p-2'>
        <table className="w-full">
          <tr className="text-sm">
            <th className="font-normal w-2/4 text-start pl-4">Clube</th>
            <th className="font-normal">Pts</th>
            <th className="font-normal">Pj</th>
            <th className="font-normal">VIT</th>
            <th className="font-normal">E</th>
            <th className="font-normal">DER</th>
            <th className="font-normal">GP</th>
            <th className="font-normal">GC</th>
            <th className="font-normal">SG</th>
            <th className="font-normal">Últimas cinco</th>
          </tr>
          {isLoading
            ? null
            : data?.map((team) => (
                <tr className="space-y-4">
                  <td className="flex gap-4 pl-4">
                    <span className='w-5'>{team.posicao}</span>
                    <img className="w-6" src={team.time.escudo}></img>
                    <span>{team.time.nome_popular}</span>
                  </td>
                  <td>{team.pontos}</td>
                  <td>{team.jogos}</td>
                  <td>{team.vitorias}</td>
                  <td>{team.empates}</td>
                  <td>{team.derrotas}</td>
                  <td>{team.gols_pro}</td>
                  <td>{team.gols_contra}</td>
                  <td>{team.saldo_gols}</td>
                  <td className="flex justify-center">{team.ultimos_jogos}</td>
                </tr>
              ))}
        </table>
      </div>
    </div>
  )
}

export default ClassificationScreen
