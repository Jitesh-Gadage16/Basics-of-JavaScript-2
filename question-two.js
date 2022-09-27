// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];


// let signUp = (id,name,email,pass) => {

//     let count = 0 ;

//     users.forEach(e =>{
//         if(email === e.email){
//             // console.log(e.email)
//             // console.log(`The email ${email} is already registered`);
//             count++;
//             console.log(count)
//         } 


//     })

//     if(count > 0) {
//         console.log(`The email ${email} is already registered`);
//     } else {
//         let today = new Date();
//           users.push({
//             _id: id,
//             username: name,
//             email: email,
//             password: pass,
//             createdAt:`${today.getDate()} / ${today.getMonth()} / ${today.getFullYear()}  ${today.getHours() > 12 ? today.getHours() - 12 : today.getHours()} : ${today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()} ${today.getHours() > 12 ? 'PM' : 'AM'} `,
//             isLoggedIn: true
//           })
//     }


// }

// // signUp("eefamr"," jitesh" ,"martha@martha.com", "jitesh")
// signUp("010101"," jitesh" ,"gadageitesh16@gmail.com", "jitesh@16");
// // signUp("010101"," jitesh" ,"gadageitesh16@gmail.com", "jitesh@16");


// let sign = (email,pass) => {
//   let login = 0;

//     users.forEach(e => {

//         if((email === e.email) && (pass === e.password)){
//             this.isLoggedIn = true ;
//             login ++;
//         } 
//     })

//     if(login == 0) {
//         console.log("invalid credential")
//     } else {

//         console.log("suceesfull logedin")
//     }

// }



// sign("thomas@thomas.com", "123333")

// console.log(users)

// 3. The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product
//  b. Create a function called averageRating which calculate the average rating of a product

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.



const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]



let reateProduct = (obj, productId) => {


    products.forEach(e => {

        if (productId === e._id) {
            let rate = e.ratings
            // console.log(rate)
            rate.forEach(item => {
                // console.log(item.userId);
                // console.log(obj.userId)
                if (item.userId == obj.userId) {
                    // console.log("idsss",item.userId);
                    // console.log("idsss",obj.userId);
                    // rate.push(obj)
                    console.log("yoy have already voted")
                    return ;
                } else {
                    console.log("you voted")
                    rate.push(obj)
                }


            })

           
        } else {
            console.log("this product is not in list")
        }

        console.log(e)
    })


}

 reateProduct({userId: 'abc123333', rate: 4}, "hedfcg")
 reateProduct({userId: 'abc123333', rate: 4}, "aegfal")
 reateProduct({userId: 'abc123333', rate: 4}, "eedfcf")
