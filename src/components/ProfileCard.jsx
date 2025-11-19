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
      {/* Profile Image */}
      <div className="mb-2 sm:mb-3 overflow-hidden rounded-lg">
        <img
          src={p.foto}
          alt={p.nome}
          className="w-full h-32 sm:h-40 object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>

      {/* Location */}
      <div className="flex items-center gap-1 text-xs sm:text-sm text-light-muted dark:text-dark-muted mb-2">
        <span>📍</span>
        <span className="line-clamp-1">{p.localizacao}</span>
      </div>

      {/* Area Badge */}
      <div className="mb-2 sm:mb-3">
        <span className="badge-secondary text-xs">
          {p.area}
        </span>
      </div>

      {/* Skills */}
      <div className="mb-2 sm:mb-3">
        <div className="flex flex-wrap gap-1">
          {p.habilidadesTecnicas.slice(0, 3).map((h, i) => (
            <span
              key={i}
              className="badge bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs"
            >
              {h}
            </span>
          ))}
          {p.habilidadesTecnicas.length > 3 && (
            <span className="badge bg-gray-100 dark:bg-gray-800 text-light-muted dark:text-dark-muted text-xs">
              +{p.habilidadesTecnicas.length - 3}
            </span>
          )}
        </div>
      </div>
      {/* Summary */}
      <p className="text-xs sm:text-sm text-light-text dark:text-dark-text line-clamp-2 mb-2 sm:mb-3">
        {p.resumo}
      </p>

      {/* Click Hint */}
      <div className="text-xs text-brand-primary font-medium">
        Ver perfil completo →
      </div>
    </div>
  )
}
