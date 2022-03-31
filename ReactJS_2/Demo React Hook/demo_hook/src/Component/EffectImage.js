import React from "react";
import { useState, useEffect } from "react";

function EffectImage() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  });

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar}></input>
      {avatar && <img src={avatar.preview} alt="" width="80%"></img>}
    </div>
  );
}

export default EffectImage;
