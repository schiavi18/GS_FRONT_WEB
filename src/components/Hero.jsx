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

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={onSearchFocus}
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 text-center"
              >
                Começar a explorar
              </button>
              <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 border border-light-border dark:border-dark-border text-light-text dark:text-dark-text font-semibold rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors text-center">
                Saiba mais
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-light-border dark:border-dark-border">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-brand-primary">{totalProfiles}+</div>
                <div className="text-xs sm:text-sm text-light-muted dark:text-dark-muted">Profissionais</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-brand-secondary">50+</div>
                <div className="text-sm text-light-muted dark:text-dark-muted">Áreas</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-brand-accent">100%</div>
                <div className="text-sm text-light-muted dark:text-dark-muted">Verificados</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-3xl"></div>
              
              {/* Card Stack */}
              <div className="relative space-y-4">
                <div className="bg-light-surface dark:bg-dark-surface rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border border-light-border dark:border-dark-border">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary"></div>
                    <div>
                      <div className="font-semibold text-light-text dark:text-dark-text">Desenvolvimento</div>
                      <div className="text-sm text-light-muted dark:text-dark-muted">2.5K profissionais</div>
                    </div>
                  </div>
                </div>

                <div className="bg-light-surface dark:bg-dark-surface rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border border-light-border dark:border-dark-border ml-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-secondary to-brand-accent"></div>
                    <div>
                      <div className="font-semibold text-light-text dark:text-dark-text">Design</div>
                      <div className="text-sm text-light-muted dark:text-dark-muted">1.8K profissionais</div>
                    </div>
                  </div>
                </div>

                <div className="bg-light-surface dark:bg-dark-surface rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border border-light-border dark:border-dark-border">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary"></div>
                    <div>
                      <div className="font-semibold text-light-text dark:text-dark-text">Gestão</div>
                      <div className="text-sm text-light-muted dark:text-dark-muted">1.5K profissionais</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
