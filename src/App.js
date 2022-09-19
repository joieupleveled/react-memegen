import './App.css';
// import { render } from '@testing-library/react';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

// // Component 1st before the main function App

// function TextArea() {
//   // Declare the parts that might change in Zukunf
//   // A. Top Text B. Bottom Text C. Meme URL D. Meme Template

//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const [url, setUrl] = useState('https://api.memegen.link/images/pigeon.png');
//   const [meme, setMeme] = useState('');

//   // Download image
//   function downloadImage() {
//     saveAs(
//       `https://api.memegen.link/images/${meme}/${topText}/${bottomText}.png`,
//       'image.jpg',
//     );
//   }

//   return (
//     <div className="main-content">
//       {/* Download image function */}
//       <div className="memeContainer">
//         <img src={url} alt="meme" data-test-id="meme-image" />
//       </div>

//       <h1>Customise your meme here</h1>

//       {/* Top Text input */}
//       <label className="meme-top-caption">
//         Top text
//         <input
//           value={topText}
//           onChange={(event) => {
//             setTopText(event.currentTarget.value);
//           }}
//         />
//       </label>

//       {/* Bottom Text input */}
//       <label className="meme-bottom-caption">
//         Bottom text
//         <input
//           value={bottomText}
//           onChange={(event) => {
//             setBottomText(event.currentTarget.value);
//           }}
//         />
//       </label>

//       {/* Create form to submit with changed image */}
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setUrl(
//             `https://api.memegen.link/images/${meme}/${topText}/${bottomText}.png`,
//           );
//         }}
//       >
//         {/* Changing meme template */}
//         <label>
//           Meme template
//           <input
//             value={meme}
//             onChange={(event) => {
//               setMeme(event.currentTarget.value);
//             }}
//           />
//         </label>
//       </form>

//       {/* Generate Meme Button to click with applied changes */}
//       <button
//         onClick={() => {
//           setUrl(
//             `https://api.memegen.link/images/${meme}/${topText}/${bottomText}.png`,
//           );
//         }}
//       >
//         Generate a Meme
//       </button>

//       {/* Create button to download img */}
//       <button onClick={downloadImage}>Download</button>
//     </div>
//   );
// }

// Component 1st before the main function App

function TextArea() {
  // Declare the parts that might change in Zukunf
  // A. Top Text B. Bottom Text C. Meme URL D. Meme Template

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [meme, setMeme] = useState('pigeon');
  const [image, setImage] = useState(
    `https://api.memegen.link/images/pigeon/hi/there.png`,
  );

  // Function for escaping not allowed Character

  // Download image
  function downloadImage() {
    saveAs(
      `https://api.memegen.link/images/${meme}/${topText}/${bottomText}.png`,
      'image.jpg',
    );
  }

  function escapingCharacters(input) {
    let altText = input.replaceAll('%20', '~p');
    altText = input.replaceAll('_', '__');
    altText = input.replaceAll('-', '--');
    altText = input.replaceAll('?', '~q');
    altText = input.replaceAll('&', '~a');
    altText = input.replaceAll('#', '~h');
    altText = input.replaceAll('/', '~s');
    altText = input.replaceAll('\\', '~b');
    altText = input.replaceAll('"', "''");
    altText = input.replaceAll('&', '~a');
    return altText;
  }

  return (
    <div className="main-content">
      {/* Download image function */}
      <div className="memeContainer">
        <img src={image} alt="Meme" data-test-id="meme-image" />
      </div>

      <h1>Customise your meme here</h1>

      {/* Top Text input */}
      <label className="meme-top-caption">
        Top text
        <input
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
            setImage(
              `https://api.memegen.link/images/${escapingCharacters(
                meme,
              )}/${escapingCharacters(event.target.value)}.png`,
            );
          }}
        />
      </label>

      {/* Bottom Text input */}
      <label className="meme-bottom-caption">
        Bottom text
        <input
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.target.value);
            setImage(
              `https://api.memegen.link/images/${escapingCharacters(
                meme,
              )}/${escapingCharacters(topText)}/${escapingCharacters(
                event.target.value,
              )}.png`,
            );
          }}
        />
      </label>

      {/* Create form to submit with changed image */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setImage(
            `https://api.memegen.link/images/${escapingCharacters(
              meme,
            )}/${escapingCharacters(topText)}/${escapingCharacters(
              bottomText,
            )}.png`,
          );
        }}
      >
        {/* Changing meme template */}
        <label>
          Meme template
          <input
            value={meme}
            onChange={(event) => setMeme(event.target.value)}
          />
        </label>
      </form>

      {/* Generate Meme Button to click with applied changes */}
      <button
        onClick={() => {
          setImage(
            `https://api.memegen.link/images/${escapingCharacters(
              meme,
            )}/${escapingCharacters(topText)}/${escapingCharacters(
              bottomText,
            )}.png`,
          );
        }}
      >
        Generate
      </button>

      {/* Create button to download img */}
      <button onClick={downloadImage}>Download</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>React Meme Generator by Joie</h1>
      <a
        className="App-link"
        href="https://timely-moxie-5e2571.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more about Joie
      </a>
      <br />
      <h2>Learn more about Joelle</h2>
      <TextArea />
    </div>
  );
}
export default App;
