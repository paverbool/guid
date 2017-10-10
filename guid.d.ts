declare class Guid {

    value: string;

    constructor(g: string)

    equals(other: any): boolean;

    isEmpty(): boolean;

    toString(): string;

    toJSON(): string;
}

declare module Guid {

    export const EMPTY = "00000000-0000-0000-0000-000000000000";

    export function isGuid(v: string): boolean;

    export function create(): string;

    export function raw(): string;
}

declare module "guid" {
    export = Guid;
}
