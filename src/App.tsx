import React from "react";
import "./App.css";
import { useFetchUsers } from "./hooks/useFetchUsers";

function App() {
  const { data, error, loading } = useFetchUsers();

  if (loading) return <div>...loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        {data.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </header>
    </div>
  );
}

export default App;
