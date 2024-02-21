const CirculosSvg = ({ props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 803 400",
      width: "100%",
      height: "500px",
    }}
    viewBox="0 0 803 400"
    {...props}
  >
    <circle
      cx={116.9}
      cy={102.8}
      r={88.8}
      style={{
        fill: "#071cdd",
      }}
    />
    <circle
      cx={306.6}
      cy={102.8}
      r={88.8}
      style={{
        fill: "#ebf2f2",
      }}
    />
    <circle
      cx={496.4}
      cy={102.8}
      r={88.8}
      style={{
        fill: "#ecf763",
      }}
    />
    <circle
      cx={686.1}
      cy={102.8}
      r={88.8}
      style={{
        fill: "red",
      }}
    />
    <circle
      cx={211.8}
      cy={297.2}
      r={88.8}
      style={{
        fill: "#ff4e00",
      }}
    />
    <circle
      cx={401.5}
      cy={297.2}
      r={88.8}
      style={{
        fill: "#ff00c9",
      }}
    />
    <circle
      cx={591.2}
      cy={297.2}
      r={88.8}
      style={{
        fill: "#d8b900",
      }}
    />
  </svg>
);
export default CirculosSvg;
