import React from 'react'

const About = () => {
  return (
    <div className='px-44'>
      <p className='text-4xl font-bold text-center underline mt-4'>About Jeevandan</p>
      <br /><p className='text-xl'>Jeevandan works as a platform for users to register as blood to either request/donate blood.The system will authenticate the user using their username(mobile) and password to further perform other actions.</p>
      <br /><p className='text-xl'>It includes managing and tracking blood donations, connecting donors with recipients, and providing real-time information on blood shortages and needs.</p>
      <br /><p className='text-xl'>Every day an average of 12000 individuals die due to lack of quality blood.
      1 person donating healthy blood can save up to 3 lives. We call for relatives, blood banks and ask people to help through social  media when we are in urgent need of blood.
      JEEVANDAN can help people reach out to the donor directly without delay which can further save thousands of lives.
</p>
      <p className='text-right text-5xl'>
        <br />
        <a target="_blank" href="#" className='hover:drop-shadow-md hover:text-purple'><i class="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href="#" className='hover:drop-shadow-md hover:text-metal'><i class="fa-brands fa-linkedin"></i> </a>&nbsp;&nbsp;
        <a target="_blank" href="#" className='hover:drop-shadow-md hover:text-metal'><i class="fa-brands fa-facebook"></i> </a>&nbsp;&nbsp;
        <a target="_blank" href="#" className='hover:drop-shadow-md hover:text-metal'><i class="fa-brands fa-twitter"></i> </a>&nbsp;&nbsp;
        <a target="_blank" href="#" className='hover:drop-shadow-md hover:text-metal'><i class="fa-brands fa-instagram"></i> </a>&nbsp;&nbsp;
      </p>
    </div>
  )
}

export default About