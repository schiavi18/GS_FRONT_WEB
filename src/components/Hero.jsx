import React from 'react'

export default function Hero({ totalProfiles, onSearchFocus }) {
  return (
    <section className="bg-gradient-to-br from-light-surface via-light-bg to-light-surface dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-4 sm:space-y-6 animate-slideUp">
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs sm:text-sm font-semibold">
                 Conecte-se com profissionais
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text leading-tight">
                Descubra o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">futuro do trabalho</span>
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-light-muted dark:text-dark-muted leading-relaxed">
                Explore uma comunidade de {totalProfiles} profissionais talentosos de diferentes áreas. Encontre especialistas, colaboradores e mentores para impulsionar sua carreira.
              </p>
            </div>
