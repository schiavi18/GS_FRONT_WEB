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