import { useEffect, useState } from "react";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Cargando...");

  useEffect(() => {
    const loadingMessages = [
      "Inicializando recorrido virtual...",
      "Cargando escenas 360°...",
      "Preparando hotspots interactivos...",
      "Configurando controles de navegación...",
      "Finalizando configuración...",
    ];

    let currentMessageIndex = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });

      // Update loading text
      if (currentMessageIndex < loadingMessages.length - 1) {
        setLoadingText(loadingMessages[currentMessageIndex]);
        currentMessageIndex++;
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-[4000] p-4">
      <div className="text-center max-w-2xl w-full bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-black/50 animate-fadeInUp">
        <div className="mb-12">
          <div className="mb-6 text-blue-400 animate-float">
            <svg
              width="120"
              height="120"
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
          <h1 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight">
            COTECMAR
          </h1>
          <p className="text-lg text-slate-400 font-medium">
            Recorrido Virtual 360°
          </p>
        </div>

        <div className="mb-12">
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-10 h-10 border-3 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
            <div
              className="w-10 h-10 border-3 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-10 h-10 border-3 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>

          <div className="mb-6">
            <p className="text-lg text-slate-200 font-medium mb-6">
              {loadingText}
            </p>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <div className="w-48 h-2 bg-blue-900/30 rounded-full overflow-hidden border border-blue-500/20">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/50"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-slate-400 font-semibold min-w-[40px]">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 bg-blue-900/10 rounded-lg border border-blue-500/20 text-slate-400 text-sm font-medium">
            <div className="text-xl">🌊</div>
            <span>19 Escenas Panorámicas</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-900/10 rounded-lg border border-blue-500/20 text-slate-400 text-sm font-medium">
            <div className="text-xl">🎯</div>
            <span>Hotspots Interactivos</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-900/10 rounded-lg border border-blue-500/20 text-slate-400 text-sm font-medium">
            <div className="text-xl">🗺️</div>
            <span>Mapa de Navegación</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-900/10 rounded-lg border border-blue-500/20 text-slate-400 text-sm font-medium">
            <div className="text-xl">📱</div>
            <span>Diseño Responsive</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
