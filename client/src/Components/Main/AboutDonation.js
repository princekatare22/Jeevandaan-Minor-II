import React from 'react'
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"

const AboutDonation = () => {
    const data = [
        { title: "Registration", img: g1 },
        { title: "Seeing", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
    ]
    return (
        <section className="grid place-items-center dark:text-white-900">
            <div className="container">
                <div className="text-center"><br />
                    <h2 className='text-3xl font-bold'>Donation Process</h2>
                    <code>The donation process from the time you arrive center until the time you leave</code><br /><br />
                </div>
                <div className='grid grid-cols-4 place-items-center'>
                    {/* {data.map((e, i) =>
                        <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={e.img} draggable={false} width="100%" alt="" />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>{i + 1} - {e.title}</h1>
                                <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur qwey adipisicing elit. Doloribus, as aliquam corporis dolorem consectetur qui libero, veritatis, nihil alias repellat quam architecto nobis laudantium ipsum nemo nesciunt quisquam est odit ad?</p>
                            </div>
                        </div>
                    )} */}
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={g1} draggable={false} width="100%" alt="" />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>Registration</h1>
                                <p className='text-justify'>We’ll sign you in and go over basic eligibility.
                                You’ll be asked to show ID, such as your driver’s license.You’ll read some information about donating blood.We’ll ask you for your complete address.  Your address needs to be complete (including PO Box, street/apartment number) and the place where you will receive your mail 8 weeks from donation</p>
                            </div>
                    </div>
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={g2} draggable={false} width="100%" alt="" />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>Health History</h1>
                                <p className='text-justify'>You’ll answer a few questions about your health history and places you’ve traveled, during a private and confidential interview.You’ll tell us about any prescription and/or over the counter medications that may be in your system. We’ll check your temperature, pulse, blood pressure and hemoglobin level. It is important to let the details be known.</p>
                            </div>
                    </div>
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={g3} draggable={false} width="100%" alt="" />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>Donation</h1>
                                <p className='text-justify'>Important to cleanse an area on your arm and insert a brand new sterile needle for the blood draw.For platelets, are made using an apheresis machine which will be connected to both arms.A whole blood donation takes about 8-10 minutes, during which you’ll be seated or lying down.When pint of whole blood has been collected,the donation is complete.</p>
                            </div>
                    </div>
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={g4} draggable={false} width="100%" alt="" />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>Refreshments and Recovery</h1>
                                <p className='text-justify'>After donating blood, you’ll have a snack and something to drink in the refreshment area.You’ll leave after 10-15 minutes and continue your normal routine.Enjoy the feeling of accomplishment knowing you are helping to save lives.Take a selfie, or simply share your good deed with friends. It may inspire them to become blood donors.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDonation