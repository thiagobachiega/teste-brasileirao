import axios from 'axios'
import { GameDetails } from '../types/game-details'


const GetApi = async () => {
  const keyTeste = 'test_cda89f2f16e491fdd83371d3dc45c3'
  const keyLive = 'live_8b73e356395ca4764b2b899ee53653'

  try {
    const response = await axios.get<GameDetails>(
      'https://api.api-futebol.com.br/v1/campeonatos/14/rodadas/1',
      {
        headers: {
          Authorization: `Bearer ${keyLive}`,
        },
      }
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default GetApi
