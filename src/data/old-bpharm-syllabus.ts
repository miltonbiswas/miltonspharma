export type OldBPharmSubject = {
  code: string;
  name: string;
  type: "Theory" | "Practical" | "Remedial" | "Practice School" | "Elective" | "Project Work";
  hours?: number;
  credits?: number;
  note?: string;
};

export type OldBPharmSemester = {
  number: number;
  title: string;
  subjects: OldBPharmSubject[];
};

export const oldBPharmSemesters: OldBPharmSemester[] = [
  {
    number: 1,
    title: "Semester I",
    subjects: [
      { code: "BP101T", name: "Human Anatomy and Physiology I", type: "Theory", hours: 3, credits: 4 },
      { code: "BP102T", name: "Pharmaceutical Analysis I", type: "Theory", hours: 3, credits: 4 },
      { code: "BP103T", name: "Pharmaceutics I", type: "Theory", hours: 3, credits: 4 },
      { code: "BP104T", name: "Pharmaceutical Inorganic Chemistry", type: "Theory", hours: 3, credits: 4 },
      { code: "BP105T", name: "Communication Skills", type: "Theory", hours: 2, credits: 2, note: "Non-University Examination (NUE)" },
      { code: "BP106RBT", name: "Remedial Biology", type: "Remedial", hours: 2, credits: 2, note: "Alternative remedial course" },
      { code: "BP106RMT", name: "Remedial Mathematics", type: "Remedial", hours: 2, credits: 2, note: "Alternative remedial course" },
      { code: "BP107P", name: "Human Anatomy and Physiology Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP108P", name: "Pharmaceutical Analysis I Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP109P", name: "Pharmaceutics I Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP110P", name: "Pharmaceutical Inorganic Chemistry Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP111P", name: "Communication Skills Practical", type: "Practical", hours: 2, credits: 2, note: "Non-University Examination (NUE)" },
      { code: "BP112RBP", name: "Remedial Biology Practical", type: "Remedial", hours: 2, credits: 1, note: "For students taking Remedial Biology" },
    ],
  },
  {
    number: 2,
    title: "Semester II",
    subjects: [
      { code: "BP201T", name: "Human Anatomy and Physiology II", type: "Theory", hours: 3, credits: 4 },
      { code: "BP202T", name: "Pharmaceutical Organic Chemistry I", type: "Theory", hours: 3, credits: 4 },
      { code: "BP203T", name: "Biochemistry", type: "Theory", hours: 3, credits: 4 },
      { code: "BP204T", name: "Pathophysiology", type: "Theory", hours: 3, credits: 4 },
      { code: "BP205T", name: "Computer Applications in Pharmacy", type: "Theory", hours: 3, credits: 3, note: "Non-University Examination (NUE)" },
      { code: "BP206T", name: "Environmental Sciences", type: "Theory", hours: 3, credits: 3, note: "Non-University Examination (NUE)" },
      { code: "BP207P", name: "Human Anatomy and Physiology II Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP208P", name: "Pharmaceutical Organic Chemistry I Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP209P", name: "Biochemistry Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP210P", name: "Computer Applications in Pharmacy Practical", type: "Practical", hours: 2, credits: 1, note: "Non-University Examination (NUE)" },
    ],
  },
  {
    number: 3,
    title: "Semester III",
    subjects: [
      { code: "BP301T", name: "Pharmaceutical Organic Chemistry II", type: "Theory", hours: 3, credits: 4 },
      { code: "BP302T", name: "Physical Pharmaceutics I", type: "Theory", hours: 3, credits: 4 },
      { code: "BP303T", name: "Pharmaceutical Microbiology", type: "Theory", hours: 3, credits: 4 },
      { code: "BP304T", name: "Pharmaceutical Engineering", type: "Theory", hours: 3, credits: 4 },
      { code: "BP305P", name: "Pharmaceutical Organic Chemistry II Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP306P", name: "Physical Pharmaceutics I Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP307P", name: "Pharmaceutical Microbiology Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP308P", name: "Pharmaceutical Engineering Practical", type: "Practical", hours: 4, credits: 2 },
    ],
  },
  {
    number: 4,
    title: "Semester IV",
    subjects: [
      { code: "BP401T", name: "Pharmaceutical Organic Chemistry III", type: "Theory", hours: 3, credits: 4 },
      { code: "BP402T", name: "Medicinal Chemistry I", type: "Theory", hours: 3, credits: 4 },
      { code: "BP403T", name: "Physical Pharmaceutics II", type: "Theory", hours: 3, credits: 4 },
      { code: "BP404T", name: "Pharmacology I", type: "Theory", hours: 3, credits: 4 },
      { code: "BP405T", name: "Pharmacognosy and Phytochemistry I", type: "Theory", hours: 3, credits: 4 },
      { code: "BP406P", name: "Medicinal Chemistry I Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP407P", name: "Physical Pharmaceutics II Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP408P", name: "Pharmacology I Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP409P", name: "Pharmacognosy and Phytochemistry I Practical", type: "Practical", hours: 4, credits: 2 },
    ],
  },
  {
    number: 5,
    title: "Semester V",
    subjects: [
      { code: "BP501T", name: "Medicinal Chemistry II", type: "Theory", hours: 3, credits: 4 },
      { code: "BP502T", name: "Industrial Pharmacy I", type: "Theory", hours: 3, credits: 4 },
      { code: "BP503T", name: "Pharmacology II", type: "Theory", hours: 3, credits: 4 },
      { code: "BP504T", name: "Pharmacognosy and Phytochemistry II", type: "Theory", hours: 3, credits: 4 },
      { code: "BP505T", name: "Pharmaceutical Jurisprudence", type: "Theory", hours: 3, credits: 4 },
      { code: "BP506P", name: "Industrial Pharmacy I Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP507P", name: "Pharmacology II Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP508P", name: "Pharmacognosy and Phytochemistry II Practical", type: "Practical", hours: 4, credits: 2 },
    ],
  },
  {
    number: 6,
    title: "Semester VI",
    subjects: [
      { code: "BP601T", name: "Medicinal Chemistry III", type: "Theory", hours: 3, credits: 4 },
      { code: "BP602T", name: "Pharmacology III", type: "Theory", hours: 3, credits: 4 },
      { code: "BP603T", name: "Herbal Drug Technology", type: "Theory", hours: 3, credits: 4 },
      { code: "BP604T", name: "Biopharmaceutics and Pharmacokinetics", type: "Theory", hours: 3, credits: 4 },
      { code: "BP605T", name: "Pharmaceutical Biotechnology", type: "Theory", hours: 3, credits: 4 },
      { code: "BP606T", name: "Quality Assurance", type: "Theory", hours: 3, credits: 4 },
      { code: "BP607P", name: "Medicinal Chemistry III Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP608P", name: "Pharmacology III Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP609P", name: "Herbal Drug Technology Practical", type: "Practical", hours: 4, credits: 2 },
    ],
  },
  {
    number: 7,
    title: "Semester VII",
    subjects: [
      { code: "BP701T", name: "Instrumental Methods of Analysis", type: "Theory", hours: 3, credits: 4 },
      { code: "BP702T", name: "Industrial Pharmacy II", type: "Theory", hours: 3, credits: 4 },
      { code: "BP703T", name: "Pharmacy Practice", type: "Theory", hours: 3, credits: 4 },
      { code: "BP704T", name: "Novel Drug Delivery System", type: "Theory", hours: 3, credits: 4 },
      { code: "BP705P", name: "Instrumental Methods of Analysis Practical", type: "Practical", hours: 4, credits: 2 },
      { code: "BP706PS", name: "Practice School", type: "Practice School", hours: 12, credits: 6, note: "Non-University Examination (NUE)" },
    ],
  },
  {
    number: 8,
    title: "Semester VIII",
    subjects: [
      { code: "BP801T", name: "Biostatistics and Research Methodology", type: "Theory", hours: 3, credits: 4 },
      { code: "BP802T", name: "Social and Preventive Pharmacy", type: "Theory", hours: 3, credits: 4 },
      { code: "BP803ET", name: "Pharma Marketing Management", type: "Elective", note: "Elective subject; confirm exact title against the applicable syllabus edition" },
      { code: "BP804ET", name: "Pharmaceutical Regulatory Science", type: "Elective" },
      { code: "BP805ET", name: "Pharmacovigilance", type: "Elective" },
      { code: "BP806ET", name: "Quality Control and Standardization of Herbals", type: "Elective" },
      { code: "BP807ET", name: "Computer Aided Drug Design", type: "Elective" },
      { code: "BP808ET", name: "Cell and Molecular Biology", type: "Elective" },
      { code: "BP809ET", name: "Cosmetic Science", type: "Elective" },
      { code: "BP810ET", name: "Experimental Pharmacology", type: "Elective" },
      { code: "BP811ET", name: "Advanced Instrumentation Techniques", type: "Elective" },
      { code: "BP812ET", name: "Dietary Supplements and Nutraceuticals", type: "Elective" },
      { code: "BP813PW", name: "Project Work", type: "Project Work", hours: 12, credits: 6 },
    ],
  },
];