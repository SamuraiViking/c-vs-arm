import React from 'react'
import Snippet from './Snippet'


function Snippets(props) {
    return (
        <div className="snippets">
        <Snippet
          code={props.cCode}
          lauguage='c'
        />
        <Snippet
          code={props.armCode}
          lauguage='asmarm'
        />
      </div>
    )
}

export default Snippets