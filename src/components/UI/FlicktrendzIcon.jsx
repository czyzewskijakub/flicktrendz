const FlicktrendzIcon = () => {
  const svgStyleRect = {
    "--darkreader-inline-fill": "#321683"
  };

  const svgStylePath = {
    "--darkreader-inline-fill": "#1aa68a;"
  };

  const scale = 1.5;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 100 100"
      transform={`scale(${scale})`}
    >
      <rect
        width="100"
        height="100"
        rx="20"
        fill="#8d6ee7"
        data-darkreader-inline-fill=""
        style={svgStyleRect}
      ></rect>
      <path
        d="M37.53 22.37L67.41 22.37Q67.86 23.09 68.27 24.30Q68.67 25.52 68.67 26.96L68.67 26.96Q68.67 29.39 67.55 30.65Q66.42 31.91 64.53 31.91L64.53 31.91L42.84 31.91L42.84 46.22L64.36 46.22Q64.80 46.94 65.21 48.11Q65.61 49.28 65.61 50.72L65.61 50.72Q65.61 53.15 64.49 54.37Q63.36 55.58 61.47 55.58L61.47 55.58L43.02 55.58L43.02 76.91Q42.22 77.09 40.73 77.36Q39.24 77.63 37.63 77.63L37.63 77.63Q34.20 77.63 32.77 76.37Q31.32 75.11 31.32 72.14L31.32 72.14L31.32 28.58Q31.32 25.70 32.99 24.04Q34.66 22.37 37.53 22.37L37.53 22.37Z"
        fill="#20cfac"
        data-darkreader-inline-fill=""
        style={svgStylePath}
      ></path>
    </svg>
  );
};

export default FlicktrendzIcon;
