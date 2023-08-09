// function in function is called Callback function




const products = (call) => {
    const httprequest = new XMLHttpRequest()
    httprequest.addEventListener('readystatechange',()=>{   // readystatechange is used for track and access the api data

        if (httprequest.readyState ===  4  && httprequest.status === 200) {  // 200 means it run successfully        // if it will get data from server then it will print done in console
            call(undefined,httprequest.responseText)
        }
        else if(httprequest.readyState === 4){
            call('could not fetch data',undefined)
        }

        // console.log(httprequest,httprequest.readyState);
    })
    httprequest.open('GET','https://dummyjson.com/products')
    httprequest.send()
}

products((error,data)=>{
    console.log('run')
    if(data){
        console.log(data);
    }
    else{
        console.log
    }
})