import brackets from "../assets/svg/BigBrackets";

const Title = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center justify-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3 text-center">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Title;
