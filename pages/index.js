import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
var stringSimilarity = require("string-similarity");
var texts = [];
var tableRows = [{text: '', match: ''}];

export default function Home() {
  const [textInput, setTextInput] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    if (texts.length != 0) {
      var matches = stringSimilarity.findBestMatch(textInput, texts);
      console.log(matches.bestMatch.target);
      tableRows.push({ text: textInput, match: matches.bestMatch.target });
    }
    else tableRows[0].text = textInput;
    texts.push(textInput);
    setTextInput("");
  }

  return (
    <div>
      <Head>
        <title>Closest Texts Finder</title>
      </Head>

      <main className={styles.main}>
        <h3>Provide text below:</h3>
        <form onSubmit={onSubmit}>
          <textarea
            name="textInput"
            placeholder="Enter your text!"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}>
          </textarea>
          <input type="submit" value="Add my text" />
        </form>
        <table name="textsTable">
          <thead>
            <tr>
              <td>Text</td>
              <td>Closest Text (from those seen so far)</td>
            </tr>
            {tableRows.slice(0).reverse().map((r) => (
                      <tr>
                          <td>{r.text}</td>
                          <td>{r.match}</td>
                      </tr>
                    ))}
          </thead>
        </table>
      </main>
    </div>
  );
}
