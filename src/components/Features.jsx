import React from 'react'

export default function Features() {
  const features = [
    {
      icon: '🔍',
      title: 'Busca Inteligente',
      description: 'Encontre profissionais por nome, cargo, habilidades ou tecnologias específicas'
    },
    {
      icon: '⭐',
      title: 'Favoritos',
      description: 'Marque seus profissionais favoritos e acesse-os rapidamente'
    },
    {
      icon: '🏷️',
      title: 'Filtros Avançados',
      description: 'Filtre por área, cidade e tecnologia para encontrar o perfil ideal'
    },
    {
      icon: '📊',
      title: 'Perfis Completos',
      description: 'Veja experiência, formação, certificações e projetos de cada profissional'
    },
    {
      icon: '💬',
      title: 'Conectar',
      description: 'Envie mensagens e recomendações para profissionais que interessam'
    },
    {
      icon: '🌙',
      title: 'Modo Escuro',
      description: 'Alterne entre temas claro e escuro para melhor conforto visual'
    }
  ]
   return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text">
            Recursos Poderosos
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto px-4">
            Ferramentas completas para encontrar e conectar com os melhores profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="font-bold text-base sm:text-lg text-light-text dark:text-dark-text mb-2">
                {feature.title}
              </h4>
              <p className="text-sm sm:text-base text-light-muted dark:text-dark-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}