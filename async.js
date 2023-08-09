// Asynchronous javascript handle time-consuming task such as network request and database queries.
// In this one task is executed one after another



// It give the data in console.
const httprequest = new XMLHttpRequest()
httprequest.addEventListener('readystatechange',()=>{   // readystatechange is used for track and access the api data

    if (httprequest.readyState ===  4  && httprequest.status === 200) {  // 200 means it run successfully        // if it will get data from server then it will print done in console
        // To convert json data in array data
        const data = JSON.parse(httprequest.responseText);
        cancelIdleCallback(undefined,data)
    }
    else if(httprequest.readyState === 4){
        console.log('could not fetch data')        // it will print this statement if there is any error in api
    }

    // console.log(httprequest,httprequest.readyState);
})
httprequest.open('GET','https://dummyjson.com/products')
httprequest.send()

// readystate 1 = open it
// readystate 1 = send request
// readystate 1 = process it