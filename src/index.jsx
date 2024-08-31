import { createRoot } from "react-dom/client";
import { createFromFetch } from "@kentcdodds/tmp-react-server-dom-esm/client";
import { useEffect, useState } from "react";

function Main() {
  const [component, setComponent] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await createFromFetch(fetch("/rsc"));
        setComponent(data);
      } catch (e) {
        setComponent(
          <pre style={{ color: "red" }}>
            <code>{String(e)}</code>
          </pre>
        );
      }
    })();
  }, []);

  return <div>{component ? component : "Loading..."}</div>;
}

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);
root.render(<Main />);
