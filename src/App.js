import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [serviceRating1, setServiceRating1] = useState(0);
  const [serviceRating2, setServiceRating2] = useState(0);
  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill}></BillInput>
      <ServiceInput
        serviceRating1={serviceRating1}
        setServiceRating={setServiceRating1}
      >
        How did you like the service?
      </ServiceInput>
      <ServiceInput
        serviceRating2={serviceRating2}
        setServiceRating={setServiceRating2}
      >
        How did your friend like the service?
      </ServiceInput>
      <Total
        bill={bill}
        serviceRating1={serviceRating1}
        serviceRating2={serviceRating2}
      ></Total>
    </div>
  );
}

export default App;

function BillInput({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>
    </div>
  );
}
function ServiceInput({ children, serviceRating, setServiceRating }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={serviceRating}
        onChange={(e) => setServiceRating(e.target.value)}
      >
        <option value="0">bad 0%</option>
        <option value="10">good 10% </option>
        <option value="20">excellent 20%</option>
      </select>
    </div>
  );
}

function Total({ bill, serviceRating1, serviceRating2 }) {
  const avrgtip = (+serviceRating1 + +serviceRating2) / 2;
  console.log(typeof +bill);

  return <div>total={Math.round((avrgtip / bill) * 100) + +bill}</div>;
}
