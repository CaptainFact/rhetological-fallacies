import Argument from "./e_argument";

/**
 * Represent a definition bundle for all referenced rhetollogical fallacies.
 */
export default interface IDefinitions {
  [key: Argument]: string;
}
