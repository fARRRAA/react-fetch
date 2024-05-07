import { makeAutoObservable } from "mobx"

export function itemsCounter(itemsCount) {
    return makeAutoObservable({
        itemsCount,
        get increment() {
            this.itemsCount +1;
            console.log(this.itemsCount)
        },
        decrement() {
            this.itemsCount -1;
            console.log(this.itemsCount)
        }
    })
}