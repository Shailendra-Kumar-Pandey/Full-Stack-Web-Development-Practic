import Child from "./component/Child";

function App() {
  const data = [
    {
      name: "Uzaif Khan",
      age: 25,
      city: "Nagpur",
    },
    {
      name: "Uzaif Khan",
      age: 25,
      city: "Nagpur",
    },
    {
      name: "Sanjay Khan",
      age: 50,
      city: "Nagpur",
    },
    {
      name: "Daadu Khan",
      age: 20,
      city: "Nagpur",
    },
    {
      name: "Saleem Khan",
      age: 28,
      city: "Nagpur",
    },
  ];

  return (
    <>
          <div className="container">
                <Child data={data}/>
          </div>
    </>
  );
}

export default App;
