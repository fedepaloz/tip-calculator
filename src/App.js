import "./App.css";
const tip = [
  {
    text: "bad",
    percentage: 0,
  },
  {
    text: "good",
    percentage: 10,
  },
  {
    text: "excellent",
    percentage: 10,
  },
];

function App() {
  return (
    <div className="App">
      <BillInput></BillInput>
      <ServiceInput>How did you like the service?</ServiceInput>
      <ServiceInput>How did your friend like the service?</ServiceInput>
    </div>
  );
}

export default App;

function BillInput() {
  return (
    <div>
      <span>How much was the bill?</span>
      <input type="number"></input>
    </div>
  );
}
function ServiceInput({ children }) {
  return (
    <div>
      <span>{children}</span>
      <option></option>
    </div>
  );
}
