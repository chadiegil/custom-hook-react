import useFetch from "./hooks/useFetch";
function App() {
  const [data, isLoading, error] = useFetch();
  console.log(data);

  return (
    <>
      <h1>Custom Hook Practice</h1>

      {data.map((data) => (
        <div key={data.id}>{data.title}</div>
      ))}
    </>
  );
}

export default App;
