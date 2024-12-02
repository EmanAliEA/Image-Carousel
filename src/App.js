import "./styles.css";
import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/2059466/pexels-photo-2059466.jpeg?cs=srgb&dl=-2059466.jpg&fm=jpg",
  "https://thewowstyle.com/wp-content/uploads/2015/01/nature-wallpaper-27.jpg",
  "https://i.pinimg.com/736x/25/cc/92/25cc9296759db2b5d1c39576d84509fa.jpg",
  "https://4.bp.blogspot.com/-XIBuei_PIvs/TxbrzigX_HI/AAAAAAAAAXE/tNPLKqsFZwI/s1600/4.jpg",
];

export default function App() {
  const [allImages, setImage] = useState(images);
  const [currIndex, setCurrIndex] = useState(0);
  function handleNextImage() {
    console.log(currIndex);
    currIndex === images.length - 1
      ? setCurrIndex(0)
      : setCurrIndex((index) => ++index);
  }
  function handlePreviousImage() {
    console.log(currIndex);
    currIndex === 0
      ? setCurrIndex(images.length - 1)
      : setCurrIndex((index) => --index);
  }
  return (
    <div className="App">
      <Button onAction={handlePreviousImage}>&larr;</Button>
      <Images currIndex={currIndex} />
      <Button onAction={handleNextImage}>&rarr;</Button>
    </div>
  );
}

function Button({ children, onAction }) {
  return <button onClick={onAction}>{children}</button>;
}

function Images({ currIndex }) {
  return <img src={images[currIndex]} alt="image" className="image-item" />;
}
