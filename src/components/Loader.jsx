import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const fullText = "EKAGRA";
    let i = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(typing);

        setTimeout(() => {
          onFinish(); // hide loader
        }, 800);
      }
    }, 150);

    return () => clearInterval(typing);
  }, []);

  return (
    <div style={styles.loader}>
      <h1>{text}</h1>
    </div>
  );
}

const styles = {
  loader: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    zIndex: 9999,
  },
};
