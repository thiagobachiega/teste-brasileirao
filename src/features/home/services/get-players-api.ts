import axios from 'axios'
import { Player } from '../types/player'

const GetPlayersApi = async () => {
  const keyTeste = 'test_cda89f2f16e491fdd83371d3dc45c3'
  const keyLive = 'live_8b73e356395ca4764b2b899ee53653'

  try {
    const response = await axios.get<Player[]>(
      'https://api.api-futebol.com.br/v1/campeonatos/14/artilharia',
      {
        headers: {
          Authorization: `Bearer ${keyTeste}`,
        },
      }
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default GetPlayersApi
