const DownloadSvg = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      className="group-hover:fill-black fill-white"
      viewBox="0 0 488.658 488.658"
      //   style="enable-background:new 0 0 488.658 488.658;"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M225.485,317.756c-21-23-42.8-45.1-67.4-64.3c-7.4-5.8-16.2-8-22.1-1.1c-5.4,6.3-5,15.3,1.1,22.8
             c11,13.4,21.9,27,34.3,39.1c19.9,19.4,41,37.6,61.6,56.4c0.6,1,1.2,1.9,1.8,2.9v0.1c3.1,4.8,9.6,6.2,14.4,3.1l4.8-3.1
             c41.9-27.1,72.7-66.8,109.2-100c1.7-1.5,1.7-6.5,0.7-9c-1.9-5-6.8-5.9-12.1-5.1c-17.2,2.7-32.5,11.6-45.7,23
             c-15.8,13.7-31.7,27.2-47.2,41.3c1.2-14.4,2.1-28.8,2-43.2c-0.4-32.2-2.4-64.4-3.7-96.6c11.5-57.7,4.9-116.8,7.3-175.2
             c0.1-2.6-3.4-6.7-5.8-8c-4.9-2.5-9,0.8-12.1,5.7c-10.3,16.3-14.8,36.1-16,56.2c-2.9,48.5-7.3,97-4,145.7c-0.4,6-0.8,12.1-1.1,18.1
             C224.085,256.956,223.585,287.456,225.485,317.756z"
          />
          <path
            d="M214.685,450.756c-6.3-0.4-12.6-0.8-18.9-1.1c-40-1.7-80-2.2-119.8,1.9c-11.3,1.2-20.7,5.8-19.9,14.8
             c0.8,8.3,8.8,14.4,20.4,15.3c20.9,1.7,41.9,3.6,62.8,3.4c33.7-0.4,67.3-2.4,101-3.7c60.3,11.5,122.1,4.9,183.1,7.3
             c2.7,0.1,7-3.4,8.3-5.8c2.7-4.9-0.8-9-6-12.1c-17-10.3-37.7-14.8-58.8-16C316.385,451.956,265.685,447.556,214.685,450.756z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
