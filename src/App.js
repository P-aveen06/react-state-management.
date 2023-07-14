import { Link,Outlet } from "react-router-dom";

function App() {
  return <>
  <nav>
    <ul >
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/Page_1">Page_1</Link>
      </li>
      <li>
        <Link to="/Page_2">Page_2</Link>
      </li>
      <li>
        <Link to='/Page_3'>Page_3</Link>
      </li>
    </ul>
  </nav>
  <Outlet />
</>;
}

export default App;
