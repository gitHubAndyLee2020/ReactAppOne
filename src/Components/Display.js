import {useState} from "react"

export default function Display(props) {

    const displayItem = (item) => {

        return (
            <div className="container-display">
                <p>{item.hour}</p>
                <p>{item.minute}</p>
                <p>{item.task}</p>
            </div>
        )
    }
    
    const BubbleSort = (items, times) => {
        let length = times.length
        for (let i=0;i<length;i++) {
            for (let j=0;j<(length-i-1);j++) {
                if (times[j]>times[j+1]) {
                    let tempTime = times[j]
                    times[j] = times[j+1]
                    times[j+1] = tempTime 
                    let tempItems = items[j]
                    items[j] = items[j+1]
                    items[j+1] = tempItems
                }
            }
        }
        return items
    }

    const sortItems = (items) => {
        let times = []
        for (let item of items) {
            times.push(Number(item.hour)*60+Number(item.minute))
        }
        return BubbleSort(items, times)
    }

    return (
        <div>
            {sortItems(props.items).map(displayItem)}
        </div>
    )
}