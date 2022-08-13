interface ErrorContainer {
    [prop: string]: string; // every property mmust be a string and value must also be a string. It takes n number of properties which are of strin type
}

const errorBag: ErrorContainer = {
    email: 'this is email',
    1: '1 here is treated as string',
    username: 'Must start with a capital letter'
}