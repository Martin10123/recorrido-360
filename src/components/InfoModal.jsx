import { useEffect, useRef } from "react";

function InfoModal({ content, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[2000] p-4 animate-fadeIn">
      <div
        className="bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl shadow-black/50 animate-slideUp"
        ref={modalRef}
      >
        <div className="flex justify-between items-center p-6 border-b border-blue-500/20">
          <h2 className="text-xl font-semibold text-slate-200">
            Información Detallada
          </h2>
          <button
            className="p-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 cursor-pointer transition-all duration-300 hover:bg-red-500/20 hover:border-red-500/50"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
          {content.image && (
            <div className="mb-6 rounded-xl overflow-hidden border border-blue-500/20">
              <img
                src={content.image}
                alt="Información"
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          )}

          <div>
            <p className="text-base leading-relaxed text-slate-200 mb-6">
              {content.text}
            </p>

            {content.details && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                  Detalles Técnicos
                </h3>
                <ul className="space-y-2">
                  {content.details.map((detail, index) => (
                    <li
                      key={index}
                      className="py-2 border-b border-blue-500/10 text-slate-400 last:border-b-0"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.specifications && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                  Especificaciones
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(content.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between p-3 bg-blue-900/10 rounded-lg border border-blue-500/20"
                      >
                        <span className="font-medium text-slate-400">
                          {key}:
                        </span>
                        <span className="font-semibold text-slate-200">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-blue-500/20 flex justify-end">
          <button
            className="px-6 py-3 bg-slate-600/10 border border-slate-600/30 rounded-lg text-slate-400 font-medium cursor-pointer transition-all duration-300 hover:bg-slate-600/20 hover:border-slate-600/50 hover:text-slate-200"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
