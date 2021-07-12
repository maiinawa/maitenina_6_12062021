export const parseRequestUrl = () => {
    const url = document.location.hash.toLocaleLowerCase();
    const request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
    }; 
};

// var url = 'http://www.mymainsite.com/somepath/path2/path3/path4';

// var pathname = new URL(url).pathname;
// const test = url.split('/')

// console.log(test);