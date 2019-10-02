import BuiltWithTechnology from "./built-with-technology.interface";

export default interface Project {
  title: string;
  description: string;
  builtWith: BuiltWithTechnology[];
  projectLink?: string;
  gitHubLink?: string;
}
