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
        className="absolute top-0 left-0 -mt-8 -z-11"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlLang="http://svgjs.dev/svgjs"
        viewBox="0 0 800 400"
      >
        <path
          d="M141.31736755371094,180.83831787109375C149.0239528656006,174.99999656677247,160.28741973876953,145.0598843383789,180.83831787109375,150.89820861816406C201.38921600341797,156.73653289794922,221.01796310424805,209.84431037902831,246.7065887451172,210.7784423828125C272.3952143859863,211.71257438659669,294.59282524108886,158.2574899291992,312.5748596191406,155.68862915039062C330.5568939971924,153.11976837158204,325.61077529907226,195.97006858825682,338.9221496582031,197.60479736328125C352.233524017334,199.23952613830568,372.66466506958005,170.61077766418458,380.83831787109375,164.0718536376953"
          fill="none"
          stroke-width="13"
          stroke='url("#SvgjsLinearGradient1001")'
          stroke-linecap="round"
          transform="matrix(0.9974999999999999,0,0,0.9974999999999999,139.5748518943787,19.88805389404297)"
          stroke-dasharray="37 0"
        ></path>
        <defs>
          <linearGradient
            id="SvgjsLinearGradient1001"
            gradientTransform="rotate(189, 0.5, 0.5)"
          >
            <stop stop-color="hsl(162, 100%, 58%)" offset="0"></stop>
            <stop stop-color="hsl(270, 73%, 53%)" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const ArrowHoverable = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 -mt-8 -z-11"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlLang="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
      >
        <g
          stroke-width="10"
          stroke="hsl(227, 71%, 57%)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M344.9595489501953 243.50559997558594Q-99.04045104980469 396.50559997558594 494.9595489501953 393.50559997558594Q-99.04045104980469 602.5055999755859 644.9595489501953 543.5055999755859 "
            marker-end="url(#SvgjsMarker1288)"
          ></path>
        </g>
        <defs>
          <marker
            markerWidth="5"
            markerHeight="5"
            refX="2.5"
            refY="2.5"
            viewBox="0 0 5 5"
            orient="auto"
            id="SvgjsMarker1288"
          >
            <polygon
              points="0,5 2.5,2.5 0,0 5,2.5"
              fill="hsl(227, 71%, 57%)"
            ></polygon>
          </marker>
        </defs>
      </svg>
    </>
  );
};

export { HeroSectionBlob, LiquifiedWave, ArrowHoverable };
