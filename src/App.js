import { Route, Routes } from "react-router-dom";

import User from "./User";
import Visit from "./Visit";


export  default function App() {
  return (
    <Routes>
      <h1> hit here</h1>
      <Route path="/" element={<Visit />} />
      <Route path="/User" element={<User />} />
    </Routes>
  );
}
