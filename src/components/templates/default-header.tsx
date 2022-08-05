import React from 'react'
import Column from '../toolkit/column'
import Flex from '../toolkit/flex'

export interface DefaultHeaderProps {
  children: React.ReactNode
  handleActiveTab: (tab: string) => void
}
const DefaultHeader: React.FC<DefaultHeaderProps> = ({children, handleActiveTab}) => {

   const [activeTab, setActiveTab] = React.useState('partidas')

   const tabChange = (tab: string) => {
    setActiveTab(tab)
    handleActiveTab(tab)
   }

  return (
    <Column className="bg-green-800 rounded-tl-lg rounded-tr-lg pt-4 max-w-fit m-auto">
      <Flex className="gap-6 px-4">
        <img
          src="https://vetores.org/d/selecao-brasileira-de-futebol.svg"
          width="24"
        />
        <h1 className="text-2xl text-white self-center">Brasileirão Série A</h1>
      </Flex>
      <div className="text-white pt-2">
        <ul className="flex text-xs">
          <li
            onClick={() => {
              tabChange('partidas')
            }}
            className={
              activeTab === 'partidas'
                ? 'border-b-2 hover:bg-green-900 cursor-pointer py-3 px-8 border-white'
                : 'hover:bg-green-900 cursor-pointer py-3 px-8'
            }
          >
            PARTIDAS
          </li>
          <li
            onClick={() => {
              tabChange('noticias')
            }}
            className={
              activeTab === 'noticias'
                ? 'border-b-2 hover:bg-green-900 cursor-pointer py-3 px-8 border-white'
                : 'hover:bg-green-900 cursor-pointer py-3 px-8'
            }
          >
            NOTÍCIAS
          </li>
          <li
            onClick={() => {
              tabChange('classificacao')
            }}
            className={
              activeTab === 'classificacao'
                ? 'border-b-2 hover:bg-green-900 cursor-pointer py-3 px-8 border-white'
                : 'hover:bg-green-900 cursor-pointer py-3 px-8'
            }
          >
            CLASSIFICAÇÃO
          </li>
          <li
            onClick={() => {
              tabChange('estatisticas')
            }}
            className={
              activeTab === 'estatisticas'
                ? 'border-b-2 hover:bg-green-900 cursor-pointer py-3 px-8 border-white'
                : 'hover:bg-green-900 cursor-pointer py-3 px-8'
            }
          >
            ESTATÍSTICAS
          </li>
          <li
            onClick={() => {
              tabChange('jogadores')
            }}
            className={
              activeTab === 'jogadores'
                ? 'border-b-2 hover:bg-green-900 cursor-pointer py-3 px-8 border-white'
                : 'hover:bg-green-900 cursor-pointer py-3 px-8'
            }
          >
            JOGADORES
          </li>
        </ul>
      </div>
      {children}
    </Column>
  )
}

export default DefaultHeader
