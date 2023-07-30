import { GenericRenderer } from "haunted";
import { Component } from "haunted/lib/component";

export * from "haunted";
export interface Renderer<P extends object> extends GenericRenderer<HTMLElement, P> {
  (this: Component<P>, host: Component<P>): unknown | void;
  observedAttributes?: (keyof P)[];
}
