/**
 * Clinical Services, Case Reviews, FAQs, Testimonials & Pricing Data
 */

export const SERVICES_DATA = [
  {
    id: "consultation",
    title: "General Pet Consultation",
    category: "clinical",
    categoryName: "Clinical Care",
    icon: "🩺",
    price: "₹799",
    desc: "Comprehensive physical examinations, vital signs evaluation, disease diagnosis, and evidence-based treatment plans for dogs, cats, and companion animals.",
    features: [
      "Head-to-tail thorough physical examination",
      "Cardiovascular, respiratory & ocular checks",
      "Nutritional & weight management review",
      "Digital prescription & follow-up care instructions"
    ]
  },
  {
    id: "vaccination",
    title: "Vaccination & Preventive Protocols",
    category: "preventive",
    categoryName: "Preventive Care",
    icon: "💉",
    price: "₹899",
    desc: "Age-specific core vaccines (DHPPi, Rabies, Tricat) and parasite prevention programs tailored to your pet's lifestyle and local risk factors.",
    features: [
      "Pre-vaccination health assessment",
      "Core & non-core vaccine immunization",
      "Broad-spectrum deworming protocol",
      "Official vaccination passport documentation"
    ]
  },
  {
    id: "surgery",
    title: "Advanced Surgery & Orthopaedics",
    category: "surgery",
    categoryName: "Surgery & Trauma",
    icon: "🏥",
    price: "From ₹3,499",
    desc: "State-of-the-art sterile surgical suites for soft tissue, orthopaedic trauma, cruciate repair, tumor resections, and routine spay/neuter operations.",
    features: [
      "Inhalation isoflurane anaesthesia monitoring",
      "Cruciate ligament & fracture stabilization",
      "Abdominal & oncological tumor removals",
      "Intensive 24-hour post-operative recovery suite"
    ]
  },
  {
    id: "dentistry",
    title: "Veterinary Dentistry & Scaling",
    category: "clinical",
    categoryName: "Clinical Care",
    icon: "🦷",
    price: "₹1,499",
    desc: "Ultrasonic scaling, enamel polishing, gingivitis treatment, and surgical extractions to prevent periodontal infections and organ strain.",
    features: [
      "Ultrasonic calculus & tartar removal",
      "Subgingival plaque cleaning & polishing",
      "Periodontal disease stage diagnosis",
      "Home dental hygiene maintenance guidance"
    ]
  },
  {
    id: "diagnostics",
    title: "Digital Diagnostics & Pathology",
    category: "surgery",
    categoryName: "Diagnostics",
    icon: "🔬",
    price: "From ₹1,199",
    desc: "High-frequency digital radiography (X-Ray), ultrasound imaging, complete blood counts (CBC), liver/kidney biochemistries, and cytology.",
    features: [
      "High-resolution digital X-Rays in minutes",
      "Abdominal & cardiac ultrasound sonography",
      "Complete blood profiles & biochemistry",
      "In-house cytology & parasitic microscopic testing"
    ]
  },
  {
    id: "skin-care",
    title: "Dermatology & Skin Allergy Care",
    category: "clinical",
    categoryName: "Clinical Care",
    icon: "🌿",
    price: "₹1,299",
    desc: "Specialized diagnostics and therapy for chronic atopic dermatitis, fungal hot-spots, mite infestations, and recurring coat allergies.",
    features: [
      "Skin scraping & tape-strip microscopic cytology",
      "Food elimination allergy diagnosis",
      "Specialized antiseptic & antifungal baths",
      "Targeted non-steroidal allergy therapy"
    ]
  },
  {
    id: "grooming",
    title: "Therapeutic Pet Grooming & Spa",
    category: "grooming",
    categoryName: "Grooming & Spa",
    icon: "🛁",
    price: "From ₹999",
    desc: "Gentle hygienic grooming including herbal baths, blow drying, de-shedding, nail clipping, sanitary trims, and ear canal cleaning.",
    features: [
      "Soothing organic coat bath & blow-dry",
      "Careful nail clipping & paw pad trimming",
      "Ear canal wax removal & hygiene flush",
      "Stress-free handling with gentle breaks"
    ]
  },
  {
    id: "emergency",
    title: "24/7 Rapid Emergency & Trauma Care",
    category: "surgery",
    categoryName: "Emergency",
    icon: "🚑",
    price: "Priority Triage",
    desc: "Immediate intervention for vehicular trauma, gastric dilatation-volvulus (bloat), poisoning, respiratory distress, and acute seizures.",
    features: [
      "Immediate vital stabilization & oxygen therapy",
      "Emergency blood transfusion & fluid resuscitation",
      "Stat bedside ultrasound & emergency surgery",
      "Continuous ICU vital signs telemetry monitoring"
    ]
  }
];

