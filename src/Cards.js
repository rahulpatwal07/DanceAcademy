import React from 'react'
import Card from './Card'

export default function Cards() {
  return (
    <div>
        <h1 className='card-heading'>
            Top Dance catergory of our Academy
        </h1>
      <div className='d-flex aligns-items-center justify-content-center text-center mx-auto '>
          <Card title='Bharatnatayam' description= "Bharatanatyam is a major form of Indian classical dance that originated in Tamil Nadu.It is one of the eight widely recognized Indian classical dance forms, and expresses South Indian religious themes and spiritual ideas, particularly of Shaivism and in general of Hinduism" source = 'http://clipartstation.com/wp-content/uploads/2017/11/classical-dance-clipart-black-and-white.jpg'/>
        <Card title='Break Dance' description= "Break dancing, also called breaking and B-boying, energetic form of dance, fashioned and popularized by African Americans and Latinos, that includes stylized footwork and athletic moves such as back spins or head spins. Break dancing originated in New York City during the late 1960s and early 70s." source = 'http://pluspng.com/img-png/hip-hop-dance-png-black-and-white-keywords-hip-hop-dancing-silhouette-dancer-720.png'/>
        <Card title='Salsa' description= "Salsa is a latin dance, associated with the music genre of the same name, which was first popularized in the United States in the 1960s in New York City.Salsa is a mixture of Cuban dances, such as mambo, pachanga and rumba, as well as American dances such as swing and tap." source = 'https://tse3.mm.bing.net/th?id=OIP.ij2gdHBSnryBf4Z3a1F4nQHaHO&pid=Api&P=0'/>
    </div>
    </div>
  )
}
