import Table from "../components/Table/Table";

type ArrOf = <T>(length: number, callBack: (...args: any[]) => T) => T[]
export const arrOf: ArrOf = (length, callBack) => {
    let array = [];
    for (var i = 0; i < length; i++) {
        array.push(callBack(i));
    }
    return array;
} 

type direction = "asc" | "desc"
type HasIndex = {index: number}
type IndexSort = <T extends HasIndex>(array: T[], direction?:direction) => T[]
export const indexSort: IndexSort = (array, direction = "asc") => {
    return array.sort((a, b) => a.index = b.index)
}

type RandomInt = (min: number, max: number) => number
export const randomInt: RandomInt = (min, max) => {
    return Math.floor(Math.random() * (max + 0.99));
}