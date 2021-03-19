import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePicture = () => {
    document.querySelector("#fileSelector").click();
  };
  const hanleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__appBar">
      <span>12 marzo 2021</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={hanleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePicture}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
