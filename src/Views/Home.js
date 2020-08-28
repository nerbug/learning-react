import React from "react";
import Hello from "../Components/Hello";

function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl">This is the home page</h1>
      <Hello name="world" />
    </div>
  );
}

export default Home;
