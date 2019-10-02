export const ldPainServices = [
  {
    '@type': 'TherapeuticProcedure',
    name: 'Epidural Injection',
    bodyLocation: 'Spine',
    indication: ['Neck Pain', 'Back Pain', 'Leg Pain', 'Sciatica'],
    procedureType: {
      '@type': 'MedicalProcedureType',
      name: 'Percutaneous',
      sameAs: 'https://en.wikipedia.org/wiki/Percutaneous',
    },
    sameAs: [
      'https://www.bupa.co.uk/health-information/back-care/epidural-lower-back-leg',
    ],
  },
  {
    '@type': 'TherapeuticProcedure',
    name: 'Radiofrequency Ablation',
    alternateName: [
      'Radiofrequency Denervation',
      'Pulsed Radiofrequency Ablation',
    ],
    sameAs:
      'https://www.bupa.co.uk/health-information/back-care/radiofrequency-denervation',
    bodyLocation: [
      'Spinal nerves',
      'Hip',
      'Knee',
      'Suprascapular nerve',
      'Cervical dorsal root ganglia',
      'Lumbar dorsal root ganglia',
    ],
    indication: [
      'Neck Pain',
      'Back Pain',
      'Leg Pain',
      'Sciatica',
      'Hip Pain',
      'Knee Pain',
      'Arthritis',
    ],
  },
  {
    '@type': 'TherapeuticProcedure',
    name: 'Joint Injection',
    alternateName: ['Intra-articular injection'],
    sameAs: 'https://www.nhs.uk/medicines/hydrocortisone-injections/',
    bodyLocation: ['Hip', 'Knee', 'Facet joints', 'Sacro-iliac joints'],
    indication: [
      'Back Pain',
      'Leg Pain',
      'Sciatica',
      'Hip Pain',
      'Knee Pain',
      'Arthritis',
    ],
  },
  {
    '@type': 'TherapeuticProcedure',
    name: 'Nerve Block',
    sameAs: 'https://en.wikipedia.org/wiki/Nerve_block',
    bodyLocation: ['Hip', 'Knee', 'Scars'],
    indication: [
      'Hip Pain',
      'Knee Pain',
      'Neuroma related pain',
      'Scar related pain',
    ],
  },
  {
    '@type': 'TherapeuticProcedure',
    name: 'Ultrasound Guided Injection',
    sameAs: 'https://en.wikipedia.org/wiki/Nerve_block',
    bodyLocation: [
      'Elbow',
      'Coccyx',
      'Suprascapular nerve',
      'Piriformis',
      'Pudendal nerve',
      'Genitofemoral nerve',
      'Stellate Ganglion',
      'Inguinal Nerves',
      'Lateral cutaneous nerve of thigh',
    ],
    indication: ['Chronic pain', 'Meralgia Parasthetica'],
  },
  {
    '@type': 'TherapeuticProcedure',
    name: 'Ultrasound Guided Abdominal Block',
    sameAs: 'https://en.wikipedia.org/wiki/Nerve_block',
    bodyLocation: 'Abdominal wall',
    indication: [
      'Anterior Cutaneous Nerve Entrapment Syndrome ',
      'Chronic abdominal wall pain',
    ],
  },
  {
    '@type': 'TherapeuticProcedure',
    name: 'Greater Occipital and Supra-orbital nerve block',
    sameAs: 'https://en.wikipedia.org/wiki/Nerve_block',
    bodyLocation: 'Head',
    indication: ['Migraine ', 'Chronic Craniofacial Pain Syndrome'],
  },

  {
    '@type': 'TherapeuticProcedure',
    name: 'Greater Occipital and Supra-orbital nerve block',
    sameAs:
      'https://www.nationalmigrainecentre.org.uk/migraine-and-headaches/migraine-and-headache-factsheets/greater-occipital-nerve-block/',
    bodyLocation: 'Head',
    indication: ['Migraine ', 'Chronic Craniofacial Pain Syndrome'],
  },

  {
    '@type': 'TherapeuticProcedure',
    name: 'Trigger point injection',
    bodyLocation: 'Muscle',
    indication: 'Chronic Pain',
  },

  {
    '@type': 'TherapeuticProcedure',
    name: 'Capsaicin Patch Application',
    indication: 'Neuropathic pain',
  },

  {
    '@type': 'TherapeuticProcedure',
    name: 'Botox Injection',
    indication: 'Migraine',
  },
]
