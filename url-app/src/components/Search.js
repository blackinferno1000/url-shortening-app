import React from "react";
import { useState, useRef } from "react";

export default function Search() {
  let [search, setSearch] = useState("");
  let [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const errorRef = useRef(null);

  let handleSearch = () => {
    if (search.length > 0 && search.includes("https://")) {
      fetch(`https://api.shrtco.de/v2/shorten?url=${search}`)
        .then((res) => res.json())
        .then((data) =>
          setResults((arr) => {
            if (results.length < 3) {
              return [
                ...arr,
                {
                  link: data.result.original_link,
                  shortLink: data.result.short_link,
                },
              ];
            }
            return [
              arr[1],
              arr[2],
              {
                link: data.result.original_link,
                shortLink: data.result.short_link,
              },
            ];
          })
        );
      inputRef.current.value = "";
      inputRef.current.style.borderColor = "hsl(180, 66%, 49%)";
      errorRef.current.textContent = "";
      errorRef.current.style.color = "hsl(180, 66%, 49%)";
      setSearch("");
    } else {
      inputRef.current.style.borderColor = "hsl(0, 87%, 67%)";
      errorRef.current.textContent = "Add a valid link!";
      errorRef.current.style.color = "hsl(0, 87%, 67%)";
      setSearch("");
    }
  };

  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          placeholder="Shorten a link here..."
          ref={inputRef}
          onInput={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button onClick={handleSearch}>Shorten it!</button>
      </div>
      <span className="error-message" ref={errorRef}></span>
      <div className="results">
        {results &&
          results.map((result, index) => (
            <Result
              key={index}
              link={result.link}
              shortLink={result.shortLink}
            />
          ))}
      </div>
    </div>
  );
}

function Result(props) {
  let [copied, setCopied] = useState(false);
  const linkRef = useRef(null);
  const buttonRef = useRef(null);

  function copyText() {
    console.log(linkRef);
    navigator.clipboard.writeText(linkRef.current.innerText).then(() => {
      setCopied(true);
      buttonRef.current.style.backgroundColor = "hsl(257, 27%, 26%)";
      setTimeout(() => {
        setCopied(false);
        buttonRef.current.style.backgroundColor = "hsl(180, 66%, 49%)";
      }, 1500);
    });
  }

  return (
    <div className="result">
      <p>{props.link}</p>
      <span>
        <a
          href={`https://${props.shortLink}`}
          target="_blank"
          rel="noreferrer"
          ref={linkRef}
        >
          {props.shortLink}
        </a>
        <button ref={buttonRef} onClick={copyText}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </span>
    </div>
  );
}
