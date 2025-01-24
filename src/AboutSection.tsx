import React from "react";
import profile2 from "/public/assets/pageImg/profile2.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function AboutSection() {
  return (
    <section id="About">
      <div className="flex flex-col sm:flex-row md:flex-row m-0 sm:m-30 md:m-40 border-y-black shadow-xl bg-gray-900 bg-opacity-70 px-8 py-5 sm:px-20 md:px-20">
        <div className="flex flex-col flex-grow-0">
          <div className="myProfileImg flex flex-1 justify-center">
            <LazyLoadImage
              effect="blur"
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: "0.3s" }, // Adjust transition delay
              }}
              src={profile2}
              className="profile1"
              width="340"
              height="340"
              alt=""
            />
          </div>
          <div className="mysocialMedia flex flex-col justify-center space-y-4 mx-16 my-10">
            <div className="flex flex-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="fill-white group-hover:fill-pink-700"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8">
                </path>
              </svg>
              <a
                href="https://github.com/reqbahrf"
                target="_blank"
                className="text-white ps-5 group-hover:text-pink-700"
              >
                GitHub
              </a>
            </div>
            <div className="flex flex-1 group">
              <svg
                version="1.1"
                width="30"
                height="30"
                viewBox="0 0 256 256"
                className="fill-white group-hover:fill-pink-700"
              >
                <defs></defs>
                <g
                  className="group-hover:fill-pink-700"
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 42 38.227 h -6.773 c -3.734 0 -6.772 3.038 -6.772 6.773 c 0 3.734 3.038 6.772 6.772 6.772 H 42 V 38.227 z"
                    className="group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 4,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 45 0 L 45 0 C 20.147 0 0 20.147 0 45 v 0 c 0 24.853 20.147 45 45 45 h 0 c 24.853 0 45 -20.147 45 -45 v 0 C 90 20.147 69.853 0 45 0 z M 67.546 45 c 0 7.043 -5.73 12.772 -12.773 12.772 c -2.489 0 -4.806 -0.727 -6.772 -1.963 v 8.736 c 0 7.043 -5.73 12.772 -12.773 12.772 s -12.772 -5.729 -12.772 -12.772 c 0 -3.919 1.778 -7.428 4.565 -9.773 c -2.787 -2.345 -4.565 -5.854 -4.565 -9.773 c 0 -3.919 1.778 -7.428 4.565 -9.773 c -2.787 -2.345 -4.565 -5.853 -4.565 -9.773 c 0 -7.043 5.729 -12.773 12.772 -12.773 H 45 h 9.772 c 7.043 0 12.773 5.73 12.773 12.773 c 0 3.919 -1.778 7.428 -4.565 9.773 C 65.768 37.572 67.546 41.081 67.546 45 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 4,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,

                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 42 18.682 h -6.773 c -3.734 0 -6.772 3.039 -6.772 6.773 s 3.038 6.772 6.772 6.772 H 42 V 18.682 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 4,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,

                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 28.455 64.546 c 0 3.734 3.038 6.772 6.772 6.772 S 42 68.28 42 64.546 v -6.773 h -6.773 C 31.493 57.772 28.455 60.811 28.455 64.546 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 4,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,

                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 61.546 25.455 c 0 -3.734 -3.038 -6.773 -6.773 -6.773 H 48 v 13.545 h 6.772 C 58.508 32.227 61.546 29.189 61.546 25.455 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 4,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,

                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 48 45 c 0 3.734 3.038 6.772 6.772 6.772 c 3.735 0 6.773 -3.038 6.773 -6.772 c 0 -3.735 -3.038 -6.773 -6.773 -6.773 C 51.038 38.227 48 41.265 48 45 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 4,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,

                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                </g>
              </svg>
              <a
                href="https://www.figma.com/@reanzarthuramon"
                target="_blank"
                className="text-white ps-5 group-hover:text-pink-700"
              >
                Figma
              </a>
            </div>
            <div className="flex flex-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="30"
                height="30"
                viewBox="0 0 256 256"
                className="group-hover:fill-pink-700"
              >
                <defs></defs>
                <g
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 58.938 41.512 c -1.498 0 -2.655 0.431 -3.476 1.278 c -0.827 0.845 -1.342 1.995 -1.553 3.45 h 10.04 v 0 c -0.109 -1.549 -0.626 -2.721 -1.557 -3.522 C 61.468 41.915 60.314 41.512 58.938 41.512 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 37.047 40.939 c 0.842 -0.513 1.262 -1.425 1.262 -2.735 c 0 -1.447 -0.556 -2.408 -1.671 -2.87 c -0.958 -0.321 -2.185 -0.487 -3.672 -0.487 h -5.79 v 6.863 h 6.583 C 35.111 41.71 36.205 41.453 37.047 40.939 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,

                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 36.964 47.388 c -0.737 -0.341 -1.777 -0.515 -3.111 -0.527 h -6.678 v 8.291 h 6.574 c 1.351 0 2.396 -0.177 3.151 -0.546 c 1.361 -0.678 2.043 -1.969 2.043 -3.885 C 38.943 49.105 38.282 47.988 36.964 47.388 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 c 24.853 0 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 52.625 30.735 h 12.529 v 3.112 h -0.001 H 52.625 V 30.735 z M 44.115 56.129 c -0.589 0.968 -1.321 1.785 -2.201 2.444 c -0.99 0.761 -2.163 1.283 -3.511 1.562 c -1.352 0.279 -2.816 0.42 -4.393 0.42 H 20 V 29.445 h 15.025 c 3.787 0.062 6.472 1.159 8.058 3.314 c 0.951 1.322 1.423 2.907 1.423 4.751 c 0 1.902 -0.477 3.424 -1.438 4.58 c -0.534 0.648 -1.324 1.238 -2.369 1.77 c 1.583 0.579 2.784 1.492 3.587 2.748 c 0.808 1.252 1.212 2.772 1.212 4.557 C 45.497 53.011 45.042 54.667 44.115 56.129 z M 69.994 50.084 H 53.769 c 0.089 2.24 0.863 3.806 2.329 4.702 c 0.884 0.562 1.956 0.837 3.212 0.837 c 1.324 0 2.403 -0.335 3.233 -1.023 c 0.453 -0.365 0.852 -0.879 1.197 -1.529 h 5.947 c -0.156 1.323 -0.872 2.664 -2.159 4.028 c -1.994 2.167 -4.79 3.253 -8.381 3.253 c -2.967 0 -5.581 -0.916 -7.85 -2.742 c -2.262 -1.832 -3.398 -4.804 -3.398 -8.927 c 0 -3.866 1.02 -6.825 3.066 -8.885 c 2.054 -2.064 4.705 -3.091 7.972 -3.091 c 1.937 0 3.683 0.346 5.24 1.042 c 1.553 0.697 2.836 1.793 3.847 3.3 c 0.915 1.327 1.503 2.862 1.777 4.609 C 69.953 46.677 70.022 48.154 69.994 50.084 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                </g>
              </svg>
              <a
                href="https://www.behance.net/reanzamonera"
                target="_blank"
                className="text-white ps-5 group-hover:text-pink-700"
              >
                Behance
              </a>
            </div>
            <div className="flex flex-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="fill-white group-hover:fill-pink-700"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951">
                </path>
              </svg>
              <a
                href="https://www.facebook.com/profile.php?id=100008998324688"
                target="_blank"
                className="text-white ps-5 group-hover:text-pink-700"
              >
                Facebook
              </a>
            </div>
            <div className="flex flex-1 group">
              <svg
                version="1.1"
                width="30"
                height="30"
                viewBox="0 0 256 256"
                className="group-hover:fill-pink-700"
              >
                <defs></defs>
                <g
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 60.961 31.655 c 0 -1.437 -1.165 -2.602 -2.602 -2.602 c -1.437 0 -2.602 1.165 -2.602 2.602 c 0 1.437 1.165 2.602 2.602 2.602 C 59.797 34.256 60.961 33.092 60.961 31.655 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 45 33.079 c -6.584 0 -11.921 5.337 -11.921 11.921 c 0 1.646 0.334 3.214 0.937 4.64 c 0.603 1.426 1.476 2.711 2.555 3.789 c 2.157 2.157 5.138 3.492 8.43 3.492 c 3.292 0 6.272 -1.334 8.43 -3.492 c 1.079 -1.079 1.952 -2.363 2.555 -3.789 c 0.603 -1.426 0.937 -2.994 0.937 -4.64 C 56.921 38.416 51.584 33.079 45 33.079 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                  <path
                    d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 c 24.853 0 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 70 55.238 C 70 63.391 63.391 70 55.238 70 H 34.762 C 26.609 70 20 63.391 20 55.238 V 34.762 c 0 -3.057 0.929 -5.897 2.521 -8.253 C 25.174 22.582 29.666 20 34.762 20 h 20.477 c 5.095 0 9.588 2.582 12.241 6.508 C 69.071 28.864 70 31.704 70 34.762 V 55.238 z"
                    className="fill-white group-hover:fill-pink-700"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,

                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  >
                  </path>
                </g>
              </svg>
              <a
                href="https://www.instagram.com/reanz_arthur/"
                target="_blank"
                className="text-white ps-5 group-hover:text-pink-700"
              >
                Instagram
              </a>
            </div>
            <hr />
            <div className="flex flex-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="fill-white group-hover:fill-pink-700"
              >
                <path d="M26.997,13.747c0,4.538-2.205,7.347-5.795,7.347c-1.859,0-3.186-0.807-3.575-2.175h-0.274 c-0.591,1.455-1.715,2.19-3.373,2.19c-2.998,0-4.987-2.42-4.987-6.079c0-3.501,1.917-5.863,4.771-5.863 c1.557,0,2.782,0.749,3.359,2.046h0.274v-1.7h3.315v7.318c0,1.023,0.461,1.628,1.24,1.628c1.268,0,2.076-1.685,2.076-4.365 c0-5.215-3.416-8.557-8.735-8.557c-5.55,0-9.326,3.89-9.326,9.551c0,5.733,3.805,9.321,9.917,9.321 c1.326,0,2.695-0.173,3.445-0.403v2.564C18.291,26.842,16.936,27,15.566,27C8.028,27,2.997,22.203,2.997,15.014 C2.997,7.912,8.042,3,15.336,3C22.284,3,26.997,7.351,26.997,13.747z M12.784,15.13c0,1.873,0.778,2.996,2.09,2.996 c1.326,0,2.133-1.138,2.133-2.996s-0.822-2.996-2.133-2.996S12.784,13.257,12.784,15.13z">
                </path>
              </svg>
              <a
                href="mailto:reqbahrf@gmail.com"
                className="text-white ps-5 group-hover:text-pink-700"
              >
                reqbahrf@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="intro flex flex-col flex-grow w-auto m-5 sm:m-12 md:m-12">
          <div className="text-white text-3xl font-semibold my-4">
            I&apos;m Reanz Arthur Antone Monera
          </div>
          <div className="text-white text-lg mb-7 indent-8 text-justify">
            I am a 4th year student at the Davao del Norte State College in the
            Philippines taking up Bachelor of Science in Information System. I
            am a self-taught web developer and a graphic designer. I am
            passionate about creating and designing websites and applications. I
            am currently looking for an internship or a part-time job to further
            enhance my skills and knowledge in the field of web development.
          </div>
          <div className="text-white text-lg mb-7 indent-8 text-justify">
            In addition to web development and graphic design, I have a keen
            interest in photo editing and space exploration. Photo editing
            allows me to express my creativity and attention to detail, while my
            fascination with space exploration fuels my curiosity about the
            universe and its mysteries. These hobbies not only provide me with a
            well-rounded skill set but also inspire me to think beyond
            conventional boundaries and continuously seek new knowledge and
            experiences.
          </div>
          <div className="text-white text-lg mb-7 indent-8 text-justify">
            My enthusiasm for this fields drives me to continually improve my
            skills and stay updated with the latest industry trends.
          </div>
        </div>
      </div>
    </section>
  );
}
