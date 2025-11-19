import React from 'react'

export default function ProfileModal({ p, onClose, isFavorite, onToggleFavorite }) {
  if (!p) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-4 animate-fadeIn">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="relative card max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto z-10 animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border p-3 sm:p-4 md:p-6 flex justify-between items-center gap-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-light-text dark:text-dark-text truncate">{p.nome}</h2>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleFavorite(p.id)
              }}
              className="text-2xl sm:text-3xl transition-colors duration-200"
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
            <button
              onClick={onClose}
              className="text-xl sm:text-2xl text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
        {/* Content */}
        <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <img
              src={p.foto}
              alt={p.nome}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-brand-primary mx-auto sm:mx-0"
            />
            <div className="flex-1">
              <p className="text-base sm:text-lg font-semibold text-brand-primary mb-2 text-center sm:text-left">{p.cargo}</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-light-muted dark:text-dark-muted mb-3">
                <span>📍</span>
                <span>{p.localizacao}</span>
              </div>
              <p className="text-sm sm:text-base text-light-text dark:text-dark-text mb-4 text-center sm:text-left">{p.resumo}</p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button className="btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span>👍</span>
                  Recomendar
                </button>
                <button className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span>💬</span>
                  Enviar mensagem
                </button>
              </div>
            </div>
          </div>

          {/* Area Badge */}
          <div>
            <span className="badge-secondary">{p.area}</span>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-light-text dark:text-dark-text">
              Habilidades Técnicas
            </h3>
            <div className="flex flex-wrap gap-2">
              {p.habilidadesTecnicas.map((h, i) => (
                <span
                  key={i}
                  className="badge bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>