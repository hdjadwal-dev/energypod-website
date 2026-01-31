const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const i18n = {
  en: {
    lang_label: 'Bahasa',
    nav_solution: 'Solution',
    nav_tiers: 'Product Tiers',
    nav_pltd: 'PLTD Optimisation',
    nav_demo: 'Demo Pod 001',
    nav_contact: 'Contact',

    hero_badge: 'Energy first. Intelligence later.',
    hero_title: 'Modular hybrid power for Indonesia’s last‑mile electricity — built for scale.',
    hero_subtitle: 'A standardized, containerized hybrid microgrid (Solar PV + LFP BESS + Grid‑forming PCS + optional backup) designed for reliability in tropical conditions.',
    kpi_uptime: 'Target uptime (site SLA)',
    kpi_diesel: 'Diesel runtime reduction',
    kpi_deploy: 'Demo deployment target',
    cta_view_tiers: 'View product tiers',
    cta_demo: 'Demo Pod 001 details',
    hero_note: 'Designed for government & PLN programs, telecom electrification, and PLTD optimisation — with optional future digital upgrades.',
    hero_media_caption: 'Illustrative architecture: PV + BESS + PCS + optional genset + loads',

    sol_title: 'Why EnergyPOD works where many projects fail',
    sol_f1_title: 'Grid‑forming stability',
    sol_f1_body: 'Battery‑led PCS forms a stable micro‑grid (voltage & frequency), enabling islanded operation, seamless transitions, and black‑start.',
    sol_f2_title: 'Tropical resilience',
    sol_f2_body: 'Designed for 35–45°C ambient: proper HVAC zoning, dust protection, and thermal strategy for battery longevity.',
    sol_f3_title: 'Standardized delivery',
    sol_f3_body: 'Factory‑built + FAT/SAT tested to reduce site risk, speed deployment, and enable repeat procurement as a replicable unit.',

    callout_title: 'Operational sustainability is the real bottleneck.',
    callout_body: 'EnergyPOD can be packaged with an O&M + monitoring guarantee (SaaS) so stakeholders can budget operations, not just CAPEX.',
    cta_talk: 'Talk to us',

    tiers_title: 'Product tiers',
    tiers_subtitle: 'Standardized SKUs — sized for repeat procurement and fast deployment.',

    t1_title: 'EnergyPOD Community',
    t1_desc: 'Village clusters & public facilities (schools, clinics, markets, islands).',
    t2_title: 'EnergyPOD Industrial',
    t2_desc: 'Telecom hubs, estates, mining support, ports — higher peaks & reliability.',
    t3_title: 'EnergyPOD Cluster',
    t3_desc: 'Scale by replication: multi‑pod mini‑grid (programmatic deployments).',

    spec_load: 'Target load',
    spec_backup: 'Backup',
    spec_container: 'Container',
    spec_config: 'Configuration',
    spec_pv: 'PV field',
    spec_bess: 'Battery',
    spec_control: 'Control',
    spec_benefit: 'Key benefit',
    spec_upgrade: 'Upgrades',
    spec_monitor: 'Monitoring',

    layout_title: 'Tier 1 site layout (ground‑mounted PV)',
    layout_body: 'Typical footprint includes PV field, container pad, safety clearance, and optional genset area. Exact sizing depends on PV kWp and site access.',
    chip_container: 'Container pad: ~30–50 m²',
    chip_clearance: 'Clearance & access: +50–150 m²',
    chip_genset: 'Genset bay: +15–30 m² (optional)',

    pltd_title: 'PLTD optimisation opportunity',
    pltd_body: 'Many remote grids rely on diesel (PLTD). EnergyPOD can be deployed as a standardized hybrid add‑on to reduce diesel runtime and cost, while improving reliability and power quality.',
    pltd_f1_title: 'Drop‑in hybridization',
    pltd_f1_body: 'Add PV + BESS + PCS to existing diesel systems, shift energy to low‑cost solar, and use genset only when needed.',
    pltd_f2_title: 'Standard SKU',
    pltd_f2_body: 'Repeat procurement across provinces with consistent specs, testing, and O&M structure.',
    pltd_f3_title: 'Data for budgeting',
    pltd_f3_body: 'Monitoring & reporting helps PLN/ESDM track diesel savings, uptime, and performance — enabling better OPEX planning.',

    demo_title: 'Demo Pod 001',
    demo_subtitle: 'A reference asset to validate performance, documentation, and operational model — before scaling.',
    demo_kpi: 'KPIs to prove',
    demo_k1: 'Islanded operation + grid‑forming stability',
    demo_k2: 'Black‑start capability',
    demo_k3: 'Diesel runtime reduction vs baseline',
    demo_k4: 'Thermal strategy for 35–45°C ambient',
    demo_k5: 'FAT/SAT documentation for replication',
    demo_stack: 'Reference stack (demo)',

    contact_title: 'Let’s collaborate',
    contact_body: 'If you’re PLN/ESDM, provincial government, telecom, EPC, or technology partner — we can share specs, deployment approach, and an O&M model that actually sustains the system.',
    cta_whatsapp: 'WhatsApp',
    cta_email: 'Email',
    contact_kpi: 'Modular Hybrid Energy & Digital Infrastructure Platform',
    contact_note: 'Note: compute/AI modules are optional and separate (ComputePOD). The initial focus is reliable electricity first.',
    footer_note: 'Built for Indonesia’s last‑mile power.'
  },
  id: {
    lang_label: 'English',
    nav_solution: 'Solusi',
    nav_tiers: 'Tier Produk',
    nav_pltd: 'Optimasi PLTD',
    nav_demo: 'Demo Pod 001',
    nav_contact: 'Kontak',

    hero_badge: 'Energi dulu. Kecerdasan menyusul.',
    hero_title: 'Listrik hybrid modular untuk last‑mile Indonesia — siap diskalakan.',
    hero_subtitle: 'Microgrid hybrid terstandar dalam kontainer (PLTS + BESS LFP + PCS grid‑forming + backup opsional) untuk keandalan di kondisi tropis.',
    kpi_uptime: 'Target uptime (SLA lokasi)',
    kpi_diesel: 'Pengurangan runtime diesel',
    kpi_deploy: 'Target deploy demo',
    cta_view_tiers: 'Lihat tier produk',
    cta_demo: 'Detail Demo Pod 001',
    hero_note: 'Dirancang untuk program pemerintah & PLN, elektrifikasi telko, dan optimasi PLTD — dengan opsi upgrade digital di masa depan.',
    hero_media_caption: 'Ilustrasi arsitektur: PV + BESS + PCS + genset opsional + beban',

    sol_title: 'Kenapa EnergyPOD efektif saat banyak proyek gagal',
    sol_f1_title: 'Stabilitas grid‑forming',
    sol_f1_body: 'PCS dipimpin baterai membentuk micro‑grid stabil (tegangan & frekuensi), mendukung operasi islanded, transisi mulus, dan black‑start.',
    sol_f2_title: 'Tahan iklim tropis',
    sol_f2_body: 'Dirancang untuk 35–45°C: zonasi HVAC yang benar, proteksi debu, dan strategi termal untuk umur baterai.',
    sol_f3_title: 'Pengadaan terstandar',
    sol_f3_body: 'Factory‑built + FAT/SAT untuk menurunkan risiko lapangan, mempercepat implementasi, dan bisa di-procure berulang sebagai unit.',

    callout_title: 'Tantangan terbesar adalah keberlanjutan operasional.',
    callout_body: 'EnergyPOD bisa dipaketkan dengan garansi O&M + monitoring (SaaS) agar stakeholder bisa menganggarkan OPEX, bukan hanya CAPEX.',
    cta_talk: 'Diskusi',

    tiers_title: 'Tier produk',
    tiers_subtitle: 'SKU terstandar — untuk pengadaan berulang dan implementasi cepat.',

    t1_title: 'EnergyPOD Community',
    t1_desc: 'Klaster desa & fasilitas publik (sekolah, puskesmas, pasar, pulau).',
    t2_title: 'EnergyPOD Industrial',
    t2_desc: 'Hub telko, kawasan/estate, dukungan tambang, pelabuhan — beban puncak lebih tinggi.',
    t3_title: 'EnergyPOD Cluster',
    t3_desc: 'Skala lewat replikasi: mini‑grid multi‑pod (deployment programatik).',

    spec_load: 'Beban target',
    spec_backup: 'Backup',
    spec_container: 'Kontainer',
    spec_config: 'Konfigurasi',
    spec_pv: 'Lahan PV',
    spec_bess: 'Baterai',
    spec_control: 'Kontrol',
    spec_benefit: 'Manfaat utama',
    spec_upgrade: 'Upgrade',
    spec_monitor: 'Monitoring',

    layout_title: 'Layout lokasi Tier 1 (PV ground‑mounted)',
    layout_body: 'Kebutuhan area biasanya mencakup lahan PV, pondasi kontainer, jarak aman, dan area genset opsional. Ukuran pasti tergantung kWp PV dan akses lokasi.',
    chip_container: 'Pondasi kontainer: ~30–50 m²',
    chip_clearance: 'Akses & clearance: +50–150 m²',
    chip_genset: 'Area genset: +15–30 m² (opsional)',

    pltd_title: 'Peluang optimasi PLTD',
    pltd_body: 'Banyak sistem remote masih mengandalkan diesel (PLTD). EnergyPOD bisa menjadi add‑on hybrid terstandar untuk menurunkan runtime diesel dan biaya, sekaligus meningkatkan keandalan dan kualitas daya.',
    pltd_f1_title: 'Hybridisasi drop‑in',
    pltd_f1_body: 'Tambah PV + BESS + PCS pada sistem diesel eksisting, geser energi ke solar yang lebih murah, genset hanya saat dibutuhkan.',
    pltd_f2_title: 'SKU terstandar',
    pltd_f2_body: 'Pengadaan berulang lintas provinsi dengan spesifikasi, pengujian, dan struktur O&M yang konsisten.',
    pltd_f3_title: 'Data untuk anggaran',
    pltd_f3_body: 'Monitoring & reporting membantu PLN/ESDM melacak penghematan diesel, uptime, dan performa — untuk perencanaan OPEX.',

    demo_title: 'Demo Pod 001',
    demo_subtitle: 'Aset referensi untuk validasi performa, dokumentasi, dan model operasional — sebelum skala.',
    demo_kpi: 'KPI yang dibuktikan',
    demo_k1: 'Operasi islanded + stabilitas grid‑forming',
    demo_k2: 'Kapabilitas black‑start',
    demo_k3: 'Pengurangan runtime diesel vs baseline',
    demo_k4: 'Strategi termal untuk 35–45°C',
    demo_k5: 'Dokumentasi FAT/SAT untuk replikasi',
    demo_stack: 'Stack referensi (demo)',

    contact_title: 'Mari kolaborasi',
    contact_body: 'Jika Anda PLN/ESDM, pemda, telko, EPC, atau partner teknologi — kami bisa share spesifikasi, pendekatan implementasi, dan model O&M yang berkelanjutan.',
    cta_whatsapp: 'WhatsApp',
    cta_email: 'Email',
    contact_kpi: 'Platform Energi Hybrid Modular & Infrastruktur Digital',
    contact_note: 'Catatan: modul compute/AI bersifat opsional dan terpisah (ComputePOD). Fokus awal adalah listrik andal terlebih dulu.',
    footer_note: 'Dibangun untuk last‑mile Indonesia.'
  }
};

let current = 'en';
const langBtn = document.getElementById('langBtn');
const langPill = document.getElementById('langPill');

function applyLang(lang){
  current = lang;
  if (langPill) langPill.textContent = lang.toUpperCase();
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = i18n[lang]?.[key];
    if (typeof text === 'string') el.textContent = text;
  });
  try { localStorage.setItem('energypod_lang', lang); } catch {}
}

const saved = (() => { try { return localStorage.getItem('energypod_lang'); } catch { return null; } })();
applyLang(saved === 'id' ? 'id' : 'en');

if (langBtn){
  langBtn.addEventListener('click', () => {
    applyLang(current === 'en' ? 'id' : 'en');
  });
}
