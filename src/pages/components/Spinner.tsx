function Spinner() {
  return (
    <div className="fixed flex inset-0 z-50	justify-center items-center bg-bl">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>{" "}
    </div>
  );
}

export default Spinner;
