import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

export default function Symbols() {
    let currentDisplay = useSelector(selectDisplay);
    return (
        <div className='symbols'>
            <div className='stack'>
                <h2>Flag of {currentDisplay.name.common}:</h2>
                {currentDisplay.flags ? (
                    <img src={currentDisplay.flags.png}/>
                ) : (
                    "(NO DATA FOUND)"
                )
                }
            </div>
                <div className='stack'>
                <h2>Coat of Arm of {currentDisplay.name.common}:</h2>
                {currentDisplay.coatOfArms ? (
                    <img src={currentDisplay.coatOfArms.png}/>
                ) : (
                    "()NO DATA FOUND"
                )}
                </div>
        </div>
    )
}
