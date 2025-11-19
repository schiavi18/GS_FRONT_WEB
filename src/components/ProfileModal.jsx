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