import type { NextPage } from 'next'
import React from 'react'
import ClassificationScreen from '../components/screens/classification-screen'
import GamesScreen from '../components/screens/games-screen'
import NewsScreen from '../components/screens/news-screen'
import PlayersScreen from '../components/screens/players-screen'
import StaticsScreen from '../components/screens/statics-screen'
import DefaultHeader from '../components/templates/default-header'

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = React.useState<string>('partidas')

  const renderActiveTab = (activeTab: string) => {
    switch (activeTab) {
      case 'partidas':
        return <GamesScreen />
      case 'noticias':
        return <NewsScreen />
      case 'classificacao':
        return <ClassificationScreen />
      case 'estatisticas':
        return <StaticsScreen />
      case 'jogadores':
        return <PlayersScreen />
      default:
        break
    }
  }

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <DefaultHeader handleActiveTab={handleActiveTab}>
      <div className="bg-gray-100">
        {activeTab ? renderActiveTab(activeTab) : <div>Carregando...</div>}
      </div>
    </DefaultHeader>
  )
}

export default Home
