import { Listing } from '../src/Components/Listing';
import { data } from '../src/Data/etsy';

import './main.css';

function App() {
  const resolveData = JSON.parse(JSON.stringify(data));

  return (
    <div className="item-list ">
      <Listing items={resolveData || []} />
    </div>
  );
}

export default App;
