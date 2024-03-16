import Image from 'next/image'

export default function Banner() {
    return (
        <div className='block p-1 m-0 w-screen relative h-[80vh]'>
            <Image src={'/img/vaccine.png'}
            alt='cover'
            fill={true}
            priority
            style={{objectFit:"cover"}}/>
            <div className='relative z-20 text-center top-24'>
                <h1 className='text-4xl font-medium'>Vaccine Service Center</h1>
                <h2 className='text-xl font-serif'>Get Covid-19 Protection Now!!!</h2>
            </div>
        </div>
    );
}