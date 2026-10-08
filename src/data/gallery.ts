export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "converters" | "processing" | "testing" | "packaging";
  categoryLabel: string;
  image: string;
  description: string;
  tag: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Commercial Scrap Inspection & Sorting",
    category: "converters",
    categoryLabel: "Catalytic Converters",
    image: "/images/converter_sorting.jpg",
    description: "Sorting high-yield automotive converters with OEM code grading for Mercedes, VW, Toyota, and Denso units.",
    tag: "OEM Code Grading",
  },
  {
    id: "g2",
    title: "Handheld Olympus XRF Spectrometer Assay",
    category: "testing",
    categoryLabel: "Lab Testing & Assay",
    image: "/images/about_xrf.jpg",
    description: "Precision non-destructive elemental testing verifying Platinum (Pt), Palladium (Pd), and Rhodium (Rh) parts-per-million.",
    tag: "Scientific Assay",
  },
  {
    id: "g3",
    title: "Ceramic Monolith & Metallic Foil Cores",
    category: "processing",
    categoryLabel: "Warehouse & Processing",
    image: "/images/catalyst_cores.jpg",
    description: "Side-by-side comparison of 400 cpsi ceramic square cell honeycomb and spiral-wound metallic matrix foil substrates.",
    tag: "High-Grade Substrates",
  },
  {
    id: "g4",
    title: "Industrial Export Pallets & UN HazMat Drums",
    category: "packaging",
    categoryLabel: "Bulk Packaging",
    image: "/images/export_packaging.jpg",
    description: "Sealed export drums with customs inspection tags and e-Way barcode manifests ready for international marine freight.",
    tag: "Export Compliance",
  },
  {
    id: "g6",
    title: "Large-Scale Industrial Staging Warehouse",
    category: "processing",
    categoryLabel: "Warehouse & Processing",
    image: "/images/hero_warehouse.jpg",
    description: "Heavy-duty staging area where hundreds of converter lots are catalogued, weighed, and prepared for high-yield de-canning.",
    tag: "High Volume Facility",
  },
];
