import ShopItemClass from './ShopItemClass.jsx'
import item from './items.js'


function App() {
  return (
      <div className="container">
          <div className="background-element">
          </div>
          <div className="highlight-window">
              <div className='highlight-overlay'></div>
          </div>
          <div className="window">
              <ShopItemClass item={item} />
          </div>
      </div>
  )
}

export default App
