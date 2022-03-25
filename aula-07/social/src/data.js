import {v4 as uuid} from "uuid"
const user = {
    name : "Sarinha",
    username: "sarinhavenenosa",
    img: "https://cdn.discordapp.com/avatars/213439023115534336/ae1fe20e6a34b258772ad6c44d2cbbdd.webp?size=100",
    id: uuid()
}

export function getPost() {
    return {
        id: uuid(),
        user: user,
        text: "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE3EEEEEEEEEEEEEEEEEEEEEEE",
        img: "https://scontent.fcgh23-1.fna.fbcdn.net/v/t39.30808-6/276133354_132851145939027_1878144184994599856_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeFG9taZv5Gqrz47gxJ9T4_6fFEYSgS169B8URhKBLXr0LWD5aJeMBqjGWLm87cNfk82INtkB9IH14juifHFp0i8&_nc_ohc=mEfV_PP_Fh0AX8jmUI0&_nc_ht=scontent.fcgh23-1.fna&oh=00_AT_EXyEBrXjVz2zYideeCNBssNp2_5mcF-xpSqH8g4bP0w&oe=623D782B",
        likes: 0,
        coments: [
            {
                user: user,
                text: "Ta foda em belford roxo."
            },{
                user: user,
                text: "@JohnnyCrash me ajuda seu corno."
            }
        ]
    }
    
}