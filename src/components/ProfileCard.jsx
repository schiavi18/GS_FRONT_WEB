import React, { useState } from 'react'

export default function ProfileCard({ p, onOpen, isFavorite, onToggleFavorite }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="card p-3 sm:p-4 cursor-pointer animate-slideUp hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
      onClick={() => onOpen(p)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header favoritar */}
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-bold text-light-text dark:text-dark-text line-clamp-1">
            {p.nome}
          </h3>
          <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted">
            {p.cargo}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorite(p.id)
          }}
          className="ml-1 sm:ml-2 text-lg sm:text-xl transition-colors duration-200 flex-shrink-0"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>