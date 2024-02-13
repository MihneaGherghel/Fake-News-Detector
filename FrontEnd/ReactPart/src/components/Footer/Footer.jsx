import Information from "./Information";

export default function Footer(){
    return (
        <footer class="bg-myRed flex justify-around pt-14 pb-10">
            <section>
                <h2 class="text-3xl font-bold mb-5">Contact</h2>
                <Information>Fast Check</Information>
                <Information>19A Fanionului Street</Information>
                <Information>Brasov, Romania 500245</Information>
            </section>
            <section>
                <Information>Tel +40-741-106-808</Information>
                <Information>Email mihnea.gherghel@gmai.com</Information>
                <Information>See us also on:</Information>
                <div class="flex justify-around w-3/4 mt-3">
                    <a href="#"><img class="w-[1.25rem] h-[1.25rem] hover:w-[1.50rem] hover:h-[1.50rem]" src="./facebookIcon.svg"/></a>
                    <a href="#"><img class="w-[1.50rem] h-[1.50rem] hover:w-[1.75rem] hover:h-[1.75rem]" src="./instagramIcon.svg"/></a>
                    <a href="#"><img class="w-[1.50rem] h-[1.50rem] hover:w-[1.75rem] hover:h-[1.75rem]" src="./twitterIcon.svg"/></a>
                </div>
            </section>
        </footer>
    )
}