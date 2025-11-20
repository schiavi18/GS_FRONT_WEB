import React, { useState, useMemo } from 'react'

export default function SearchBar({ 
  query, 
  onQueryChange, 
  filterArea, 
  onAreaChange, 
  filterCity, 
  onCityChange,
  filterTech,
  onTechChange,
  profiles 
}) {
  const [showTechDropdown, setShowTechDropdown] = useState(false)

  const areas = useMemo(() => 
    Array.from(new Set(profiles.map(p => p.area))).sort(),
    [profiles]
  )

  const cities = useMemo(() => 
    Array.from(new Set(profiles.map(p => p.localizacao))).sort(),
    [profiles]
  )

  const technologies = useMemo(() => {
    const techs = new Set()
    profiles.forEach(p => {
      p.habilidadesTecnicas.forEach(t => techs.add(t))
    })
    return Array.from(techs).sort()
  }, [profiles])

  const hasActiveFilters = query || filterArea || filterCity || filterTech

  return (
    <div className="space-y-4 animate-slideUp">
      {/* Search Input */}
      <div className="relative">
        <svg className="absolute left-3 top-3 w-5 h-5 text-light-muted dark:text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Buscar por nome, cargo, skill..."
          className="input-field w-full pl-10"
        />
      </div>

      {/* Filters Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {/* Area Filter */}
        <select
          value={filterArea}
          onChange={(e) => onAreaChange(e.target.value)}
          className="input-field text-sm"
        >
          <option value="">Todas as áreas</option>
          {areas.map(a => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>

        {/* City Filter */}
        <select
          value={filterCity}
          onChange={(e) => onCityChange(e.target.value)}
          className="input-field text-sm"
        >
          <option value="">Todas as cidades</option>
          {cities.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Technology Filter */}
        <div className="relative">
          <select
            value={filterTech}
            onChange={(e) => onTechChange(e.target.value)}
            className="input-field text-sm w-full"
          >
            <option value="">Todas as tecnologias</option>
            {technologies.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={() => {
              onQueryChange('')
              onAreaChange('')
              onCityChange('')
              onTechChange('')
            }}
            className="btn-secondary text-sm"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {query && (
            <span className="badge-primary">
              Busca: {query}
              <button onClick={() => onQueryChange('')} className="ml-2">✕</button>
            </span>
          )}
          {filterArea && (
            <span className="badge-primary">
              Área: {filterArea}
              <button onClick={() => onAreaChange('')} className="ml-2">✕</button>
            </span>
          )}
          {filterCity && (
            <span className="badge-primary">
              Cidade: {filterCity}
              <button onClick={() => onCityChange('')} className="ml-2">✕</button>
            </span>
          )}
          {filterTech && (
            <span className="badge-primary">
              Tech: {filterTech}
              <button onClick={() => onTechChange('')} className="ml-2">✕</button>
            </span>
          )}
        </div>
      )}
    </div>
  )
}
