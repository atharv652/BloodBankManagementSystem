import pic from '../staticSources/icon.jpg'
export default function Home()
{
    return(
        <div>
            <marquee behavior="scroll" direction="left" style={{ background: 'red', padding: '10px', fontWeight: 'bold' }}>
                Welcome to Lifestream BloodBank - Saving Lives Every Day!                                                                                      
                World Blood Donation Day is Celebrated on 24th June!!

            </marquee>
            <h1>Welcome To Lifestream BloodBank</h1>
            <img src= {pic}/>
        </div>
    )
}