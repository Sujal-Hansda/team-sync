import React from "react";
import { Camera, User } from "lucide-react";

const UploadPhoto = ({ image, onChange }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-indigo-50">
        {image ? (
          <img
            src={image}
            alt="Profile preview"
            className="h-full w-full object-cover"
          />
        ) : (
          <User size={36} className="text-indigo-400" />
        )}
      </div>

      <label
        htmlFor="profilePhoto"
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <Camera size={16} />
        Upload Photo
      </label>

      <input
        id="profilePhoto"
        type="file"
        accept="image/*"
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadPhoto;