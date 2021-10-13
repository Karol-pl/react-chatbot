import React, { useEffect, useState } from "react";

const DogPicture = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImgUrl(data.message);
      });
  }, []);
  return (
    <div>
      <img src={imgUrl} alt="a dog" />
    </div>
  );
};

export default DogPicture;
