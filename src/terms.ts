export interface Term {
  name: string;
  def: string;
}

const terms: Term[] = [
  {
    name: "Brinkmanship",
    def: "the art or practice of pursuing a dangerous policy to the limits of safety before stopping, especially in politics.",
  },
  {
    name: "Threat",
    def: "Pending",
  },
  {
    name: "Promise",
    def: "Pending",
  },
  {
    name: "Dominant strategy",
    def: "Pending",
  },
  {
    name: "Second mover",
    def: "Pending",
  },
  {
    name: "Schelling fence",
    def: "Pending",
  },
  {
    name: "Equilibrium",
    def: "Pending",
  },
  {
    name: "Live player",
    def: "Pending",
  },
];

export const getSortedTerms = (): Term[] => terms.sort((a,b) => a.name.localeCompare(b.name));