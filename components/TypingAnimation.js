import { useState, useEffect } from "react";

export default function TypingAnimation({ texts }) {
  const [index, setIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    let currentText = typedText
    let currentIndex = currentText.length

    let randomIndex = 0
    let matchingString = ""

    const typeText = () => {
      if (currentText != texts[index]) {
        currentText += texts[index][currentIndex]
        setTypedText(currentText)
        currentIndex += 1
        setTimeout(typeText, 100)
      } else {
        prepareNextText()
      }
    }

    const prepareNextText = () => {
      while (randomIndex == index) {
        randomIndex = Math.floor(Math.random() * texts.length)
      }
      for (let i = 0; i < currentText.length; i += 1) {
        if (currentText[i] == texts[randomIndex][i]) {
          matchingString += currentText[i]
        } else {
          break
        }
      }
      setWaiting(true)
      setTimeout(eraseText, 2000)
    }

    const eraseText = () => {
      setWaiting(false)
      if (currentText != matchingString) {
        currentText = currentText.slice(0, -1)
        setTypedText(currentText)
        currentIndex -= 1
        setTimeout(eraseText, 50)
      } else {
        setTimeout(setIndex, 500, randomIndex)
      }
    }

    typeText()
  }, [index])

  return (
    <div className="flex items-center">
      <span className="inline-block overflow-hidden">{typedText}</span>
      <div className={`h-8 sm:h-14 w-1 bg-blue-900 dark:bg-blue-100 ${waiting ? "animate-[blink_1.5s_ease-in-out_infinite]" : ""}`} />
    </div>
  )
}