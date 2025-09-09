import { useEffect } from "react";

function OrientationWarning({ onDismiss }) {
  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.orientation === 90 || window.orientation === -90) {
        onDismiss();
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    return () =>
      window.removeEventListener("orientationchange", handleOrientationChange);
  }, [onDismiss]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-[3000] p-4">
      <div className="text-center max-w-lg w-full bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-black/50 animate-fadeInUp">
        <div className="mb-8 text-blue-400 animate-float">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Rotar Dispositivo
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-4">
            Para una mejor experiencia, rota tu dispositivo a modo horizontal
            (landscape).
          </p>
          <p className="text-sm text-slate-500">
            La aplicación está optimizada para pantallas en orientación
            horizontal.
          </p>
        </div>

        <div className="mb-8">
          <button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl cursor-pointer transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40"
            onClick={onDismiss}
          >
            Continuar de Todas Formas
          </button>
        </div>

        <div className="mb-8 p-6 bg-blue-900/10 rounded-xl border border-blue-500/20">
          <div>
            <h2 className="text-xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              COTECMAR
            </h2>
            <p className="text-sm text-slate-400 font-medium">
              Recorrido Virtual 360°
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="text-blue-400 animate-rotate">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <rect
                x="5"
                y="2"
                width="14"
                height="20"
                rx="2"
                ry="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="12"
                y1="18"
                x2="12.01"
                y2="18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-emerald-400 animate-bounce">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M1 4V10H7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 20V14H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14L18.36 18.36A9 9 0 0 1 3.51 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrientationWarning;
