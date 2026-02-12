import { useState, useEffect } from "react";
import panda from "./assets/panda.png";

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "72%",
    left: "60%",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState([]);

  const moveNoButton = () => {
    const newTop = Math.random() * 75 + 10;
    const newLeft = Math.random() * 75 + 10;
    setNoButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  // Floating hearts animation
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      const left = Math.random() * 100;
      setHearts((prev) => [...prev, { id, left }]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 5000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-serif">
      {/* Romantic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400"></div>

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-500 text-2xl animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: "-20px",
          }}
        >
          💖
        </div>
      ))}

      {/* ================== FIRST SCREEN ================== */}
      {!showMessage ? (
        <div className="relative z-10 w-[92%] max-w-2xl">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl px-16 py-14 text-center border border-pink-200">
            
            {/* Panda */}
            <div className="flex justify-center mb-6">
              <img
                src={panda}
                alt="romantic panda"
                className="w-40 drop-shadow-xl animate-bounce"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
              Will you be my Valentine? 💌
            </h1>

            <div className="flex justify-center gap-12 relative">
              {/* YES BUTTON */}
              <button
                onClick={() => setShowMessage(true)}
                className="
                px-20 py-6
                text-3xl md:text-4xl
                font-extrabold
                text-white
                rounded-full
                bg-gradient-to-r from-pink-500 via-rose-500 to-red-500
                shadow-[0_20px_60px_rgba(255,0,120,0.6)]
                hover:scale-110
                hover:shadow-[0_25px_80px_rgba(255,0,120,0.9)]
                active:scale-95
                transition-all duration-300
                "
              >
                YES 💖
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ================== LOVE LETTER SCREEN ================== */
        <div className="relative z-10 w-[92%] max-w-3xl">
          <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl px-10 md:px-16 py-12 text-left border border-pink-200 max-h-[80vh] overflow-y-auto">

            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6 text-center animate-pulse">
              Hey Bubu 💌
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Sometimes I catch myself smiling for no clear reason,
              and later I realize it’s because of a thought of you.
              I thought you should know that.
              <br /><br />

              You’re gorgeous… but honestly, that’s the least interesting thing about you.
              Of course you are beautiful and anyone with eyes can see that.
              But what I see in you takes attention… it takes knowing you.
              And that’s the part that makes you unforgettable.
              <br /><br />

              I found your beauty lies in the change of tone when you talk about something you really care about.
              Maybe you don’t realize it… but I do. 🙂
              <br /><br />

              I like everything about you — even the things you hate to admit.
              <br /><br />

              Maybe you are a forest of secrets.
              I didn’t want a map…
              I just came with the intention of getting lost in you.
              <br /><br />

              I don’t want to find an exit.
              I want to build a home in your wild.
              <br /><br />

              Now… these aren’t confessions.
              But it’s February 14 today…
              and I strongly believe that{" "}
              <span className="font-bold text-pink-600">I am 1 4 you.</span>
              <br /><br />

              So please decode this:
              <span className="block text-3xl font-extrabold text-center text-rose-500 mt-4">
                5201314
              </span>

              <br />

              And if you did…
              <span className="block text-center text-2xl font-bold text-pink-600 mt-6">
                I love you for a lifetime 💖
              </span>
            </p>

            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowMessage(false)}
                className="px-14 py-4 text-xl font-bold text-white rounded-full
                bg-gradient-to-r from-pink-500 via-rose-500 to-red-500
                shadow-[0_15px_50px_rgba(255,0,120,0.5)]
                hover:scale-110 transition-all duration-300"
              >
                Read Again 💘
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NO BUTTON */}
      {!showMessage && (
        <button
          onMouseEnter={moveNoButton}
          className="absolute z-20 px-10 py-4 text-xl font-semibold text-white rounded-full
          bg-gradient-to-r from-gray-500 to-gray-700
          shadow-lg hover:scale-105 transition-all duration-200"
          style={{
            top: noButtonPosition.top,
            left: noButtonPosition.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          No 😅
        </button>
      )}

      {/* Floating Animation CSS */}
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-120vh); opacity: 0; }
          }

          .animate-float {
            animation: floatUp 5s linear forwards;
          }
        `}
      </style>
    </div>
  );
}

export default App;
