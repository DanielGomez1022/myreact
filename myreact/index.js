let state = {
  count: 0,
}

function setState(data) {
  state = Object.assign(state, data)
  render()
}

function render() {
  const root = document.querySelector('#root')
  root.innerHTML = `
    <div class="app">
      <div>Count: ${state.count}</div>
      <div><button>Increment</button></div>
    </div>
  `

  const button = document.querySelector('button')
  button.addEventListener('click', event => {
    setState({ count: state.count + 1 })
  })  
}

render()
