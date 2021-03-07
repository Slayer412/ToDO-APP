import bcryptjs from 'bcryptjs'

const users = [
    {
        name:'Shreyash Patel',
        email:'shreyash@mail.com',
        password:bcryptjs.hashSync('123456', 10),
       
    },
    {
        name:'Devanshu Patel',
        email:'devanshu@mail.com',
        password:bcryptjs.hashSync('123456', 10),
    },
    {
        name:'Dev Patel',
        email:'dev@mail.com',
        password:bcryptjs.hashSync('123456', 10),
    },
]

export default users