export function UnpaidProfile({name,email}){
    return (
        <div class="sticky top-0 w-1/2 max-sm:w-screen max-sm:static max-sm:text-center h-full max-w-md pl-10 flex flex-col justify-center">
            <h1 class="text-8xl max-sm:text-6xl font-bold">Welcome back!</h1>
            <h3 class="text-xl tracking-[.90em] text-myRed">Account details</h3>
            <p class="mt-10">
                Hello, <span class="text-myRed font-bold">{name}</span>! 
                The email associated with this account is <span class="text-myRed font-bold">{email}</span>. The 
                subscription you have is <span class="text-myRed font-bold">Full Access</span>, so you can check a total number 
                of <span class="text-myRed font-bold">5</span> news articles.
                On the right-hand side, there is a brief history of the predicted news.
            </p>
        </div>
    )
}