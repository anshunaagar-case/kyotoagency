const LiquifiedWave = () => {
  return (
    <>
      <svg
      className="overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlLang="http://svgjs.dev/svgjs"
        viewBox="0 0 325 100"
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ssspill-grad">
            <stop
              stop-color="hsl(272, 66%, 40%)"
              stop-opacity="1"
              offset="45%"
            ></stop>
            <stop
              stop-color="hsl(272, 99%, 54%)"
              stop-opacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g fill="url(#ssspill-grad)">
          <rect width="100%" height="40" fill="hsl(272, 66%, 40%)"></rect>

          <rect x="0" width="7.69%" height="73.30298662325784" rx="15"></rect>
          <rect x="50" width="7.69%" height="88.15800464770192" rx="15"></rect>
          <rect x="100" width="7.69%" height="69.28476082759437" rx="15"></rect>
          <rect x="150" width="7.69%" height="60.87354724564632" rx="15"></rect>
          <rect x="200" width="7.69%" height="76.80739012142143" rx="15"></rect>
          <rect x="250" width="7.69%" height="75.96859132421812" rx="15"></rect>
          <rect x="300" width="7.69%" height="79.45506169990097" rx="15"></rect>
        </g>
        <g fill="hsl(0, 0, 0)">
          <rect
            x="25"
            y="17.56531280975338"
            width="7.69%"
            height="60"
            rx="15"
          ></rect>
          <rect
            x="75"
            y="12.592035601920127"
            width="7.69%"
            height="60"
            rx="15"
          ></rect>
          <rect
            x="125"
            y="3.6308698167101214"
            width="7.69%"
            height="60"
            rx="15"
          ></rect>
          <rect
            x="175"
            y="6.063004360047694"
            width="7.69%"
            height="60"
            rx="15"
          ></rect>
          <rect
            x="225"
            y="8.72509169630934"
            width="7.69%"
            height="60"
            rx="15"
          ></rect>
          <rect
            x="275"
            y="16.344922951056574"
            width="7.69%"
            height="60"
            rx="15"
          ></rect>
        </g>
      </svg>
    </>
  );
};

const HeroSectionBlob = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-64 absolute top-0 -z-10 rotate-90 left-0 overflow-hidden"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlLang="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
      >
        <g
          stroke-width="19"
          stroke="hsl(272, 63%, 57%)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="52 28"
          transform="matrix(-0.9986295347545738,-0.052335956242943564,0.052335956242943564,-0.9986295347545738,801.5174314046521,820.386196399007)"
        >
          <path
            d="M226.5 226.5Q586.5 242.5 400 400Q224.5 458.5 573.5 573.5 "
            marker-end="url(#SvgjsMarker1551)"
          ></path>
        </g>
        <defs>
          <marker
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            viewBox="0 0 6 6"
            orient="auto"
            id="SvgjsMarker1551"
          >
            <polygon
              points="0,6 2,3 0,0 6,3"
              fill="hsl(272, 63%, 57%)"
            ></polygon>
          </marker>
        </defs>
      </svg>
    </>
  );
};

export { HeroSectionBlob, LiquifiedWave };
