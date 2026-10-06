const asset = (p) => import.meta.env.BASE_URL + p

// Échelle utilisée pour la barre « perte estimée » (kg)
export const LOSS_SCALE = 22

export const products = [
  { id: '5', num: '5', dose: '5 mg', price: 250, loss: '7 à 10 kg', lossMin: 7, lossMax: 10, image: asset('img/mounjaro-5mg.png'), color: '#1e2a78', totalMg: 20, tag: 'Premier palier' },
  { id: '7-5', num: '7,5', dose: '7,5 mg', price: 280, loss: '10 à 13 kg', lossMin: 10, lossMax: 13, image: asset('img/mounjaro-7-5mg.png'), color: '#0b7a7c', totalMg: 30, tag: '' },
  { id: '10', num: '10', dose: '10 mg', price: 320, loss: '12 à 15 kg', lossMin: 12, lossMax: 15, image: asset('img/mounjaro-10mg.png'), color: '#c81e66', totalMg: 40, tag: '' },
  { id: '12-5', num: '12,5', dose: '12,5 mg', price: 380, loss: '15 à 18 kg', lossMin: 15, lossMax: 18, image: asset('img/mounjaro-12-5mg.png'), color: '#1f6fd1', totalMg: 50, tag: '' },
  { id: '15', num: '15', dose: '15 mg', price: 430, loss: '18 à 22 kg', lossMin: 18, lossMax: 22, image: asset('img/mounjaro-15mg.png'), color: '#d9461f', totalMg: 60, tag: 'Dose maximale' }
]

// Informations communes à tous les dosages (d'après les notices fournies)
export const productInfo = {
  usage: [
    'Une injection sous-cutanée par semaine, le même jour chaque semaine, avec ou sans repas.',
    'Injectez sous la peau de l’abdomen (à au moins 5 cm du nombril), de la cuisse ou du haut du bras. Changez de site chaque semaine.',
    'Schéma habituel : 2,5 mg par semaine, puis 5 mg après 4 semaines, puis paliers de 2,5 mg tous les 4 semaines minimum selon l’avis médical.',
    'Dose oubliée : injectez dès que possible si l’oubli date de 4 jours ou moins, sinon sautez-la. Ne doublez jamais une dose.'
  ],
  storage: [
    'Au réfrigérateur (2 °C à 8 °C). Ne pas congeler.',
    'Après la première utilisation : 30 jours au total hors du réfrigérateur, sous 30 °C, puis le stylo doit être jeté.',
    'Les aiguilles ne sont pas incluses (par exemple Accu-Fine 32G 4 mm).'
  ],
  contra: [
    'Allergie au tirzépatide ou à l’un des autres composants.',
    'Diabète de type 1.',
    'Grossesse et allaitement.'
  ],
  effects: [
    'Nausées, vomissements, diarrhée, constipation.',
    'Diminution de l’appétit, maux de ventre, maux de tête.',
    'Irritation au site d’injection.'
  ],
  precautions: [
    'Informez votre médecin de tous vos médicaments, surtout ceux contre le diabète.',
    'Prudence en cas de sédation profonde ou d’anesthésie générale.',
    'En cas de vomissements ou diarrhées sévères, buvez suffisamment et prévenez votre médecin.',
    'Avec d’autres médicaments hypoglycémiants, la glycémie peut devenir trop basse : apprenez à reconnaître l’hypoglycémie.'
  ]
}

export const faqs = [
  {
    q: 'À quelle fréquence s’utilise Mounjaro ?',
    a: 'Une injection sous-cutanée par semaine, le même jour chaque semaine, à n’importe quel moment de la journée, avec ou sans repas. Chaque stylo contient 4 doses.'
  },
  {
    q: 'Où et comment s’injecte-t-il ?',
    a: 'Sous la peau de l’abdomen (à au moins 5 cm du nombril), de la cuisse ou du haut du bras. Changez de site d’injection chaque semaine. Lisez le manuel d’utilisation du stylo ou demandez conseil à un pharmacien ou à votre médecin.'
  },
  {
    q: 'Par quelle dose commencer ?',
    a: 'Le schéma habituel démarre à 2,5 mg par semaine, puis passe à 5 mg après 4 semaines. Si nécessaire, la dose augmente par paliers de 2,5 mg, au minimum toutes les 4 semaines. Votre médecin définit le dosage qui vous convient.'
  },
  {
    q: 'Que faire si j’ai oublié une injection ?',
    a: 'Si l’oubli date de 4 jours ou moins, injectez dès que vous y pensez puis reprenez votre jour habituel. Au-delà de 4 jours, sautez la dose. Ne doublez jamais une dose : il doit y avoir au moins 3 jours entre deux injections.'
  },
  {
    q: 'Comment conserver le stylo ?',
    a: 'Au réfrigérateur (2 °C à 8 °C), sans jamais le congeler. Après la première utilisation, il peut rester hors du réfrigérateur sous 30 °C pendant 30 jours au total, puis il doit être jeté.'
  },
  {
    q: 'Quels sont les effets secondaires fréquents ?',
    a: 'Nausées, vomissements, diarrhée, constipation, baisse d’appétit, maux de ventre, maux de tête et irritation au site d’injection. En cas de vomissements ou diarrhées sévères, buvez suffisamment et prévenez votre médecin.'
  },
  {
    q: 'Qui ne doit pas utiliser Mounjaro ?',
    a: 'Les personnes allergiques au tirzépatide ou à l’un des composants, les personnes atteintes de diabète de type 1, ainsi que les femmes enceintes ou qui allaitent. Parlez-en à votre médecin avant de commencer.'
  },
  {
    q: 'Les aiguilles sont-elles fournies ?',
    a: 'Non. Un pharmacien peut vous conseiller les aiguilles compatibles, par exemple des aiguilles Accu-Fine 32G 4 mm.'
  }
]
