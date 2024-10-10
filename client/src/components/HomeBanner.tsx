export default function HomeBanner() {
  return (
    <div className="h-screen w-screen relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
        className="w-full h-full"
        alt=""
      />
      <div className="absolute h-full w-full bg-black bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white font-bold text-5xl">
            Unlimited Movies, TV Shows and more
          </h1>
          <p className="text-white text-3xl mt-3">
            Watch anywhere, Cancel Anytime
          </p>
          <div className="mt-8">
            <a
              href="/login"
              className="bg-red-700 mt-8 text-white p-4 px-16 text-lg rounded font-semibold"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
