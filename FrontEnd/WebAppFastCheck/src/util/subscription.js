import { verifyToken } from "./login"

export function subscriptionData(token){
    let subscriptionPlan=[]
    if(verifyToken(token)==0){
        subscriptionPlan=[
        {
            name:"Unauthentificated",
            price:"Free",
            description:[
                "check 5 news only",
                "check using text and title",
            ],
            navigation_link:'/formTextTitlePage',
        },
        {
            name:"Authentificated",
            price:"Free",
            description:[
                "check 10 news only",
                "check using text and title",
            ],
            navigation_link:'/login',
        },
        {
            name:"Premium",
            price:"$ 5.99/mo",
            description:[
                "check 100.000 news",
                "check using text and title",
                "check using URL"
            ],
            navigation_link:'/login',
        }
        ]
    }
    else{
        subscriptionPlan=[
        {
            name:"Unauthentificated",
            price:"Free",
            description:[
                "check 5 news only",
                "check using text and title",
            ],
            navigation_link:'/formTextTitlePage',
        },
        {
            name:"Authentificated",
            price:"Free",
            description:[
                "check 10 news only",
                "check using text and title",
            ],
            navigation_link:'/formTextTitlePage',
        }
    ]
    }
    return subscriptionPlan
}