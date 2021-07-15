import Lottie from "react-lottie";

const LottieAnimation = ({ lotti, width, height, notLoop }) => {
  const defaultOptions = {
    loop: !notLoop,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default LottieAnimation;
