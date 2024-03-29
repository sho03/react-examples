import { Link } from "react-router-dom";

export function Home() {
  return <div>
    <h1>Welcome React Examples</h1>
    <ul>
      <li>
        <Link to={"/Accordion"}>
          AccordionSample
        </Link>
      </li>
      <li>
        <Link to={"/UseStateAndUseEffectExample"}>
          useState and useEffect example
        </Link>
      </li>
      <li>
        <Link to={"/UseContextExample"}>
          useContext Example
        </Link>
      </li>
      <li>
        <Link to={"/UseMemoSample"}>
          useMemo sample
        </Link>
      </li>
      <li>
        <Link to={"/graph"}>
          graph
        </Link>
      </li>
      <li>
        <Link to={"/keyError"}>
          keyError
        </Link>
      </li>
      <li>
        <Link to={"/codeMirror"}>
          codeMirror
        </Link>
      </li>
      <li>
        <Link to={"/inputEvents"}>
          inputEvents
        </Link>
      </li>
      <li>
        <Link to={"/hookForm"}>
          React Hook Form
        </Link>
      </li>
    </ul>
  </div>
}