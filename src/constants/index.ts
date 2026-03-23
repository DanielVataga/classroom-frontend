import { Subject } from "@/Types";

export const DEPARTMENTS = ["CS", "Business", "Biology"];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dep) => ({
  value: dep,
  label: dep,
}));

export const MOCK_SUBJJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Covers fundamental programming concepts, algorithms, and problem-solving techniques using a high-level language.",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 2,
    code: "BUIS202",
    name: "Principles of Marketing",
    department: "Business",
    description:
      "Explores core marketing concepts including consumer behavior, branding, market research, and digital strategies.",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 3,
    code: "BIO150",
    name: "Foundations of Biology",
    department: "Biology",
    description:
      "Introduces basic biological principles such as cell structure, genetics, evolution, and ecosystems.",
    createdAt: new Date().toUTCString(),
  },
];
