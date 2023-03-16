
import React, { useState } from "react";
  
const urlToDownload = "https://nathaliasi.github.io/curriculo-html-css/"

const ButtonDownload = () => {
const [download,setDownload] = useState("");
  const [count,setCount] = useState(0);
  return (
    <div>
        <button
            className="btn"
            onClick={() => {
            setDownload(urlToDownload);
            setCount((old) => old + 1);
          }}
        >
        <a href="https://nathaliasi.github.io/curriculo-html-css/" target={"_blank"}>Link Currículo</a>
        </button>
        <p>{download}</p>
      {download && (
        <iframe
          src={download + "?c=" + count}
          style={{ display: "none" }}
        ></iframe>
      )}
    </div>
        
  )
}

export default ButtonDownload
