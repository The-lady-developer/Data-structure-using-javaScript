function chunk(arr,size)
{
    const chunked=[];
    let index=0;
    while(index<arr.length){
        chunked.push(arr.slice(index,index+size));
        index=index+size;
    }
    console.log(chunked);
}
chunk([1,2,3],2);