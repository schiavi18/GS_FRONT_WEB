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
          {/* Soft Skills */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-light-text dark:text-dark-text">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {p.softSkills.map((s, i) => (
                <span
                  key={i}
                  className="badge bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-light-text dark:text-dark-text">
              Experiência Profissional
            </h3>
            <div className="space-y-4">
              {p.experiencias.map((e, i) => (
                <div key={i} className="border-l-4 border-brand-primary pl-4">
                  <p className="font-semibold text-light-text dark:text-dark-text">
                    {e.cargo}
                  </p>
                  <p className="text-sm text-light-muted dark:text-dark-muted">
                    {e.empresa}
                  </p>
                  <p className="text-xs text-light-muted dark:text-dark-muted mb-2">
                    {e.inicio} → {e.fim}
                  </p>
                  <p className="text-sm text-light-text dark:text-dark-text">
                    {e.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          {p.formacao && p.formacao.length > 0 && (
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-light-text dark:text-dark-text">
                Formação Acadêmica
              </h3>
              <div className="space-y-3">
                {p.formacao.map((f, i) => (
                  <div key={i} className="border-l-4 border-brand-secondary pl-4">
                    <p className="font-semibold text-light-text dark:text-dark-text">
                      {f.curso}
                    </p>
                    <p className="text-sm text-light-muted dark:text-dark-muted">
                      {f.instituicao}
                    </p>
                    <p className="text-xs text-light-muted dark:text-dark-muted">
                      {f.ano}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {p.certificacoes && p.certificacoes.length > 0 && (
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-light-text dark:text-dark-text">
                Certificações
              </h3>
              <ul className="space-y-2">
                {p.certificacoes.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-light-text dark:text-dark-text">
                    <span className="text-brand-success">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Languages */}
          {p.idiomas && p.idiomas.length > 0 && (
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-light-text dark:text-dark-text">
                Idiomas
              </h3>
              <div className="space-y-2">
                {p.idiomas.map((lang, i) => (
                  <div key={i} className="flex justify-between text-light-text dark:text-dark-text">
                    <span>{lang.idioma}</span>
                    <span className="text-brand-primary font-medium">{lang.nivel}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {p.areaInteresses && p.areaInteresses.length > 0 && (
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-light-text dark:text-dark-text">
                Áreas de Interesse
              </h3>
              <div className="flex flex-wrap gap-2">
                {p.areaInteresses.map((interest, i) => (
                  <span
                    key={i}
                    className="badge bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {p.projetos && p.projetos.length > 0 && (
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-light-text dark:text-dark-text">
                Projetos
              </h3>
              <div className="space-y-3">
                {p.projetos.map((proj, i) => (
                  <div key={i} className="card p-4">
                    <p className="font-semibold text-light-text dark:text-dark-text mb-1">
                      {proj.titulo}
                    </p>
                    <p className="text-sm text-light-muted dark:text-dark-muted mb-2">
                      {proj.descricao}
                    </p>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:underline text-sm font-medium"
                    >
                      Ver projeto →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button className="btn-secondary flex-1 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span>👍</span>
            Recomendar
          </button>
          <button className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span>💬</span>
            Enviar mensagem
          </button>
          <button
            onClick={onClose}
            className="btn-secondary flex-1 text-sm sm:text-base"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}