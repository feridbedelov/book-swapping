import "./index.scss";

export const ImageUpload = ({ value, onChange, accept, name, ...props }) => {
  let dataText = "Select your file!";

  if (value) dataText = value;

  return (
    <div className="file-upload-wrapper" data-text={dataText}>
      <input
        {...props}
        name={name}
        accept={accept}
        type="file"
        className="file-upload-field"
        onChange={onChange}
      />
    </div>
  );
};
