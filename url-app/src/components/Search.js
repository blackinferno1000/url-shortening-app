import React from "react";
import { useState, useRef } from "react";

export default function Search() {
  let [search, setSearch] = useState("");
  let [results, setResults] = useState([]);
  const inputRef = useRef(null)

  let handleSearch = () => {
    if (search.length > 0 && search.includes("https://")) {
      fetch(`https://api.shrtco.de/v2/shorten?url=${search}`)
        .then((res) => res.json())
        .then((data) =>
          setResults((arr) => {
              if(results.length < 3) {
                  return [
                    ...arr,
                    {
                      link: data.result.original_link,
                      shortLink: data.result.short_link,
                    },
                  ]
              }
              return [
                  arr[1],
                  arr[2], 
                  {
                    link: data.result.original_link,
                    shortLink: data.result.short_link,
                  },
              ]
          })
        );
        inputRef.current.value = ""
        setSearch('')
    } else {
        inputRef.current.value = "Use a valid url!"
        setSearch('')
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Shorten a link here..."
          ref={inputRef}
          onInput={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button onClick={handleSearch}>Shorten it!</button>
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

  function copyText() {
    console.log(linkRef);
    navigator.clipboard.writeText(linkRef.current.innerText).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  }

  return (
    <div>
      <p>{props.link}</p>
      <p ref={linkRef}>{props.shortLink}</p>
      <button onClick={copyText}>{copied ? "Copied!" : "Copy"}</button>
    </div>
  );
}