const PreviewSvg = () => {
  return (
    <svg
      className="group-hover:fill-black fill-white"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28 21.155c-.02-.07-.05-.14-.09-.2.03.04.05.09.07.13.01.02.02.05.02.07zM27.82 20.835c-.02-.03-.05-.06-.08-.09.01.01.02.01.03.02.02.02.04.04.05.07z" />
      <path d="M28 21.155c-.02-.07-.05-.14-.09-.2.03.04.05.09.07.13.01.02.02.05.02.07zM27.77 20.765c.02.02.04.04.05.07-.02-.03-.05-.06-.08-.09.01.01.02.01.03.02zM6.5 15H5c-.55 0-1 .45-1 1s.45 1 1 1h2.81c1.18 1.23 2.85 2 4.69 2 1.44 0 2.76-.46 3.832-1.25l.91.91c-.17.67 0 1.4.52 1.93l2.83 2.83c.78.77 2.05.77 2.83 0 .77-.78.77-2.05 0-2.83l-2.83-2.83c-.39-.39-.9-.59-1.42-.58-.17-.01-.34.02-.51.06l-.91-.91c.79-1.07 1.25-2.39 1.25-3.83 0-3.59-2.91-6.5-6.5-6.5-1.28 0-2.47.37-3.47 1H5c-.55 0-1 .45-1 1s.45 1 1 1h2.02c-.39.6-.68 1.28-.84 2H5c-.55 0-1 .45-1 1s.45 1 1 1h1.02c-.01-.17.22 1.38.48 2zm1.76-1h4.742c1.1 0 2-.9 2-2s-.9-2-2-2h-4.24c.81-1.21 2.19-2 3.74-2 2.48 0 4.5 2.02 4.5 4.502s-2.02 4.5-4.5 4.5c-1.95 0-3.62-1.25-4.24-3z" />
      <path d="M18 3v1c-.01.54-.46.98-1 .98s-.99-.44-1-.98V3c0-.54-.46-1-1-1H3c-.54 0-1 .46-1 1v18c0 .54.46 1 1 1h11c.55 0 1 .45 1 1s-.45 1-1 1H3c-1.65 0-3-1.35-3-3V3c0-1.65 1.35-3 3-3h12c1.65 0 3 1.35 3 3z" />
    </svg>
  );
};
const GithubSvg = ({ style }) => {
  style = style ?? "group-hover:fill-white";
  return (
    <svg
      className={`${style} fill-black`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
};
const SendSvg = () => {
  return (
    <svg
      version="1.1"
      className="group-hover:fill-black fill-white"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 472.615 472.615"
      //   style="enable-background:new 0 0 472.615 472.615;"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M470.595,27.233c-2.777-3.704-7.714-5.143-12.034-3.395L126.534,156.833c-3.6,1.545-6.068,4.937-6.377,8.847
             c-0.308,4.01,1.75,7.714,5.144,9.668l49.063,28.088v84.954c0,4.339,2.727,8.217,6.815,9.683c1.134,0.402,2.31,0.603,3.47,0.603
             c3.019,0,5.957-1.325,7.946-3.756l45.274-55.085l42.336,24.177c1.646,0.927,3.395,1.441,5.144,1.441
             c2.983,0,5.966-1.441,8.023-3.907L470.389,39.782C473.269,36.181,473.373,30.936,470.595,27.233z M249.369,193.441l-54.434,66.23
             V205.33l69.841-30.702L249.369,193.441z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M105.582,367.268c-12.999,7.742-25.212,16.918-36.523,27.445c23.484,21.845,50.87,38.004,80.713,47.478
             C131.897,423.903,116.773,398.233,105.582,367.268z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M124.449,357.276c18.283,51.815,47.677,87.967,80.771,94.024V337.591C176.847,338.862,149.563,345.564,124.449,357.276z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M84.456,246.593H0c2.326,49.69,21.369,96.285,54.468,133.264c13.689-12.807,28.658-23.756,44.588-32.816
             C90.444,316.989,85.279,282.983,84.456,246.593z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M54.598,92.613C21.413,129.632,2.329,176.28,0,226.021h84.456c0.824-36.498,6.017-70.599,14.677-100.718
             C83.113,116.22,68.169,105.264,54.598,92.613z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M69.001,77.952c11.246,10.432,23.468,19.668,36.567,27.435c11.192-30.984,26.323-56.671,44.205-74.967
             C119.901,39.902,92.49,56.082,69.001,77.952z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M225.793,337.636v113.569c32.717-6.557,61.724-42.594,79.837-93.928C280.793,345.694,253.833,339.013,225.793,337.636z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M324.497,367.268c-11.19,30.965-26.316,56.637-44.191,74.926c29.85-9.475,57.241-25.636,80.718-47.481
             C349.711,384.186,337.497,375.01,324.497,367.268z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M115.079,193.195c-2.617-1.502-4.953-3.364-6.976-5.494c-1.507,12.47-2.605,25.217-2.938,38.32h48.627v-10.657
             L115.079,193.195z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M225.793,21.415v73.503l59.535-23.846C268.315,43.104,247.651,25.714,225.793,21.415z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M124.47,115.284c8.32,3.882,16.919,7.127,25.655,9.944l55.095-22.068V21.315
             C172.138,27.369,142.755,63.498,124.47,115.284z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M280.21,30.581c8.78,9.038,16.883,20.155,24.329,32.796l24.858-9.959C313.98,43.76,297.475,36.075,280.21,30.581z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M309.445,274.377c-6.247,7.523-14.937,11.652-24.097,11.652c-5.193,0-10.452-1.406-15.207-4.078l-27.402-15.649
             l-16.945,20.617v29.883c30.179,1.344,59.265,8.375,86.117,20.516c6.909-24.866,11.135-52.609,12.513-81.703L309.445,274.377z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M193.419,317.821c3.934-0.357,7.829-0.884,11.802-1.045v-5.605C201.808,314.264,197.809,316.519,193.419,317.821z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M411.139,146.979l-63.095,79.042h82.15C428.902,198.477,422.382,171.767,411.139,146.979z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M174.313,317.469c-12.305-4.42-20.521-16.093-20.521-29.08v-41.797h-48.627c0.825,32.424,5.378,63.28,13.004,90.724
             c20.026-9.056,41.309-15.212,63.347-18.339C179.074,318.73,176.653,318.293,174.313,317.469z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M345.623,246.593c-0.822,36.39-5.987,70.396-14.6,100.448c15.93,9.06,30.899,20.009,44.589,32.816
             c33.104-37,52.141-83.587,54.467-133.264H345.623z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
const LeftArrow = () => {
  return (
    <svg
      version="1.1"
      className="fill-black"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M468.662,212.66H147.974l52.851-52.851c16.896-16.897,16.897-44.393,0-61.293c-8.187-8.186-19.07-12.694-30.647-12.694
     c-11.576,0-22.46,4.508-30.646,12.694L12.697,225.351C4.509,233.536,0,244.42,0,256s4.509,22.465,12.695,30.647l126.837,126.839
     c8.186,8.185,19.069,12.693,30.646,12.693c11.577,0,22.462-4.508,30.646-12.694c8.179-8.177,12.683-19.06,12.683-30.647
     s-4.504-22.47-12.682-30.647l-52.851-52.851h320.687C492.557,299.341,512,279.898,512,256S492.558,212.659,468.662,212.66z
      M468.659,278.942h-345.31c-4.126,0-7.844,2.486-9.422,6.296c-1.579,3.811-0.706,8.198,2.21,11.115l70.264,70.263
     c4.324,4.324,6.706,10.086,6.706,16.222c0,6.136-2.382,11.897-6.706,16.222H186.4c-4.333,4.333-10.093,6.719-16.222,6.719
     c-6.128,0-11.889-2.387-16.222-6.719L27.118,272.221c-4.333-4.332-6.719-10.092-6.719-16.221s2.387-11.889,6.721-16.222
     L153.957,112.94c4.334-4.334,10.093-6.72,16.221-6.72s11.89,2.387,16.223,6.718c8.945,8.947,8.945,23.501,0,32.446l-70.263,70.263
     c-2.916,2.917-3.789,7.304-2.21,11.115c1.578,3.81,5.296,6.296,9.422,6.296h345.311c12.649,0,22.941,10.291,22.941,22.942
     S481.31,278.943,468.659,278.942z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M124.477,326.835l-2.022-2.023c-3.985-3.982-10.441-3.982-14.425,0c-3.983,3.984-3.983,10.442,0,14.425l2.023,2.023
     c1.992,1.991,4.601,2.987,7.212,2.987c2.61,0,5.22-0.996,7.213-2.987C128.46,337.275,128.46,330.817,124.477,326.835z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M102.707,305.064L49.431,251.79c-3.985-3.982-10.441-3.982-14.425,0c-3.983,3.984-3.983,10.442,0,14.425l53.276,53.275
     c1.992,1.991,4.601,2.987,7.212,2.987c2.61,0,5.22-0.995,7.213-2.987C106.69,315.505,106.69,309.047,102.707,305.064z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

const LinkedInSvg = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 310 310"
      className="hover:fill-blue-700 fill-black"
      xmlSpace="preserve"
    >
      <g id="XMLID_801_">
        <path
          id="XMLID_802_"
          d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
   C77.16,101.969,74.922,99.73,72.16,99.73z"
        />
        <path
          id="XMLID_803_"
          d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
        />
        <path
          id="XMLID_804_"
          d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
   C310,145.43,300.549,94.761,230.454,94.761z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
const TuringSvg = () => {
  return (
    <svg
      viewBox="0 0 30 45"
      className="hover:fill-blue-700 fill-black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.2895 12.0471L0.0296512 45V37.7948C0.0296512 35.5517 -0.0889535 33.1884 0.148256 30.9453C0.248506 29.5 0.650769 28.0918 1.32907 26.8116C3.92791 22.5593 6.6436 18.4256 9.36105 14.1732C9.76071 13.4942 10.3296 12.9305 11.0123 12.537C11.6949 12.1436 12.4679 11.9339 13.2558 11.9285C15.8564 12.0471 18.4552 12.0471 21.2895 12.0471Z"></path>
      <path d="M28.9657 0C26.3686 2.36163 24.0052 4.725 21.6401 6.85116C19.4546 8.83571 16.6729 10.0398 13.7302 10.275C9.24244 10.5122 4.75465 10.275 0.148256 10.275V0H28.9657Z"></path>
    </svg>
  );
};

const IndeedSvg = () => {
  return (
    <svg
      width="24px"
      height="24px"
      className="hover:fill-blue-700 fill-black"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.566 21.563v-8.762c.255.023.5.035.758.035 1.223 0 2.374-.32 3.35-.893v9.618c0 .822-.195 1.429-.575 1.834-.378.403-.88.605-1.491.605-.6 0-1.077-.202-1.468-.618-.378-.403-.574-1.01-.574-1.819zM11.589.566c2.545-.893 5.442-.845 7.619.987.405.369.867.833 1.051 1.38.22.692-.77-.073-.906-.167-.71-.453-1.418-.833-2.212-1.094C12.86.387 8.812 2.709 6.295 6.315c-1.052 1.594-1.737 3.272-2.3 5.117-.06.202-.109.465-.22.642-.112.203-.048-.546-.048-.57.084-.763.244-1.5.441-2.237C5.33 5.337 7.897 2.066 11.59.566zm4.928 7.059a3.02 3.02 0 1 1-6.04 0 3.02 3.02 0 1 1 6.04 0z" />
    </svg>
  );
};
const UnFavSvg = ({ size, color }) => {
  color = color ?? "fill-white";
  return (
    <svg
      aria-label="Activity Feed"
      height={size ?? "24"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "24"}
      className={`${color} hover:fill-gray-300`}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
    </svg>
  );
};
const FavSvg = ({ size, color }) => {
  color = color ?? "fill-[#ed4956]";
  return (
    <svg
      aria-label="Unlike"
      className={color}
      width={size ?? "24"}
      height={size ?? "24"}
      role="img"
      viewBox="0 0 48 48"
    >
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  );
};
const ArrowRight = () => {
  return (
    <svg
      aria-label="Chevron icon to see all follow requests"
      className="fill-black "
      color="#8e8e8e"
      fill="#8e8e8e"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
    </svg>
  );
};

const Edit = () => {
  return <img src="https://img.icons8.com/ios/30/000000/edit--v2.png" />;
};

const CrossSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block w-6 h-6 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};
const TwitterSvg = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="24"
      height="24"
      className="fill-black group-hover:fill-[#1D9BF0]"
      viewBox="0 0 310 310"
      xmlSpace="preserve"
    >
      <g id="XMLID_826_">
        <path
          id="XMLID_827_"
          d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
   c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
   c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
   C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
   c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
   c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
   c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
   c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
   c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
   c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
   c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
   C307.394,57.037,305.009,56.486,302.973,57.388z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
const FBSvg = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      className="fill-black group-hover:fill-[#2374E1]"
      viewBox="0 0 310 310"
      width="24"
      height="24"
      xmlSpace="preserve"
    >
      <g id="XMLID_834_">
        <path
          id="XMLID_835_"
          d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
const LinkinSvg = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 310 310"
      className="fill-black group-hover:fill-[#0A66C2]"
      xmlSpace="preserve"
    >
      <g id="XMLID_801_">
        <path
          id="XMLID_802_"
          d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
C77.16,101.969,74.922,99.73,72.16,99.73z"
        />
        <path
          id="XMLID_803_"
          d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
        />
        <path
          id="XMLID_804_"
          d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
C310,145.43,300.549,94.761,230.454,94.761z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

const PinterestSvg = () => {
  return (
    <svg
      width="24px"
      height="24px"
      className="fill-black group-hover:fill-[#e60023]"
      viewBox="-3 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 8.61c0-.015 0-.033 0-.051 0-1.038.199-2.029.56-2.938l-.019.054c.363-.928.868-1.725 1.497-2.405l-.005.005c1.283-1.37 2.931-2.383 4.789-2.884l.071-.016c.871-.238 1.871-.375 2.904-.375h.011-.001.073c1.516 0 2.95.355 4.222.985l-.056-.025c1.313.646 2.39 1.596 3.169 2.762l.018.029c.768 1.135 1.226 2.535 1.226 4.041 0 .034 0 .069-.001.103v-.005.016c0 .954-.1 1.885-.29 2.782l.015-.087c-.202.965-.501 1.819-.894 2.617l.029-.064c-.396.827-.877 1.538-1.447 2.168l.007-.008c-.576.621-1.272 1.123-2.051 1.47l-.04.016c-.78.351-1.691.556-2.65.556-.027 0-.053 0-.08 0h.004c-.71-.006-1.379-.175-1.973-.473l.026.012c-.596-.264-1.073-.705-1.377-1.255l-.008-.015q-.144.56-.4 1.622t-.339 1.37q-.08.31-.296 1.024c-.112.4-.24.74-.393 1.066l.018-.042-.462.902c-.224.437-.444.804-.686 1.154l.022-.034q-.361.526-.894 1.247l-.202.072-.13-.144q-.216-2.265-.216-2.711c.013-1.062.125-2.089.328-3.083l-.018.105q.31-1.651.96-4.146t.75-2.928c-.294-.654-.466-1.418-.466-2.223 0-.076.002-.151.005-.226v.011c0-.851.279-1.636.75-2.27l-.007.01c.405-.635 1.106-1.051 1.904-1.053.027-.002.058-.002.09-.002.511 0 .969.226 1.279.584l.002.002c.306.378.492.864.492 1.394 0 .03-.001.059-.002.089v-.004c-.073 1.01-.3 1.946-.656 2.816l.022-.061c-.329.791-.555 1.707-.632 2.665l-.002.032c0 .014-.001.031-.001.048 0 .578.25 1.098.648 1.457l.002.002c.399.371.935.599 1.525.599.017 0 .033 0 .05-.001h-.002.024c.53 0 1.028-.134 1.464-.369l-.016.008c.455-.244.834-.574 1.126-.972l.006-.009c.292-.396.561-.846.787-1.32l.021-.05c.219-.455.408-.986.537-1.54l.011-.053c.106-.425.208-.968.28-1.52l.009-.08c.058-.429.092-.927.094-1.433v-.002c.005-.082.008-.177.008-.273 0-1.428-.61-2.714-1.583-3.611l-.003-.003c-1.034-.87-2.38-1.398-3.85-1.398-.094 0-.188.002-.281.006h.013c-.057-.002-.123-.003-.19-.003-1.799 0-3.431.713-4.629 1.872l.002-.002c-1.194 1.149-1.936 2.761-1.936 4.546 0 .067.001.134.003.201v-.01.012c0 .433.066.85.188 1.243l-.008-.03c.102.357.235.669.401.958l-.011-.021q.209.346.39.656c.088.125.151.273.179.433l.001.007c-.019.383-.097.742-.224 1.077l.008-.024q-.216.649-.534.649-.029 0-.245-.043c-.517-.158-.958-.438-1.304-.806l-.001-.002c-.368-.381-.666-.832-.87-1.332l-.01-.028c-.184-.439-.346-.961-.459-1.5l-.01-.058c-.099-.46-.157-.99-.159-1.533v-.002z" />
    </svg>
  );
};
const PinterestLogo = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="26px"
      height="26px"
      viewBox="0 0 112.198 112.198"
    >
      <g>
        <circle className="fill-[#CB2027]" cx="56.099" cy="56.1" r="56.098" />
        <g>
          <path
            className="fill-[#F1F2F2]"
            d="M60.627,75.122c-4.241-0.328-6.023-2.431-9.349-4.45c-1.828,9.591-4.062,18.785-10.679,23.588
        c-2.045-14.496,2.998-25.384,5.34-36.941c-3.992-6.72,0.48-20.246,8.9-16.913c10.363,4.098-8.972,24.987,4.008,27.596
        c13.551,2.724,19.083-23.513,10.679-32.047c-12.142-12.321-35.343-0.28-32.49,17.358c0.695,4.312,5.151,5.621,1.78,11.571
        c-7.771-1.721-10.089-7.85-9.791-16.021c0.481-13.375,12.018-22.74,23.59-24.036c14.635-1.638,28.371,5.374,30.267,19.14
        C85.015,59.504,76.275,76.33,60.627,75.122L60.627,75.122z"
          />
        </g>
      </g>
    </svg>
  );
};

const RedditSvg = () => {
  let fill = "fill-black group-hover:fill-[#ff4500]";
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9848 13.5C16.9848 14.2993 16.3368 14.9473 15.5374 14.9473C14.738 14.9473 14.09 14.2993 14.09 13.5C14.09 12.7006 14.738 12.0526 15.5374 12.0526C16.3368 12.0526 16.9848 12.7006 16.9848 13.5Z"
        className={fill}
      />
      <path
        d="M8.45738 14.9473C9.25674 14.9473 9.90475 14.2993 9.90475 13.5C9.90475 12.7006 9.25674 12.0526 8.45738 12.0526C7.65802 12.0526 7.01001 12.7006 7.01001 13.5C7.01001 14.2993 7.65802 14.9473 8.45738 14.9473Z"
        className={fill}
      />
      <path
        d="M8.85013 16.6288C8.49979 16.4078 8.03664 16.5127 7.81565 16.863C7.59466 17.2134 7.69951 17.6765 8.04985 17.8975L8.39477 18.1151C10.595 19.503 13.3971 19.503 15.5973 18.1151L15.9422 17.8975C16.2926 17.6765 16.3974 17.2134 16.1764 16.863C15.9554 16.5127 15.4923 16.4078 15.142 16.6288L14.797 16.8464C13.0857 17.9259 10.9064 17.9259 9.19505 16.8464L8.85013 16.6288Z"
        className={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.9605 1.75C19.0866 1.75 18.3245 2.22861 17.922 2.93801L14.3217 2.19949C13.9721 2.12777 13.6204 2.31236 13.4808 2.64083C13.07 3.60742 12.4535 5.07237 11.9393 6.32585C11.7573 6.76955 11.5873 7.18862 11.4435 7.55064C9.39709 7.63308 7.50064 8.16774 5.94951 9.03545C5.41473 8.14005 4.43607 7.53946 3.31579 7.53946C1.6226 7.53946 0.25 8.91206 0.25 10.6052C0.25 11.9006 1.0528 13.007 2.18741 13.4565C2.05646 13.9351 1.98682 14.4334 1.98682 14.9474C1.98682 17.0889 3.19585 18.9587 5.01221 20.2642C6.82975 21.5706 9.3027 22.3552 12 22.3552C14.6973 22.3552 17.1702 21.5706 18.9877 20.2642C20.8041 18.9587 22.0131 17.0889 22.0131 14.9474C22.0131 14.4334 21.9435 13.9351 21.8125 13.4565C22.9468 13.0072 23.75 11.9009 23.75 10.6052C23.75 8.91206 22.3774 7.53946 20.6842 7.53946C19.5639 7.53946 18.5852 8.14005 18.0505 9.03546C16.6243 8.23768 14.9063 7.72142 13.0482 7.57932C13.1358 7.36278 13.2295 7.13313 13.3271 6.89516C13.746 5.87394 14.2341 4.7095 14.6219 3.79229L17.64 4.41138C17.7957 5.55385 18.7753 6.43421 19.9605 6.43421C21.254 6.43421 22.3026 5.38561 22.3026 4.0921C22.3026 2.7986 21.254 1.75 19.9605 1.75ZM19.1184 4.0921C19.1184 3.62702 19.4954 3.25 19.9605 3.25C20.4256 3.25 20.8026 3.62702 20.8026 4.0921C20.8026 4.55719 20.4256 4.93421 19.9605 4.93421C19.4954 4.93421 19.1184 4.55719 19.1184 4.0921ZM12 9.03946C12.1543 9.03946 12.3075 9.04233 12.4596 9.048C12.4582 9.07685 12.4553 9.0982 12.4538 9.10845C12.4513 9.12529 12.4488 9.13703 12.4478 9.1415L12.4465 9.14739L12.4491 9.13787C12.4546 9.11926 12.4639 9.09007 12.478 9.04869C14.7024 9.13488 16.6791 9.81841 18.1123 10.8485C19.6485 11.9527 20.5131 13.4118 20.5131 14.9474C20.5131 16.4829 19.6485 17.942 18.1123 19.0462C16.5772 20.1495 14.4186 20.8552 12 20.8552C9.58135 20.8552 7.42272 20.1495 5.88766 19.0462C4.35141 17.942 3.48682 16.4829 3.48682 14.9474C3.48682 13.4118 4.35141 11.9527 5.88766 10.8485C7.42272 9.7452 9.58135 9.03946 12 9.03946ZM1.75 10.6052C1.75 9.74049 2.45103 9.03946 3.31579 9.03946C3.91282 9.03946 4.43322 9.37393 4.69734 9.86728C3.89802 10.4962 3.23394 11.2401 2.76317 12.071C2.17089 11.8476 1.75 11.2748 1.75 10.6052ZM21.2368 12.071C20.766 11.2401 20.1019 10.4962 19.3026 9.8673C19.5668 9.37394 20.0872 9.03946 20.6842 9.03946C21.549 9.03946 22.25 9.74049 22.25 10.6052C22.25 11.2746 21.8295 11.8475 21.2368 12.071Z"
        className={fill}
      />
    </svg>
  );
};

const EmailSvg = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 75.294 75.294"
    >
      <g>
        <path
          d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
   c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
   H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
   c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
   c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
   c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
   c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
        />
      </g>
    </svg>
  );
};
export {
  IndeedSvg,
  TuringSvg,
  LinkedInSvg,
  LinkinSvg,
  LeftArrow,
  SendSvg,
  DownloadSvg,
  PreviewSvg,
  GithubSvg,
  UnFavSvg,
  FavSvg,
  ArrowRight,
  Edit,
  CrossSvg,
  TwitterSvg,
  FBSvg,
  PinterestSvg,
  PinterestLogo,
  RedditSvg,
  EmailSvg,
};