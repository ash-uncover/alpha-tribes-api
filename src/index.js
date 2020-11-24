import React from 'react'
import ReactDOM from 'react-dom'

console.log('==================================================================')
try {
  console.log(process.env.PROCESS_ENV_TEST)
} catch (error) {
  console.log('process failed')
}
console.log('==================================================================')

ReactDOM.render(
  <div>alpha-tribe-api</div>,
  document.getElementById('react-root')
)