export const CASE_REVIEWS_DATA = [
  {
    id: "surgery-decisions",
    title: "Surgery Decision Advisory",
    category: "Surgical Review",
    emoji: "⚖️",
    summary: "Critical secondary evaluation before undergoing expensive or invasive orthopaedic or abdominal operations.",
    commonQuestions: [
      "Can this surgery be safely avoided or postponed?",
      "What are the realistic post-operative recovery expectations?",
      "Can physical therapy or medical therapy work instead?",
      "What is the exact anaesthetic risk for my senior pet?"
    ]
  },
  {
    id: "oncology-review",
    title: "Oncology & Tumor Case Review",
    category: "Cancer Care",
    emoji: "🔬",
    summary: "Comprehensive biopsy and CT/radiograph review to determine tumor staging, surgical feasibility, and comfort-focused protocols.",
    commonQuestions: [
      "Is the mass benign or malignant?",
      "What is the median life expectancy with vs without surgery?",
      "How can we preserve comfort and quality of life?",
      "Are palliative therapies more humane than radical excision?"
    ]
  },
  {
    id: "cardiology-review",
    title: "Cardiology & Heart Murmurs",
    category: "Cardiovascular",
    emoji: "❤️",
    summary: "Expert interpretation of echocardiograms and electrocardiograms (ECG) for congestive heart failure and arrhythmias.",
    commonQuestions: [
      "What grade is the heart murmur?",
      "Which specific medications are safe together?",
      "How do we monitor resting respiratory rates at home?",
      "Are cough symptoms related to fluid in lungs or trachea?"
    ]
  },
  {
    id: "neurology-review",
    title: "Neurology & Paralysis Advisory",
    category: "Neurology",
    emoji: "🧠",
    summary: "Reviewing sudden limb weakness, IVDD (intervertebral disc disease), and chronic epilepsy management.",
    commonQuestions: [
      "Is emergency spinal decompression necessary?",
      "Can conservative crate rest restore limb sensation?",
      "How do we safely calibrate anti-convulsant drug dosages?",
      "What is the long-term prognosis for recovery?"
    ]
  },
  {
    id: "chronic-disease",
    title: "Chronic Kidney & Liver Management",
    category: "Internal Medicine",
    emoji: "💧",
    summary: "Long-term metabolic stability plans, renal diet calibration, subcutaneous hydration, and blood pressure control.",
    commonQuestions: [
      "What stage is the renal failure?",
      "How can we safely lower BUN and Creatinine levels?",
      "Can nausea and anorexia be effectively countered?",
      "How to set up gentle subcutaneous fluids at home?"
    ]
  }
];

export const ATHOME_PACKAGES = [
  {
    type: "dog",
    title: "Canine Basic Wellness & Hygiene",
    price: "₹999",
    desc: "Essential grooming and hygiene maintenance delivered right in your home living room.",
    features: [
      "Deep cleansing coat bath & turbo blow dry",
      "Thorough brush out & minor de-shedding",
      "Painless nail trimming & paw balm massage",
      "Ear canal sanitization & eye wipe"
    ],
    recommended: false
  },
  {
    type: "dog",
    title: "Canine Royal Medicated Spa & Health Check",
    price: "₹2,499",
    desc: "Complete therapeutic coat wellness, medicated bath, sanitary trim, plus a certified vet consultation.",
    features: [
      "All features in Basic Wellness package",
      "Specialized medicated anti-tick or anti-fungal bath",
      "Full sanitary trim & face styling",
      "Certified Vet physical exam & health card",
      "Deworming oral dose administered"
    ],
    recommended: true
  },
  {
    type: "cat",
    title: "Feline Gentle Hygiene & Bath",
    price: "₹899",
    desc: "Ultra-quiet, fear-free bath and brushing designed specifically to keep cats calm and comfortable.",
    features: [
      "Gentle waterless or warm foam cat bath",
      "Soft coat de-shedding & matting check",
      "Nail tip trimming with safety guards",
      "Ear margin hygiene cleaning"
    ],
    recommended: false
  },
  {
    type: "cat",
    title: "Feline Complete Dermatological Wellness",
    price: "₹2,199",
    desc: "Comprehensive skin and parasite care for cats prone to allergies, hairballs, or skin sensitivity.",
    features: [
      "All features in Gentle Hygiene package",
      "Hypoallergenic oat & aloe therapeutic treatment",
      "Sanitary & belly hygiene trimming",
      "Veterinary oral & skin examination",
      "Personalized feline nutritional advice"
    ],
    recommended: true
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: "Priya Sharma",
    pet: "Bruno",
    breed: "Golden Retriever (5 yrs)",
    location: "South Delhi",
    service: "Complex Orthopaedic Surgery",
    rating: 5,
    text: "Dr. Sharma is an absolute miracle worker with animals. When Bruno suffered a torn cranial cruciate ligament, two clinics told us amputation might be on the table. Dr. Sharma reviewed his X-rays, performed a meticulous reconstructive surgery, and Bruno was gently walking again within weeks. His compassionate follow-up is unmatched in Delhi!"
  },
  {
    name: "Rahul Mehta",
    pet: "Luna",
    breed: "Persian Cat (3 yrs)",
    location: "South Delhi",
    service: "Stress-Free At-Home Grooming",
    rating: 5,
    text: "The at-home grooming service is a true game-changer! Luna is a very nervous Persian cat who panics in carrier bags and vehicle rides. The team arrived on time with sanitized tools, treated her with extraordinary patience, and gave her a gorgeous lion trim without a single scratch or stressful moment."
  },
  {
    name: "Arjun Nair",
    pet: "Max",
    breed: "Labrador Retriever (7 yrs)",
    location: "Central Delhi",
    service: "24/7 Rapid Emergency Care",
    rating: 5,
    text: "At 11:30 PM on a Sunday night, Max swallowed a sharp plastic toy fragment and began retching and swelling violently. The emergency hotline answered immediately. Within 20 minutes, the team had him stabilized with digital ultrasound and safely retrieved the obstruction endoscopically without cutting him open. True lifesavers!"
  },
  {
    name: "Sunita Kapoor",
    pet: "Simba",
    breed: "Beagle (9 yrs)",
    location: "Defence Colony",
    service: "Online Surgery Second Opinion",
    rating: 5,
    text: "We were recommended an urgent spinal surgery priced at ₹85,000 for Simba's back pain. We booked an online case review with Dr. Sharma, who analyzed his MRI slices in detail and suggested a 4-week conservative medical protocol with specific anti-inflammatory support instead. Simba made a 100% recovery without any surgery!"
  }
];

