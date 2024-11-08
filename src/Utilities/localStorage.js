// get all gadget form local storage

// import toast from "react-hot-toast"


const getAllCardData = () => {
    const allCardData = localStorage.getItem('card')
    if (allCardData) {
        const data = JSON.parse(allCardData)
        // console.log(data)
        return data
    }else{
        // console.log([])
        return []
    }
}

// Add a gadget to the local storage

const addToCard = (gadget) => {
    const cards = getAllCardData()
    const total = [...cards]
    
    // const notExist = total.find(item => item.product_id !== gadget.product_id)

    // if(notExist){
    //    return toast.success('Successfully created!');

    // }

    console.log(cards)
    total.push(gadget)
    localStorage.setItem('card', JSON.stringify(total))
    // console.log(gadget)
}

// remove gadget from local storage

export { addToCard, getAllCardData }