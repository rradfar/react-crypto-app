const InputBase = ({ label, ...props }) => {
  return (
    <>
      <input type='number' className='form-control' {...props} />
      <span className='input-group-text'>{label}</span>
    </>
  );
};

export default InputBase;
