import React from 'react'
import { Usestate } from './Hooks/usestate/Usestate'
import { Useeffect } from './Hooks/useEffect/Useeffect'
import { Useref } from './Hooks/useRef/Useref'
import { Usememo } from './Hooks/useMemo/Usememo'
import { Parent } from './Hooks/useCallback/parent'

export const App = () => {
  return (
    <>
      {/* <Usestate/> */}
      {/* <Useeffect/> */}
      {/* <Useref/> */}
      {/* <Usememo/> */}

      {/* usecallback */}
      <Parent />
    </>
  )
}
