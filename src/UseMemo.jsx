import React, { useMemo, useState } from 'react'
import './style.css'
import { randomId, useNameAvailable } from './utils/RandomId'

export default function UseMemo() {


  const [show, showSet] = useState(true)
  const [data, dataSet] = useState("")
  const [name, nameSet] = useState("")
  // const ID = useMemo(() => randomId(), [])
  const ID = useMemo(randomId, [])
  const checking=useMemo(useNameAvailable,[name])
  // use memo use na korle dekha jaito jokhn jokhn button a press
  // korbo tokhn tokhn randomId() function call hobe
  //but akhn use memo use korci.and dependency te null dea dice
  //tahole aita just ekbar call hobe jokhn app first time render hobe
  //useEffect and use memor differenc hoitice j useMemo value return kore
  //but useEffect kono value return kore na

  // same vabe checking a useNameAvailable() function call hobe bar bar
  //jokhn e page a j kono jaygay function kora hoy na keno.
  //like button press,input change
  //but akhn aitay dependency te name dea dice
  //so sudhu name input change korle function call hobe

  return (<>

    <h3>useMemo practice</h3>

    <p>#{ID}</p>

    <input type="text" placeholder="data" onChange={(e) => dataSet(e.target.value)} />
    <input type="text" placeholder="user name" onChange={(e) => nameSet(e.target.value)} />

    <p className={checking ? "textColorGreen" : "textColorRed"}>{checking?"user name available":"user name taken"}</p><br />
    <p className={show ? "textColorGreen" : "textColorRed"}>{show ? "password" : "****"}</p>

    <p>{data}</p>
    
    <button className='button' onClick={() => showSet((prev) => !prev)}>{show ? "show" : "reveal"}</button>


  </>
  )
}