export const FAQ_DATA = [
  {
    category: "general",
    q: "How do I book an appointment for in-clinic care or a home visit?",
    a: "You can book directly using the online reservation form on this website, or message our dedicated clinic care team on WhatsApp at +91 78276 13920. In-clinic consultations are scheduled with generous 30-minute slots to ensure thorough, stress-free evaluations."
  },
  {
    category: "emergency",
    q: "What constitutes a critical veterinary emergency?",
    a: "Critical emergencies include acute abdominal bloating (GDV), sudden inability to urinate (common in male cats), severe vehicular trauma or bleeding, sudden collapse or inability to stand, seizures lasting over 2 minutes, and suspected toxic ingestion (chocolate, rat bait, lilies). Call our emergency hotline immediately if you observe any of these symptoms."
  },
  {
    category: "second-opinion",
    q: "How does the Online Second Opinion / Teleconsultation service work?",
    a: "You simply upload your pet's current medical summary, blood reports, X-rays, or MRI scans through our secure portal. Our Chief Veterinary Consultant conducts an independent, detailed clinical audit, followed by a scheduled 1-on-1 video call to walk you through alternative options, risks, and a verified written clinical roadmap."
  },
  {
    category: "surgery",
    q: "What safety protocols are maintained during surgical procedures?",
    a: "Our hospital adheres to human-grade sterile protocols. Every surgical patient undergoes pre-anaesthetic blood screening. We utilize modern isoflurane gas inhalation anaesthesia, multiparameter telemetry monitoring (ECG, pulse oximetry, blood pressure, end-tidal CO2), and active thermoregulation warming blankets throughout the procedure."
  },
  {
    category: "preventive",
    q: "When should puppies and kittens receive their first vaccines?",
    a: "Puppies should begin their primary core vaccination (DHPPi) between 6 to 8 weeks of age, followed by booster shots every 3 to 4 weeks until 16 weeks, concluding with the Anti-Rabies vaccine. Kittens follow a similar schedule starting with Tricat (FVRCP). We strongly advise keeping pets indoors until 14 days after the final booster."
  },
  {
    category: "athome",
    q: "Which areas in Delhi NCR do your at-home vet and grooming vans service?",
    a: "Our mobile veterinary and grooming units cover South Delhi, Central Delhi, Golf Links, Chanakyapuri, Defence Colony, Greater Kailash, Vasant Vihar, and adjoining NCR corridors. All equipment is fully sterilized between appointments."
  },
  {
    category: "general",
    q: "Can I obtain a verified digital prescription following a teleconsultation?",
    a: "Yes. Following an online clinical case review, our licensed veterinary clinician issues a digitally signed prescription with clear dosage instructions, dietary guidance, and suggested monitoring parameters sent directly to your registered WhatsApp and email."
  }
];
