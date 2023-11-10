export default async function getData({url="https://rickandmortyapi.com/api/", path=""}) {
    const res = await fetch(`${url}${path}`);
    if(res.status >= 200 && res.status < 300){
        const data = await res.json();
        return data;
    }
    else{
        return res.status;
    }
}