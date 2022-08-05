import Link from 'next/link'
import React from 'react'
import Flex from '../toolkit/flex'

export interface NewsScreenProps {}
const NewsScreen: React.FC<NewsScreenProps> = () => {
  return (
    <div>
      <div className="m-4 rounded-md border-2 border-gray-200 p-4">
        <Flex className='justify-between'>
          <div>
            <Link href={'#'}>
              <a className='text-blue-700'>Vasco compra Eguinaldo e acerta contrato de cinco anos</a>
            </Link>
            <p className='text-xs text-gray-400'>Globo Esporte - 1 hora atrás</p>
          </div>
          <div>
            <img className='rounded-md' width={120} src="data:image/jpeg;base64,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"></img>
          </div>
        </Flex>
      </div>
      <div className="m-4 rounded-md border-2 border-gray-200 p-4">
        <Flex className='justify-between'>
          <div>
            <Link href={'#'}>
              <a className='text-blue-700'>Vasco compra Eguinaldo e acerta contrato de cinco anos</a>
            </Link>
            <p className='text-xs text-gray-400'>Globo Esporte - 1 hora atrás</p>
          </div>
          <div>
            <img className='rounded-md' width={120} src="data:image/jpeg;base64,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"></img>
          </div>
        </Flex>
      </div>
      <div className="m-4 rounded-md border-2 border-gray-200 p-4">
        <Flex className='justify-between'>
          <div>
            <Link href={'#'}>
              <a className='text-blue-700'>Vasco compra Eguinaldo e acerta contrato de cinco anos</a>
            </Link>
            <p className='text-xs text-gray-400'>Globo Esporte - 1 hora atrás</p>
          </div>
          <div>
            <img className='rounded-md' width={120} src="data:image/jpeg;base64,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"></img>
          </div>
        </Flex>
      </div>
      <div className="m-4 rounded-md border-2 border-gray-200 p-4">
        <Flex className='justify-between'>
          <div>
            <Link href={'#'}>
              <a className='text-blue-700'>Vasco compra Eguinaldo e acerta contrato de cinco anos</a>
            </Link>
            <p className='text-xs text-gray-400'>Globo Esporte - 1 hora atrás</p>
          </div>
          <div>
            <img className='rounded-md' width={120} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAE0AiQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgcBAP/EADgQAAIBAgUCBAUCBAUFAAAAAAECAwQRAAUSITETQQYiUWEUMnGBkSOhFWKxwTNSU9HhJEJVovD/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQACAgIBBQEBAAAAAAAAAAAAAQIRAyExBBITQVFhBf/aAAwDAQACEQMRAD8A5TGt749Vd7Yt0LvZuOMewxs7nSCbc4oCsDk2xJfpgqOCYakCar7nbgYjOLsEUDy+nfBYEqSmMyuQyrb174hJCYmIcb9sF0E8MK6WU6wb3x4T1ZjJMhEZ4wrACRCTvsPXB9Blj16TTa2ipYB+rP0ywU9lAuAWO21x68YOoKXKqOn+Nzd3qJHF4MvifTqG/mlcbqv8q7nY3A5pGZVGcVtJBLmFPRwdURQxKCkMGogeVFHvzye5wnL0ikvbCIcjoqqMtR1dU/TkjEqyQKpCHVqcDUb208dtQ3O+KM6zRRTrl1G0YpYXbpiKML1ADsXPLMRuSfsAMbWg8E12VV9LmkWddYxMraYKcq7jfY3JAU2IJPYHY7Yz/iGPKZc1grBRJTrVFNdM+qK6OuoOttx+Dv27Yh2uSlT4Ms+gm4BAtwe2IAWW98Ps/wApoaAxmhedoZUWSISspKqbgqbckFSL8cfZbTwROD1CbW23xopaM2gMqW+UY9ELEbqRg2UKqroG6jfA3VYtzh2AOgK6ha/1xCMEPe1wMGTGPUNJ2PJtj6QoikQ7g97YLADK9ST9Mc9jiXQPriW/lKncY90t6jABbJSMsjFVACgXJOLo1SJramF1BJXHscdSYo9RUq9z7gcY8EW15CVUg/e3GIsoMWWaqjniAChVFjwbDAsUaRa777WBPri+k8sJFQhFhfVxfDDMcpFPKEjYSFkDnQfl9sKwoVNTmlMUhG7i4uP3x5I5lurEkKdrcYJjlaodXqweinlO3AwbBBDJqEafp8gE7nBYUJTAoi1MtyeMWQUnxssUXlQI6uzqPMoB5A7nDGpiimq1VV0p3twBhmMk6GXGamjmlq8xYQ0FPGLl1BBaRv5drD1545HXI1fs1tdUeJM5ipVpImhyRYj5HZY2n9NRFyALhRY3IUngi+d8UUcoylTmTLJVRnyvTt8nvwP9sMYqnNaKiGXNFLmUVIOkJaeoljBI9xtbsNu2FVbRx9amjqYq2llqCSVq5C6oO7BrktziZSVWKmmZiqeSZKYyk3EIVR6KCf7k+974jHE6lQykA8YLzphQv0lgeWMANBLKNEiqd9LqL/WxNxfvilM2pocvkdqaOqqakNFGHNxANrtb/Nvt+dsOMtDktlQDqGF9ieMUGA3D3up7Y+o+rT1CpIC0TNpdSbkX4Ixe6aZSqMLE7Xxadk0CyKBsV2AxfHl00lL8SrJoJ2F98WzwokDBiTMDb2tiDo8USxRyFltdh6HAIX1KsjgEAW9MR/P4wU0ci2aRG0twWHOPfJ64YD3NcinyNBVUrJWU01hG7GwA5ucAjiI1oZmkVlD9UKinsLXw48Jx5zXZbLRyQCXKip/UnOm222jux22t3xk4VrqqrV6YhpY91jYgG/tfk4yqXDLuIwSQCRknYkofzg3Lc06NYskjCyqQNr4W1WX1+XoWqoCgHk1Agi/2wPAwVSH3BxfaibH2Y5hSVspjp06aG19uW7nC2uzmniCUdHB1ZAwVpWJG/oAP6nEsmShatiOYyypAzWtEoLE/kemA83o1y7OJ3h0tEJmaMi9hve32viXS0Pb2aHK6eJKypfN49FLQp1Jlf/vJ+RPck9vQHtjd+EZqLL45PFPimoihq6qLRQ07qWaKDm4RQT5udhx9cZbJxS5lBFBDMoeRQ5r6uLqmNrkhUQEC41NueBbFHiLKKvw3MlXW1ZroKg2Sp0lSWtezAk2P3OJlJpWkUkvpta7M/wCPGnly2ZZqHWy9WNmREYWuvAxzrxbFU5l4jrGWZZI0daWMLbayA2Fu12J+t8JZc3roK6SsyqR6bqC0yIToYerjj2vjV+FjSS51FR1FEoinJDryUZlvsfVRYX9V98O7RK0zITZjmqr/AA1qiTpt5WjNvMPc2uRt34+2GtH4HzuokAp/h2pwpkeoEv6aEcqf5vbb3thx4xhXK6qKKrUfEoWVKhRtOgOz/Xsf77YX5ZmdZRMk0NFLPBNMS5DaVYC2o/W323HoMEWuCpfbLc58N1WW5VBmGvrwkiN5lvsw247L2B/4wkZLkHsRzjoue19JmPhPM6agkdUj6TsZBa46i7DHOg14tIIspxUarRDdk1qESEqFs/8Am9cVM0m8jNviF18t++J1CoI7Kd/XFiJ1OZyVccaSgWi+Wy4G6g9MeEgJpviP6eEBvajNY6mKVjOtNrI1sUuukcCw/wDvbCXxDllDk+XCugkUvUL0oY1uE1MN2HsBqsO23sMUUccsUYWSYTMUV9YGxBAP98RzynmzZoVmqUVIIiI4h85Ync2PPC/t9cJvWwHHh5jJ4EzGbN5+orGaKDqH5tKBlA9SHsB+MZKEQgkq9iTw2NDmjLl+V5FTVNKOhRVMuzr858usn6kk4MpPA0NZTpUQ5irRuLqbDjBFpjZmInWmlDxxpKF3Ia1v+MdCyzw1lcGRNWeKunBLXhWgp5n0uibee3Oo3t7fXiGR+FMsyKrGbZpViaClIIjIGlnJ8ur25P2GEvjgZjneaRZpHXrDVrF0yhdlIFydiOOf6YGldh3OqGMUNG1osvX4alVP8RwAWB4027W3vuNxbuMaSkoEzvwpPltXJ8TEQWhZvKQyG6jb0tbHKcvyatWqlqq2n68nzdYSBiD3vfcfXtbDXJs6z7IxLVUuYwSJAvVejeL9LSObHkd/Tj2xLdsajqzOUFfUVtYsaEpSAFmjTa63BsT7sBt7Y2uTvDT5jTyk+azMLHvaw/c/gYXUmTwPRz5pRg3ral5I4/8ATj3On7E298V00gjlRpGAVWB3NsN8kjjxFk1dm/jiqaulUUTalhsP8NRYgW7XJJv3+1sL4qd8rqHp2uU1kMCdj22/GNXVTU0viBauAgySRdOQg3B0u+k/gjFOYUK1j1GsWdH1KR6d8JqwFWdCnofC9PDMGC18yrrv8oUMdX2bTtjICGQXVl3GxtjUeK6CpiyynWpUr8HM0TITcWcXDD28p/IxnYZOQTfDjwAP0X0sAmPEhlZdRU6Btg7WG8i2ucR+J6VI8LJyecNtgKpY5FO+K98FyydVyQtvbE9En+niwCs8qxSZPQdFpOvLSpGxIsFsLG1vT5fqCcEeAqAF58xq/mlBjjZ+dyNTE+9/6+uLs8oI6qly+GSwW5diigMw82xP35wbTKNUcI2QaUsPTbEMAzMQ2a1UdHEY7SvUFGlF0JIBX6fLz2vgCjgmiFMJKhkiIu0aMbpuRYj6j9xh3n9LHl1O/QveCqj0k88OMK4aj/rGqdC7R/J22BOH4pNKSLjJIlWGknmkonM70U6BZNRNtiCD9QQDhT4krcyoc2Q1lAKeKe0q6muWjJtfk2Pff1B742PhqoTM66VJaeNUhhaYgD5tPb98BTxweJ80b+JwB1STQoDEWAVjyLenGMs7eHIsc0ZzyxbSRTE7LShS4WIi9l3LD/b3wukqnrVFFvNTqCOlCLFg21yfX0xppYYREgKFndn3c3A0A9u/HfGer6ZoqoSJUTRxxySFI4To3jvdieSTb7ehwdtjUqJxZfU5LHHRT1Tx0f6kkOkgkg/MhJHZri4tfY4VmjpFfqSq5ZibM1z298a3xDqq/BWXVz6Udap0REWwVGXZftoG+Mqjs0iQsbqF2/8AYYsBrR095YXpMx6aGyrqCm+1t7/fGjy9njSb4meKaVjytuOwsMIaBVTLECgDS7kfYD+++GmWSOKSZixZkYi572ZsMRf4m01/gavkM+uohVSqkWJUSRmw2B2APrzjl0EdTLIqRwysT2CHHasupUrcv0TG4lQFhba9y23pvfB1NldHSyI8UKhrEE25xcXjULk9kSk06OHfC1iTjRTS3BtspxpIMmnq8remljKSx+eMhfn9sbFygzScJGqj0GGuRhTVyFlB0xkjHJ1c3jzLEvxnoYeljk6fytnHqrKszEwaLLnVbg2ti3o5z/4846dVuWhR+Cb4X9Q45l103wjrj/Pxvln/2Q=="></img>
          </div>
        </Flex>
      </div>
    </div>
  )
}

export default NewsScreen
