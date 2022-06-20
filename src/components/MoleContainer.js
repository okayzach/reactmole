import { useState } from 'react'
import Mole from './EmptySlot'
import EmptySlot from './Mole'

function MoleContainer(props){

    let [theMole, setDisplayStatus] = useState(false)

    function moleBop(e){
        props.setScore(props.score + 1)
        setDisplayStatus(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setDisplayStatus} moleBop={moleBop} /> : <EmptySlot toggle={setDisplayStatus} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer
