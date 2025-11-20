import React from 'react'

export default function Header({ dark, onToggleDark }) {
  return (
    <header className="sticky top-0 z-50 bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo e Branding */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-lg">NU</span>
          </div>
          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-bold text-light-text dark:text-dark-text">
              NetworkUP
            </h1>
            <p className="hidden sm:block text-xs text-light-muted dark:text-dark-muted">
              Rede Profissional
            </p>
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={onToggleDark}
          className="p-2 sm:p-2.5 rounded-lg bg-light-border dark:bg-dark-border hover:bg-light-muted dark:hover:bg-dark-muted transition-colors text-lg sm:text-xl"
          title={dark ? 'Modo claro' : 'Modo escuro'}
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}
