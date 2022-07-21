let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
    ]

//low collision hash for exclusive id based on access length
    function d2jb(length) {
        var hash           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          hash += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return hash;
    }
    
    function insertID(){
        let fdStr = ''
        let fdInt = 0

        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            fdStr = String(element.price)[0];
            fdInt = Number(fdStr);

            if(fdInt == 1)
            {
               element.ID = d2jb(products.length - index)
            }else continue
        }
    }

    //no idea what it means by id 3
    function printIDThree(){
        console.log(products.find(element => element.ID == 3))
    }

    function printNames(){
        for (let index = 0; index < products.length; index++) {
            const element = products[index]
            console.log(element.name)
        }
    }

    function printApartheid(){
        for (let index = 0; index < products.length; index++) {
            const element = products[index]
            if(element.colors.includes('black')) console.log(element)
        }
    }

    function printColorless(){
        for (let index = 0; index < products.length; index++) {
            const element = products[index]
            if(element.colors.length == 0) console.log(element)
        }
    }

    function dup()
    {
        let pdup = [... products]
        products.push(pdup)
    }

    function outOfStock(){
        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            if(element.quantity == 0) products.splice(index, 1)
        }
    }

    function totalStock(){
        let total = 0
        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            total += element.quantity
        }
        console.log(total)
    }

    function dripCheck(value)
    {
        if(isNaN(value)) return

        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            if(element.price > value) console.log(element + '\n')
        }
    }

    function bigOCheck(){
        for (let index = 0; index < products.length; index++) {
            const element = products[index]
            if(/[oO]/.test(element.name)){
                console.log(element)
            }
        }
    }
