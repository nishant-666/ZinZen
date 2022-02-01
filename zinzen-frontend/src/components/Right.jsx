import React, { useState } from 'react'
import { Languages } from './Languages'
import Themes from './Themes'
import { languageSelectionState } from '../store/LanguageSelectionState'
import { useRecoilState } from 'recoil'

const Right = () => {
  let languages = [
    {
      sno: 1,
      title: "Language 1"
    },
    {
      sno: 2,
      title: "Language 2"
    },
    {
      sno: 3,
      title: "Language 3"
    },
    {
      sno: 4,
      title: "Language 4"
    },
    {
      sno: 5,
      title: "Language 5"
    },
    {
      sno: 6,
      title: "Language 6"
    }
  ]
  const [isLanguageChosen, setIsLanguageChosen] = useRecoilState(languageSelectionState);
  return (
    <div>
      {!isLanguageChosen && (<div className="right-panel">
        <h3 className="right-panel-font">Choose your preferred Language.</h3>
        <Languages languages={languages} />
      </div>)}
      {isLanguageChosen && (<div className="right-panel">
        <h3 className="right-panel-font">Choose your preferred Theme.</h3>
        <Themes />
      </div>)}
    </div>)
}

export default Right
