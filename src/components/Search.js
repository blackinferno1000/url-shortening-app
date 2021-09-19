import React from "react";
import { useState } from "react";

export default function Search() {
    let [search, setSearch] = useState('');
    let [results, setResults] = useState([]);

    let handleSearch = () => {
        if(search.length > 0) {
            console.log(search)
            fetch(`https://api.shrtco.de/v2/shorten?url=${search}`)
            .then(res => res.json())
            .then(data => setResults((arr) => [...arr,{
                link: data.result.original_link,
                ShortLink: data.result.short_link,
            }]))
        }
    }

    return (
        <div>
            <div>
                 <input type="text" placeholder='Shorten a link here...' onInput={(e) => {
                     setSearch(e.target.value)
                 }}></input>
                 <button onClick={handleSearch}>Shorten it!</button>
                { results && results.map((result) => {
                    <Result link={result.link} shortLink={result.shortLink} />
                })}
            </div>
        </div>
    )
}

function Result(props) {
    let [clicked, setClicked] = useState(false);
    return (
        <div>
            <p>{props.link}</p>
            <p>{props.shortLink}</p>
            <button>Copy</button>
        </div>
    )
}