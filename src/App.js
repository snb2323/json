import { useState } from 'react';
import navijson from './data/gnb.json';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [tabvar, settab] = useState(0)

  const myfun = (v) => {
    alert(v)
  }
  return (
    <div >
      <ul className='d-flex '>
        {
          navijson.map((v, idx) => {
            return (
              <li onClick={function () { settab(idx); }}>{v.name}</li>


            )
          })
        }
      </ul>
      <div className='border py-5 bg-dark text-white'>
        {

          navijson[tabvar] && <p>
            <img src={navijson[tabvar].src} lat={navijson[tabvar].alt}></img>
            <strong>{navijson[tabvar].name}</strong>
          </p>
        }
      </div>
    </div>
  );
}

export default App;