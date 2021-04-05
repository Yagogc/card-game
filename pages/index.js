import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Button } from '../components/Button'
import { Column } from '../components/Column'
import { Controls } from '../components/Controls'
import { Header } from '../components/Header'
import { InputNumber } from '../components/InputNumber'
import { Stack } from '../components/Stack'
import { useCardStore } from '../state/client/store'

export default function Home() {
  const [drawNumber, setDrawNumber] = useState(1)
  const deck = useCardStore((state) => state.deck)
  const hand = useCardStore((state) => state.hand)
  const isSaved = useCardStore((state) => state.isSaved)
  const draw = useCardStore((state) => state.draw)
  const save = useCardStore((state) => state.save)
  const reset = useCardStore((state) => state.reset)
  const shuffle = useCardStore((state) => state.shuffle)
  const sort = useCardStore((state) => state.sort)

  useEffect(() => {
    if (deck.length < drawNumber) {
      setDrawNumber(deck.length)
    }
  }, [deck, setDrawNumber])

  return (
    <div className="container px-4 mx-auto">
      <Head>
        <title>Card Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex justify-around">
        <Column name="Deck">
          <Button handleClick={shuffle} disabled={deck.length === 0}>
            Shuffle
          </Button>
          <Stack stack={deck} />
        </Column>
        <Column name="Controls">
          <Controls name="Save Game">
            <div className="flex flex-wrap items-center content-center gap-2">
              <Button handleClick={save}>Save</Button>
              <Button handleClick={reset} disabled={!isSaved}>
                Reset
              </Button>
            </div>
          </Controls>
          <Controls name="Draw Cards">
            <div className="flex flex-col items-center content-center gap-2">
              <InputNumber
                drawNumber={drawNumber}
                setDrawNumber={setDrawNumber}
                deckLenght={deck.length}
                disabled={deck.length === 0}
              />
              <Button
                handleClick={() => draw(drawNumber)}
                disabled={deck.length === 0 || drawNumber === 0}
              >
                Draw
              </Button>
            </div>
          </Controls>
        </Column>
        <Column name="Hand">
          <Button handleClick={sort} disabled={hand.length === 0}>
            Sort
          </Button>
          <Stack stack={hand} />
        </Column>
      </main>
    </div>
  )
}
