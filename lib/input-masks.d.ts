declare module "cepMask" {
    export const cepMask: (e: KeyboardEvent) => void;
}
declare module "chunkSubstr" {
    export default function chunkSubstr(str: string, size: number): Array<string>;
}
declare module "cnpjMask" {
    export const cnpjMask: (e: KeyboardEvent) => void;
}
declare module "cpfCnpjMask" {
    export const cpfCnpjMask: (e: KeyboardEvent) => void;
}
declare module "cpfMask" {
    export const cpfMask: (e: KeyboardEvent) => void;
}
declare module "phoneMask" {
    export const phoneMask: (e: KeyboardEvent) => void;
}
declare module "index" {
    export * from "cepMask";
    export * from "cpfMask";
    export * from "cnpjMask";
    export * from "cpfCnpjMask";
    export * from "phoneMask";
}
