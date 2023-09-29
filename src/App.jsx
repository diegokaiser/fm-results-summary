import './App.scss'
import data from './data/data'

function App() {
  console.log(data)
  return (
    <div className="main">
      <div className="main__content">
        <div className="card">
          <div className="card__content">
            <div className="card__results">
              <div className="results__subtitle">
                Your Result
              </div>
              <div className="results__score">
                <strong>76</strong>
                <p>of 100</p>
              </div>
              <div className="results__content">
                <h2>Great</h2>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
              </div>
            </div>
            <div className="card__summary">
              <div className="summary__title">
                Summary
              </div>
              <div className="summary__items">
                {
                  data.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="item__ico">
                        <img src={item.icon} alt={item.category} />
                      </div>
                      <div className="item__category">
                        {item.category}
                      </div>
                      <div className="item__score">
                        <strong>{item.score}</strong><span> / 100</span>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="summary__actions">
                <button type="button">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
